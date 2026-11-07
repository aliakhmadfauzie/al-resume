import React, { useEffect, useRef } from 'react';
// Zero-dependency motion check

interface AppleWebGLMeshProps {
  className?: string;
  opacity?: number;
}

export const AppleWebGLMesh: React.FC<AppleWebGLMeshProps> = ({
  className = '',
  opacity = 0.75
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Zero-overhead quiet background when reduced motion or Skim Mode is enabled
    if (shouldReduceMotion) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, depth: false });
    if (!gl) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.clientWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * window.devicePixelRatio);

    // Vertex Shader: 3D point positions with depth attenuation, interactive mouse magnetic pull, and click shockwave
    const vsSource = `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      attribute float aSize;

      uniform mat4 uMatrix;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uClickPos;
      uniform float uClickTime;

      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec3 pos = aPosition;

        // Interactive 3D Cursor Magnetic Attraction
        float mouseDist = distance(pos.xy, uMouse);
        if (mouseDist < 1.4) {
          float pull = (1.0 - mouseDist / 1.4) * 0.18;
          pos.z += pull * 0.5;
          pos.xy += (uMouse - pos.xy) * pull * 0.35;
        }

        // Interactive 3D Click Shockwave Pulse
        float clickAge = uTime - uClickTime;
        if (clickAge >= 0.0 && clickAge < 2.6) {
          float waveRadius = clickAge * 2.8;
          float d = distance(pos.xy, uClickPos);
          float waveDiff = abs(d - waveRadius);
          if (waveDiff < 0.6) {
            float factor = (1.0 - waveDiff / 0.6) * exp(-clickAge * 1.3);
            pos.z += sin(waveDiff * 12.0) * factor * 0.65;
            pos.xy += normalize(pos.xy - uClickPos + vec2(0.001)) * factor * 0.4;
          }
        }

        // Subtle organic background breathing
        pos.y += sin(uTime * 0.7 + pos.x * 2.0) * 0.07;
        pos.x += cos(uTime * 0.5 + pos.z * 1.5) * 0.05;

        vec4 projected = uMatrix * vec4(pos, 1.0);
        gl_Position = projected;

        // Size attenuation based on depth
        float depth = (projected.z + 2.0) / 4.0;
        gl_PointSize = max(1.8, aSize * (1.25 / (projected.w + 0.1)));

        vColor = aColor;
        vAlpha = clamp(depth * 0.95, 0.2, 1.0);
      }
    `;

    // Fragment Shader: Soft anti-aliased glowing circular point
    const fsSource = `
      precision mediump float;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;

        float intensity = smoothstep(0.5, 0.05, dist);
        gl_FragColor = vec4(vColor, vAlpha * intensity);
      }
    `;

    // Line Vertex Shader for node connections with interactive 3D warp
    const lineVsSource = `
      attribute vec3 aPosition;
      uniform mat4 uMatrix;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uClickPos;
      uniform float uClickTime;

      void main() {
        vec3 pos = aPosition;

        // Interactive 3D Cursor Magnetic Attraction
        float mouseDist = distance(pos.xy, uMouse);
        if (mouseDist < 1.4) {
          float pull = (1.0 - mouseDist / 1.4) * 0.18;
          pos.z += pull * 0.5;
          pos.xy += (uMouse - pos.xy) * pull * 0.35;
        }

        // Interactive 3D Click Shockwave Pulse
        float clickAge = uTime - uClickTime;
        if (clickAge >= 0.0 && clickAge < 2.6) {
          float waveRadius = clickAge * 2.8;
          float d = distance(pos.xy, uClickPos);
          float waveDiff = abs(d - waveRadius);
          if (waveDiff < 0.6) {
            float factor = (1.0 - waveDiff / 0.6) * exp(-clickAge * 1.3);
            pos.z += sin(waveDiff * 12.0) * factor * 0.55;
            pos.xy += normalize(pos.xy - uClickPos + vec2(0.001)) * factor * 0.35;
          }
        }

        pos.y += sin(uTime * 0.7 + pos.x * 2.0) * 0.07;
        pos.x += cos(uTime * 0.5 + pos.z * 1.5) * 0.05;
        gl_Position = uMatrix * vec4(pos, 1.0);
      }
    `;

    const lineFsSource = `
      precision mediump float;
      uniform vec4 uLineColor;

      void main() {
        gl_FragColor = uLineColor;
      }
    `;

    // Helper: Compile Shader
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const pointVs = compileShader(gl.VERTEX_SHADER, vsSource);
    const pointFs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    const pointProgram = gl.createProgram();
    if (!pointVs || !pointFs || !pointProgram) return;

    gl.attachShader(pointProgram, pointVs);
    gl.attachShader(pointProgram, pointFs);
    gl.linkProgram(pointProgram);

    // Line program
    const lineVs = compileShader(gl.VERTEX_SHADER, lineVsSource);
    const lineFs = compileShader(gl.FRAGMENT_SHADER, lineFsSource);
    const lineProgram = gl.createProgram();
    if (!lineVs || !lineFs || !lineProgram) return;

    gl.attachShader(lineProgram, lineVs);
    gl.attachShader(lineProgram, lineFs);
    gl.linkProgram(lineProgram);

    // Generate Architectural Network Nodes (150 vertices)
    const NODE_COUNT = 150;
    const nodePositions: number[] = [];
    const nodeColors: number[] = [];
    const nodeSizes: number[] = [];

    // Vibrant Jewel-Tone Keynote Palette: Diamond White, Vivid Cyan, Electric Azure, Radiant Fuchsia/Violet, Emerald Mint, Amber Gold
    const colorPalette = [
      [1.0, 1.0, 1.0],        // Diamond White
      [0.0, 0.92, 1.0],       // Electric Cyan (#00eaff)
      [0.16, 0.59, 1.0],      // Vibrant Azure (#2997ff)
      [0.82, 0.32, 1.0],      // Radiant Violet (#d151ff)
      [0.2, 0.95, 0.52],      // Luminous Emerald (#33f285)
      [1.0, 0.78, 0.22]       // Amber Gold (#ffc738)
    ];

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 2.4;
      const x = Math.cos(theta) * radius;
      const y = (Math.random() - 0.5) * 2.4;
      const z = Math.sin(theta) * radius - 0.2;

      nodePositions.push(x, y, z);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      nodeColors.push(color[0], color[1], color[2]);

      const size = (Math.random() * 3.5 + 2.2) * window.devicePixelRatio;
      nodeSizes.push(size);
    }

    // Interconnect nearby nodes with lines
    const lineIndices: number[] = [];
    const MAX_DISTANCE = 0.78;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodePositions[i * 3] - nodePositions[j * 3];
        const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
        const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < MAX_DISTANCE) {
          lineIndices.push(i, j);
        }
      }
    }

    // Buffers
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nodePositions), gl.STATIC_DRAW);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nodeColors), gl.STATIC_DRAW);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nodeSizes), gl.STATIC_DRAW);

    const lineIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(lineIndices), gl.STATIC_DRAW);

    // â”€â”€ Interactive User Tracking (Pointer + Click Shockwave + Scroll Momentum) â”€â”€
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    // Normalized mouse in world coordinate space
    let curMouseX = 0;
    let curMouseY = 0;

    // Click shockwave
    let clickTime = -10.0;
    let clickX = 0;
    let clickY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.55;
      targetRotX = -ny * 0.45;

      curMouseX = nx * 3.5;
      curMouseY = -ny * 3.5;
    };

    const handlePointerDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      clickX = nx * 3.5;
      clickY = -ny * 3.5;
      clickTime = (performance.now() - startTime) * 0.001;
    };

    const handleWheel = (e: WheelEvent) => {
      targetRotX += e.deltaY * 0.0003;
      targetRotY += e.deltaX * 0.0003;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
      gl.viewport(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);
    gl.viewport(0, 0, width, height);

    // Matrix helper
    const createMatrix = (time: number) => {
      const aspect = width / height;
      const fov = 45 * (Math.PI / 180);
      const near = 0.1;
      const far = 100.0;
      const f = 1.0 / Math.tan(fov / 2);

      const p = [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) / (near - far), -1,
        0, 0, (2 * far * near) / (near - far), 0
      ];

      // Camera rotation with auto drift
      const currentRotY = rotY + time * 0.04;
      const currentRotX = rotX + Math.sin(time * 0.2) * 0.06;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const tz = -3.8;

      return [
        p[0] * cosY,
        p[5] * sinX * sinY,
        p[10] * cosX * sinY,
        p[11] * cosX * sinY,

        0,
        p[5] * cosX,
        -p[10] * sinX,
        -p[11] * sinX,

        -p[0] * sinY,
        p[5] * sinX * cosY,
        p[10] * cosX * cosY,
        p[11] * cosX * cosY,

        0,
        0,
        p[10] * tz + p[14],
        p[11] * tz
      ];
    };

    const startTime = performance.now();
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE); // Additive blending for luminous glow

    const render = (now: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (now - startTime) * 0.001;

      // Smooth lerp mouse rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const matrix = createMatrix(elapsed);

      // â”€â”€â”€ Draw Network Lines â”€â”€â”€
      gl.useProgram(lineProgram);
      const lineMatrixLoc = gl.getUniformLocation(lineProgram, 'uMatrix');
      const lineTimeLoc = gl.getUniformLocation(lineProgram, 'uTime');
      const lineMouseLoc = gl.getUniformLocation(lineProgram, 'uMouse');
      const lineClickPosLoc = gl.getUniformLocation(lineProgram, 'uClickPos');
      const lineClickTimeLoc = gl.getUniformLocation(lineProgram, 'uClickTime');
      const lineColorLoc = gl.getUniformLocation(lineProgram, 'uLineColor');
      const linePosLoc = gl.getAttribLocation(lineProgram, 'aPosition');

      gl.uniformMatrix4fv(lineMatrixLoc, false, new Float32Array(matrix));
      gl.uniform1f(lineTimeLoc, elapsed);
      gl.uniform2f(lineMouseLoc, curMouseX, curMouseY);
      gl.uniform2f(lineClickPosLoc, clickX, clickY);
      gl.uniform1f(lineClickTimeLoc, clickTime);

      // Burst of luminescence right after a click
      const clickBurst = Math.max(0, 1.0 - (elapsed - clickTime) * 1.5) * 0.45;
      gl.uniform4f(lineColorLoc, 0.22, 0.72, 1.0, 0.22 + clickBurst);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(linePosLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(linePosLoc);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineIndexBuffer);
      gl.drawElements(gl.LINES, lineIndices.length, gl.UNSIGNED_SHORT, 0);

      // â”€â”€â”€ Draw Luminous Star Nodes â”€â”€â”€
      gl.useProgram(pointProgram);
      const pointMatrixLoc = gl.getUniformLocation(pointProgram, 'uMatrix');
      const pointTimeLoc = gl.getUniformLocation(pointProgram, 'uTime');
      const pointMouseLoc = gl.getUniformLocation(pointProgram, 'uMouse');
      const pointClickPosLoc = gl.getUniformLocation(pointProgram, 'uClickPos');
      const pointClickTimeLoc = gl.getUniformLocation(pointProgram, 'uClickTime');
      const pointPosLoc = gl.getAttribLocation(pointProgram, 'aPosition');
      const pointColorLoc = gl.getAttribLocation(pointProgram, 'aColor');
      const pointSizeLoc = gl.getAttribLocation(pointProgram, 'aSize');

      gl.uniformMatrix4fv(pointMatrixLoc, false, new Float32Array(matrix));
      gl.uniform1f(pointTimeLoc, elapsed);
      gl.uniform2f(pointMouseLoc, curMouseX, curMouseY);
      gl.uniform2f(pointClickPosLoc, clickX, clickY);
      gl.uniform1f(pointClickTimeLoc, clickTime);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(pointPosLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pointPosLoc);

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(pointColorLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pointColorLoc);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.vertexAttribPointer(pointSizeLoc, 1, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pointSizeLoc);

      gl.drawArrays(gl.POINTS, 0, NODE_COUNT);

      animationFrameId = requestAnimationFrame(render);
    };

    let isVisible = true;
    let isIntersecting = true;

    const startLoop = () => {
      cancelAnimationFrame(animationFrameId);
      if (isVisible && isIntersecting && !shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      cancelAnimationFrame(animationFrameId);
    };

    // Pause WebGL rendering when tab is hidden (battery preservation)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) startLoop();
      else stopLoop();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause WebGL rendering when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? true;
        if (isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    startLoop();

    // Full Garbage Collection & Context Cleanup
    return () => {
      stopLoop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);

      gl.deleteBuffer(posBuffer);
      gl.deleteBuffer(colorBuffer);
      gl.deleteBuffer(sizeBuffer);
      gl.deleteBuffer(lineIndexBuffer);
      gl.deleteProgram(pointProgram);
      gl.deleteProgram(lineProgram);
      gl.deleteShader(pointVs);
      gl.deleteShader(pointFs);
      gl.deleteShader(lineVs);
      gl.deleteShader(lineFs);
    };
  }, [shouldReduceMotion]);

  return (
    <div className={`pointer-events-none overflow-hidden select-none ${className}`} style={{ opacity }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
