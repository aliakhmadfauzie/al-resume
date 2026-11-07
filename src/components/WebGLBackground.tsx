import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WebGLBackgroundProps {
  className?: string;
  intensity?: number;
}

export const WebGLBackground: React.FC<WebGLBackgroundProps> = ({
  className = '',
  intensity = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // 1. Accessibility Check: prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const container = containerRef.current;
    if (!container) return;

    // 2. WebGL Support Verification
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio <= 1,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL not supported or context unavailable:', e);
      setIsSupported(false);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    // 4. Construct Enterprise Architecture 3D Constellation
    // 120 nodes representing 365+ Modernized Systems, Dataverse Tables & AI Routers
    const NODE_COUNT = 90;
    const nodePositions = new Float32Array(NODE_COUNT * 3);
    const nodeColors = new Float32Array(NODE_COUNT * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    // Color Palette: Copper-Orange (#f97316), Amber-Gold (#f59e0b), Emerald Accent (#22c55e)
    const colorOrange = new THREE.Color(0xf97316);
    const colorAmber = new THREE.Color(0xfbbf24);
    const colorEmerald = new THREE.Color(0x22c55e);

    for (let i = 0; i < NODE_COUNT; i++) {
      const idx = i * 3;
      // Distribute in a balanced ellipsoidal cloud
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 55;

      const x = r * Math.sin(phi) * Math.cos(theta) * 1.5;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.9;
      const z = (r * Math.cos(phi) - 10) * 0.8;

      nodePositions[idx] = x;
      nodePositions[idx + 1] = y;
      nodePositions[idx + 2] = z;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.03
      });

      // Assign subtle color hierarchy
      const colorRoll = Math.random();
      let chosenColor = colorOrange;
      if (colorRoll > 0.75) {
        chosenColor = colorAmber;
      } else if (colorRoll > 0.65) {
        chosenColor = colorEmerald;
      }

      nodeColors[idx] = chosenColor.r;
      nodeColors[idx + 1] = chosenColor.g;
      nodeColors[idx + 2] = chosenColor.b;
    }

    // Node Points Geometry & Custom Particle Texture
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(nodePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(nodeColors, 3)
    );

    // Canvas procedural circular point sprite
    const makeCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(249, 115, 22, 0.85)');
        gradient.addColorStop(0.7, 'rgba(249, 115, 22, 0.25)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = makeCircleTexture();

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85 * intensity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Dynamic Connecting Filaments (Line Segments)
    const MAX_CONNECTIONS = 180;
    const linePositions = new Float32Array(MAX_CONNECTIONS * 2 * 3);
    const lineColors = new Float32Array(MAX_CONNECTIONS * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35 * intensity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);

    // 5. Cursor Tracking with Damped Inertial Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 14;
      targetY = y * 10;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Responsive Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 7. 60 FPS Render Loop with Delta Timing and Page Visibility Pause
    let animationFrameId: number;
    let isPageVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const CONNECTION_DISTANCE = 22;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Save CPU/GPU in background tabs
      if (!isPageVisible) return;

      // Inertial cursor smoothing (Lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle scroll parallax
      const scrollOffset = scrollY * 0.02;

      camera.position.x = mouseX * 0.6;
      camera.position.y = mouseY * 0.6 - scrollOffset * 0.5;
      camera.lookAt(0, -scrollOffset * 0.3, 0);

      // Idle Rotation if reduced motion is disabled
      if (!motionQuery.matches) {
        particleSystem.rotation.y += 0.0008;
        lineSystem.rotation.y += 0.0008;
        particleSystem.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
        lineSystem.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;

        // Animate individual nodes subtly within bounding space
        const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute;
        const positions = posAttr.array as Float32Array;

        for (let i = 0; i < NODE_COUNT; i++) {
          const idx = i * 3;
          const vel = nodeVelocities[i];

          positions[idx] += vel.x;
          positions[idx + 1] += vel.y;
          positions[idx + 2] += vel.z;

          // Boundary bouncing
          if (Math.abs(positions[idx]) > 70) vel.x *= -1;
          if (Math.abs(positions[idx + 1]) > 45) vel.y *= -1;
          if (Math.abs(positions[idx + 2]) > 35) vel.z *= -1;
        }
        posAttr.needsUpdate = true;

        // Recompute inter-node filament connections
        let connectionCount = 0;
        const lPositions = lineGeometry.getAttribute('position') as THREE.BufferAttribute;
        const lColors = lineGeometry.getAttribute('color') as THREE.BufferAttribute;
        const lPosArray = lPositions.array as Float32Array;
        const lColArray = lColors.array as Float32Array;

        for (let i = 0; i < NODE_COUNT; i++) {
          for (let j = i + 1; j < NODE_COUNT; j++) {
            if (connectionCount >= MAX_CONNECTIONS) break;

            const i3 = i * 3;
            const j3 = j * 3;

            const dx = positions[i3] - positions[j3];
            const dy = positions[i3 + 1] - positions[j3 + 1];
            const dz = positions[i3 + 2] - positions[j3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < CONNECTION_DISTANCE) {
              const lineIdx = connectionCount * 6;
              const alpha = 1.0 - dist / CONNECTION_DISTANCE;

              // Vertex 1
              lPosArray[lineIdx] = positions[i3];
              lPosArray[lineIdx + 1] = positions[i3 + 1];
              lPosArray[lineIdx + 2] = positions[i3 + 2];
              lColArray[lineIdx] = 0.98 * alpha;
              lColArray[lineIdx + 1] = 0.45 * alpha;
              lColArray[lineIdx + 2] = 0.09 * alpha;

              // Vertex 2
              lPosArray[lineIdx + 3] = positions[j3];
              lPosArray[lineIdx + 4] = positions[j3 + 1];
              lPosArray[lineIdx + 5] = positions[j3 + 2];
              lColArray[lineIdx + 3] = 0.98 * alpha;
              lColArray[lineIdx + 4] = 0.57 * alpha;
              lColArray[lineIdx + 5] = 0.24 * alpha;

              connectionCount++;
            }
          }
        }

        lineGeometry.setDrawRange(0, connectionCount * 2);
        lPositions.needsUpdate = true;
        lColors.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Robust Cleanup & Disposal (Mandatory Memory Management)
    return () => {
      cancelAnimationFrame(animationFrameId);
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  if (!isSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={{
        opacity: isReducedMotion ? 0.35 : 0.88,
        transition: 'opacity 0.6s ease'
      }}
    />
  );
};
