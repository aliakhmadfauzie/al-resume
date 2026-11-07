import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Layers, Cpu, ShieldCheck, Database, CheckCircle2, Server, Workflow, ArrowRight } from 'lucide-react';
import { useAppMode } from '../../context/AppModeContext';

interface SpatialCore3DProps {
  className?: string;
  size?: number;
}

export const SpatialCore3D: React.FC<SpatialCore3DProps> = ({
  className = '',
  size = 320
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion, isSkimMode } = useAppMode();
  
  const [activeTier, setActiveTier] = useState<number>(0);
  const [hasWebGLError, setHasWebGLError] = useState<boolean>(false);

  // ─── Semantic 3-Tier Enterprise Architecture Stack ───
  const tiers = [
    {
      id: 'dataverse',
      name: 'Tier 1: Data Foundation & Relational Core',
      shortLabel: 'Dataverse Foundation',
      icon: Database,
      color: '#2997ff',
      tagline: 'Normalized Relational Dataverse Schema & SAP Hybrid Gateway',
      components: [
        'Dataverse Normalized Relational Schema',
        'SAP RFC Gateway Connector (BAPI Sync)',
        'Lotus Domino NSF Document Archive (Read-Only Mount)',
        'Interim SharePoint Cost-Optimized Staging Layer'
      ],
      protocols: 'OData v4 · TDS Endpoint · Kerberos / Entra SSO · Azure Service Bus',
      metrics: '361 Forms · 10M+ Records · 0% Loss'
    },
    {
      id: 'governance',
      name: 'Tier 2: Business Logic & Enterprise Governance',
      shortLabel: 'Logic & Governance',
      icon: ShieldCheck,
      color: '#30d158',
      tagline: 'C# Plugins, Security Roles & Multi-Tier Approvals',
      components: [
        'C# Plugins (Pre/Post-Operation Stages with Concurrency Locks)',
        'Power Automate Cloud Flows (Sequential & Parallel Approvals)',
        'Hierarchical Business Unit & RBAC Security Matrix',
        'Enterprise ALM Azure DevOps Git Pipeline'
      ],
      protocols: 'IPlugin Execution Pipeline · Webhooks · Entra ID RBAC · Solution Packager',
      metrics: '98%+ SLA Compliance · 4-Tier Approvals'
    },
    {
      id: 'experience',
      name: 'Tier 3: Enterprise Experience & AI Hubs',
      shortLabel: 'Experience & AI',
      icon: Sparkles,
      color: '#bf5af2',
      tagline: 'Multi-device Canvas Apps, Model-Driven UI & AI Builder',
      components: [
        'Power Apps Canvas UI (Adaptive 48dp Touch Targets)',
        'Model-Driven Applications for Executive Portals',
        'Microsoft Teams Adaptive Cards & Actionable Messages',
        'AI Builder NLP Model (120+ SOP Categories Categorized)'
      ],
      protocols: 'Direct Dataverse Binding · Fluid UI Insets · AI Builder Runtime · Graph API',
      metrics: '28 Business Units · 2,000+ Users · 95% AI Conf'
    }
  ];

  // WebGL 3D Visualization Loop
  useEffect(() => {
    if (shouldReduceMotion || isSkimMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, depth: true });
    if (!gl) {
      setHasWebGLError(true);
      return;
    }

    let animationFrameId: number;
    let isIntersecting = true;
    let isDocumentVisible = !document.hidden;

    const width = (canvas.width = size * window.devicePixelRatio);
    const height = (canvas.height = size * window.devicePixelRatio);
    gl.viewport(0, 0, width, height);

    // Vertex Shader: 3-Tier Geodesic Architecture Topology
    const vsSource = `
      attribute vec3 aPosition;
      attribute vec3 aColor;
      attribute float aSize;

      uniform mat4 uMatrix;
      uniform float uTime;
      uniform float uPulseTime;
      uniform float uActiveTier;

      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec3 pos = aPosition;

        // Shockwave pulse wave on click
        float pulseAge = uTime - uPulseTime;
        if (pulseAge >= 0.0 && pulseAge < 2.0) {
          float wave = sin(pulseAge * 6.0) * exp(-pulseAge * 2.5);
          pos += normalize(pos) * wave * 0.45;
        }

        // Ambient architectural breathing
        float breath = 1.0 + sin(uTime * 1.5 + pos.y * 3.0) * 0.035;
        pos *= breath;

        vec4 projected = uMatrix * vec4(pos, 1.0);
        gl_Position = projected;

        // 3D perspective attenuation
        float depth = (projected.z + 2.5) / 5.0;
        gl_PointSize = max(2.5, aSize * (1.6 / (projected.w + 0.1)));

        vColor = aColor;
        vAlpha = clamp(depth * 1.15, 0.25, 1.0);
      }
    `;

    // Fragment Shader: Glowing particle with soft circular falloff
    const fsSource = `
      precision mediump float;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;
        float strength = smoothstep(0.5, 0.05, dist);
        gl_FragColor = vec4(vColor, vAlpha * strength);
      }
    `;

    // Line Shaders for Architecture Interconnects
    const lineVsSource = `
      attribute vec3 aPosition;
      uniform mat4 uMatrix;
      uniform float uTime;
      void main() {
        vec3 pos = aPosition;
        pos *= 1.0 + sin(uTime * 1.5 + pos.y * 2.0) * 0.035;
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

    const compileShader = (src: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const pVs = compileShader(vsSource, gl.VERTEX_SHADER);
    const pFs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    const pointProgram = gl.createProgram()!;
    gl.attachShader(pointProgram, pVs);
    gl.attachShader(pointProgram, pFs);
    gl.linkProgram(pointProgram);

    const lVs = compileShader(lineVsSource, gl.VERTEX_SHADER);
    const lFs = compileShader(lineFsSource, gl.FRAGMENT_SHADER);
    const lineProgram = gl.createProgram()!;
    gl.attachShader(lineProgram, lVs);
    gl.attachShader(lineProgram, lFs);
    gl.linkProgram(lineProgram);

    // ── Generate 3D Topology Vertices representing the 3 Tiers ──
    const positions: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];
    const lineIndices: number[] = [];

    // Core Icosahedron for Tier 1: Dataverse Core (Blue #2997ff)
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseVerts = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];

    const c1 = [0.16, 0.59, 1.0]; // Tier 1 Dataverse Blue
    const c2 = [0.19, 0.82, 0.35]; // Tier 2 Governance Green
    const c3 = [0.75, 0.35, 0.95]; // Tier 3 Experience Purple

    baseVerts.forEach((v) => {
      const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      positions.push((v[0] / len) * 0.72, (v[1] / len) * 0.72, (v[2] / len) * 0.72);
      colors.push(...c1);
      sizes.push(7.0);
    });

    // Outer Orbital Ring 1 for Tier 2: Governance (Green)
    const ring1Count = 28;
    for (let i = 0; i < ring1Count; i++) {
      const theta = (i / ring1Count) * Math.PI * 2;
      const r = 1.15;
      positions.push(Math.cos(theta) * r, Math.sin(theta) * r * 0.45, Math.sin(theta) * r * 0.85);
      colors.push(...c2);
      sizes.push(4.5);
    }

    // Outer Orbital Ring 2 for Tier 3: Experience & AI (Purple)
    const ring2Count = 32;
    for (let i = 0; i < ring2Count; i++) {
      const theta = (i / ring2Count) * Math.PI * 2;
      const r = 1.48;
      positions.push(Math.sin(theta) * r * 0.8, Math.cos(theta) * r, Math.sin(theta) * r * 0.5);
      colors.push(...c3);
      sizes.push(5.0);
    }

    // Connect core nodes with lines
    const baseLines = [
      [0,1],[0,5],[0,7],[0,10],[0,11],
      [1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],
      [3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],[10,11]
    ];
    baseLines.forEach(([a, b]) => lineIndices.push(a, b));

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);

    const lineIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(lineIndices), gl.STATIC_DRAW);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    // Interaction state
    let rotX = 0.25;
    let rotY = 0.0;
    let velX = 0.003;
    let velY = 0.007;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let pulseTime = -10.0;
    const startTime = performance.now();

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      pulseTime = (performance.now() - startTime) / 1000.0;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx * 0.01;
      rotX += dy * 0.01;
      velX = dy * 0.003;
      velY = dx * 0.003;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Matrix utility
    const createPerspective = (fov: number, aspect: number, near: number, far: number) => {
      const f = 1.0 / Math.tan(fov / 2);
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) / (near - far), -1,
        0, 0, (2 * far * near) / (near - far), 0
      ];
    };

    const render = (time: number) => {
      if (!isIntersecting || !isDocumentVisible) return;

      const elapsed = (time - startTime) / 1000.0;

      if (!isDragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.96;
        velY *= 0.96;
        if (Math.abs(velX) < 0.001) velX = 0.002;
        if (Math.abs(velY) < 0.002) velY = 0.006;
      }

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Build 4x4 model-view-projection matrix
      const proj = createPerspective(Math.PI / 4, 1.0, 0.1, 100.0);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      const m = [
        cosY, sinX * sinY, -cosX * sinY, 0,
        0, cosX, sinX, 0,
        sinY, -sinX * cosY, cosX * cosY, 0,
        0, 0, -3.2, 1
      ];

      const mvp = new Float32Array(16);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          let sum = 0;
          for (let k = 0; k < 4; k++) {
            sum += proj[i + k * 4] * m[k + j * 4];
          }
          mvp[i + j * 4] = sum;
        }
      }

      // Draw Wireframe Lines
      gl.useProgram(lineProgram);
      const lMatLoc = gl.getUniformLocation(lineProgram, 'uMatrix');
      const lTimeLoc = gl.getUniformLocation(lineProgram, 'uTime');
      const lColorLoc = gl.getUniformLocation(lineProgram, 'uLineColor');
      const lPosLoc = gl.getAttribLocation(lineProgram, 'aPosition');

      gl.uniformMatrix4fv(lMatLoc, false, mvp);
      gl.uniform1f(lTimeLoc, elapsed);
      gl.uniform4f(lColorLoc, 0.16, 0.59, 1.0, 0.28);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(lPosLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(lPosLoc);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, lineIndexBuffer);
      gl.drawElements(gl.LINES, lineIndices.length, gl.UNSIGNED_SHORT, 0);

      // Draw Star Nodes
      gl.useProgram(pointProgram);
      const pMatLoc = gl.getUniformLocation(pointProgram, 'uMatrix');
      const pTimeLoc = gl.getUniformLocation(pointProgram, 'uTime');
      const pPulseLoc = gl.getUniformLocation(pointProgram, 'uPulseTime');
      const pActiveTierLoc = gl.getUniformLocation(pointProgram, 'uActiveTier');
      const pPosLoc = gl.getAttribLocation(pointProgram, 'aPosition');
      const pColorLoc = gl.getAttribLocation(pointProgram, 'aColor');
      const pSizeLoc = gl.getAttribLocation(pointProgram, 'aSize');

      gl.uniformMatrix4fv(pMatLoc, false, mvp);
      gl.uniform1f(pTimeLoc, elapsed);
      gl.uniform1f(pPulseLoc, pulseTime);
      gl.uniform1f(pActiveTierLoc, activeTier);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(pPosLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pPosLoc);

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(pColorLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pColorLoc);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.vertexAttribPointer(pSizeLoc, 1, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pSizeLoc);

      gl.drawArrays(gl.POINTS, 0, positions.length / 3);

      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      cancelAnimationFrame(animationFrameId);
      if (isIntersecting && isDocumentVisible && !shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => cancelAnimationFrame(animationFrameId);

    const handleVisibility = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible) startLoop();
      else stopLoop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? true;
        if (isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    startLoop();

    return () => {
      stopLoop();
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      gl.deleteBuffer(posBuffer);
      gl.deleteBuffer(colorBuffer);
      gl.deleteBuffer(sizeBuffer);
      gl.deleteBuffer(lineIndexBuffer);
      gl.deleteProgram(pointProgram);
      gl.deleteProgram(lineProgram);
      gl.deleteShader(pVs);
      gl.deleteShader(pFs);
      gl.deleteShader(lVs);
      gl.deleteShader(lFs);
    };
  }, [size, shouldReduceMotion, isSkimMode, activeTier]);

  const currentTier = tiers[activeTier];
  const TierIcon = currentTier.icon;

  // ─── Graceful Fallback Mode: 2.5D Isometric Architecture Blueprint (Accessible & Zero-Battery) ───
  if (shouldReduceMotion || isSkimMode || hasWebGLError) {
    return (
      <div 
        ref={containerRef}
        className={`w-full max-w-lg mx-auto apple-card rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 bg-white/[0.03] backdrop-blur-2xl ${className}`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center space-x-2">
            <Server className="w-4 h-4 text-[#2997ff]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Enterprise Architecture Topology
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-neutral-300 border border-white/10">
            Interactive Blueprint
          </span>
        </div>

        {/* Tier Selector Pills */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-neutral-900/80 border border-white/10">
          {tiers.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTier(idx)}
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
                activeTier === idx
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {t.shortLabel}
            </button>
          ))}
        </div>

        {/* Selected Tier Inspector */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
          <div className="flex items-center space-x-2.5">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/10"
              style={{ backgroundColor: `${currentTier.color}22` }}
            >
              <TierIcon className="w-4 h-4" style={{ color: currentTier.color }} />
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-tight">{currentTier.name}</p>
              <p className="text-[11px] text-neutral-400 font-mono">{currentTier.tagline}</p>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">Active Components</p>
            <div className="grid grid-cols-1 gap-1.5">
              {currentTier.components.map((comp) => (
                <div key={comp} className="flex items-start space-x-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: currentTier.color }} />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>Throughput: <strong className="text-white">{currentTier.metrics}</strong></span>
            <span className="text-xs text-[#2997ff] font-sans font-medium flex items-center gap-1">
              Verified Specs <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ─── 3D Mode: WebGL Geodesic Topology with Semantic Architecture Inspector ───
  return (
    <div 
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* Ambient background glow keyed to active architecture tier */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-[90px] pointer-events-none transition-colors duration-1000 opacity-25"
        style={{ backgroundColor: currentTier.color }}
      />

      {/* WebGL Canvas & Core Node Icon */}
      <div className="relative cursor-grab active:cursor-grabbing group">
        <canvas
          ref={canvasRef}
          style={{ width: size, height: size }}
          className="block transition-transform duration-300 group-hover:scale-105"
          title="Drag to rotate 3-Tier Enterprise Topology • Click to pulse"
        />

        {/* Central Architecture Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-12 h-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center transition-all duration-500 shadow-[0_0_24px_rgba(41,151,255,0.4)]"
            style={{ borderColor: `${currentTier.color}88` }}
          >
            <TierIcon className="w-5 h-5 transition-colors duration-500" style={{ color: currentTier.color }} />
          </div>
        </div>
      </div>

      {/* Semantic Architecture Tier Tabs */}
      <div className="relative z-10 w-full max-w-sm -mt-2 space-y-2">
        <div className="flex items-center justify-center gap-1 p-1 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
          {tiers.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTier(idx)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono font-medium transition-all ${
                activeTier === idx
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {t.shortLabel}
            </button>
          ))}
        </div>

        {/* Quick Architecture Live Spec Strip */}
        <div 
          onClick={() => setActiveTier((prev) => (prev + 1) % tiers.length)}
          className="apple-card rounded-2xl p-3 bg-black/60 border border-white/10 backdrop-blur-md cursor-pointer hover:border-white/25 transition-all text-left space-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentTier.color }} />
              {currentTier.name}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
              {currentTier.metrics}
            </span>
          </div>
          <p className="text-[11px] text-neutral-400 leading-snug truncate">
            {currentTier.tagline}
          </p>
        </div>

        <p className="text-[10px] text-center text-neutral-500 font-mono tracking-wider uppercase">
          Drag to inspect topology • Click card to cycle tiers
        </p>
      </div>
    </div>
  );
};
