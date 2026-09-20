import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasBG() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const objects = [];

    // 1. Math Geometric Polyhedron (Mathematics)
    const mathGeo = new THREE.IcosahedronGeometry(2.2, 0);
    const mathMat = new THREE.MeshStandardMaterial({
      color: 0x2563EB,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true
    });
    const mathMesh = new THREE.Mesh(mathGeo, mathMat);
    mathMesh.position.set(-8.5, 3.5, -2);
    scene.add(mathMesh);
    objects.push({ mesh: mathMesh, rx: 0.006, ry: 0.008, speedY: 0.002, origY: 3.5 });

    // 2. Science Atom Torus Ring (Science / Physics / Chemistry)
    const atomGeo = new THREE.TorusGeometry(2.2, 0.25, 16, 80);
    const atomMat = new THREE.MeshStandardMaterial({
      color: 0x10B981,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.85
    });
    const atomMesh = new THREE.Mesh(atomGeo, atomMat);
    atomMesh.position.set(9, -2.5, -3);
    scene.add(atomMesh);
    objects.push({ mesh: atomMesh, rx: 0.01, ry: 0.012, speedY: 0.003, origY: -2.5 });

    // Science nucleus sphere inside atom
    const nucleusGeo = new THREE.SphereGeometry(0.8, 16, 16);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x34D399,
      roughness: 0.2,
      metalness: 0.9
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleus.position.set(9, -2.5, -3);
    scene.add(nucleus);
    objects.push({ mesh: nucleus, rx: 0.005, ry: 0.005, speedY: 0.003, origY: -2.5 });

    // 3. Commerce Growth Cube / Balance (Commerce / Economics)
    const cubeGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      roughness: 0.3,
      metalness: 0.75,
      transparent: true,
      opacity: 0.9
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(-6.5, -4, -1);
    scene.add(cubeMesh);
    objects.push({ mesh: cubeMesh, rx: 0.005, ry: 0.007, speedY: 0.002, origY: -4 });

    // 4. Study Octahedron Prism (Excellence & Learning)
    const prismGeo = new THREE.OctahedronGeometry(1.8);
    const prismMat = new THREE.MeshStandardMaterial({
      color: 0x8B5CF6,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: true
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    prismMesh.position.set(7.5, 4.5, -4);
    scene.add(prismMesh);
    objects.push({ mesh: prismMesh, rx: 0.009, ry: 0.006, speedY: 0.002, origY: 4.5 });

    // Particle Stars/Dust
    const particleCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      // Soft blue, cyan, and amber hues
      const choice = Math.random();
      if (choice < 0.4) {
        colors[i] = 0.15; colors[i + 1] = 0.45; colors[i + 2] = 0.95; // Blue
      } else if (choice < 0.7) {
        colors[i] = 0.06; colors[i + 1] = 0.72; colors[i + 2] = 0.5; // Emerald
      } else {
        colors[i] = 0.96; colors[i + 1] = 0.62; colors[i + 2] = 0.04; // Amber
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.65
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3B82F6, 1.8);
    dirLight1.position.set(10, 20, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xF59E0B, 1.4);
    dirLight2.position.set(-15, -10, 10);
    scene.add(dirLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate objects gently
      objects.forEach((obj, idx) => {
        obj.mesh.rotation.x += obj.rx;
        obj.mesh.rotation.y += obj.ry;
        obj.mesh.position.y = obj.origY + Math.sin(elapsedTime * 1.2 + idx) * 0.4;
      });

      // Subtle particle drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Parallax camera easing
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
    />
  );
}
