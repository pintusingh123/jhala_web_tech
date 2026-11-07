import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 22 : 17;
    // Shift slightly to the right on desktop to frame the hero nicely
    if (!isMobile) {
      camera.position.x = 2.5;
    }

    // 2. WebGL Renderer with High-Performance Settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Central 3D Geometric Group (Tvisha Golden Color #FDB345)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Inner Geometric Wireframe (Icosahedron)
    const icoGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xFDB345,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    mainGroup.add(icoMesh);

    // Inner Core Solid Octahedron
    const coreGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xF69B2E,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Orbiting Golden Ring 1
    const ring1Geometry = new THREE.TorusGeometry(5.8, 0.035, 12, 80);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0xFDB345,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // Orbiting Ring 2 (Perpendicular)
    const ring2Geometry = new THREE.TorusGeometry(6.6, 0.03, 12, 80);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // Constellation Floating Particle Cloud
    const particleCount = isMobile ? 50 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 4.5 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFDB345,
      size: isMobile ? 0.12 : 0.15,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 4. Smooth Mouse Parallax (No getBoundingClientRect on mousemove)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      targetX = ((e.clientX / window.innerWidth) * 2 - 1) * 0.5;
      targetY = -(((e.clientY / window.innerHeight) * 2 - 1) * 0.4);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 5. Visibility / Intersection Observer to halt WebGL render when not on screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 6. Smooth 60fps Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return; // 0% CPU consumption when scrolled past hero

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Inertial damping towards mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group continuous rotation + mouse parallax
      mainGroup.rotation.y += 0.22 * delta;
      mainGroup.rotation.x = mouseY * 0.35 + Math.sin(elapsedTime * 0.25) * 0.06;
      mainGroup.rotation.z = mouseX * 0.3;

      // Ring individual rotations
      ring1.rotation.z += 0.35 * delta;
      ring1.rotation.y += 0.18 * delta;
      ring2.rotation.x += 0.28 * delta;
      ring2.rotation.z -= 0.18 * delta;

      // Core pulsating oscillation
      const scale = 1 + Math.sin(elapsedTime * 1.4) * 0.05;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden opacity-75"
    />
  );
}
