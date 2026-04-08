"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * 3D animated trefoil snake — the centerpiece of the landing hero.
 *
 * Implementation:
 *   - TorusKnotGeometry(p=2, q=3) → trefoil shape (matches user's reference image)
 *   - Procedural scale texture (CanvasTexture) for diffuse + bump
 *   - MeshStandardMaterial with onBeforeCompile injecting a sine-wave vertex
 *     displacement → muscle-wave effect along the body
 *   - UV scroll on the diffuse + bump → scales appear to flow down the tube
 *   - Time-based gentle motion (no scroll-linked, kept simple)
 */
function makeScaleTexture(w = 1024, h = 512) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#4a5f36";
  ctx.fillRect(0, 0, w, h);

  const cols = 42;
  const rows = 18;
  const cw = w / cols;
  const rh = h / rows;

  for (let y = -1; y <= rows; y++) {
    for (let x = -1; x <= cols; x++) {
      const ox = x * cw + (y % 2 ? cw / 2 : 0);
      const oy = y * rh;
      const g = ctx.createRadialGradient(ox + cw / 2, oy + rh / 2, 0, ox + cw / 2, oy + rh / 2, cw * 0.75);
      g.addColorStop(0,    "#c4d89b");
      g.addColorStop(0.45, "#8fa868");
      g.addColorStop(0.85, "#4a5f36");
      g.addColorStop(1,    "#2a3a1e");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(ox + cw / 2, oy + rh / 2, cw * 0.58, rh * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.beginPath();
      ctx.ellipse(ox + cw / 2 - cw * 0.12, oy + rh / 2 - rh * 0.18, cw * 0.15, rh * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

function makeBumpTexture(w = 1024, h = 512) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, w, h);
  const cols = 42;
  const rows = 18;
  const cw = w / cols;
  const rh = h / rows;
  for (let y = -1; y <= rows; y++) {
    for (let x = -1; x <= cols; x++) {
      const ox = x * cw + (y % 2 ? cw / 2 : 0);
      const oy = y * rh;
      const g = ctx.createRadialGradient(ox + cw / 2, oy + rh / 2, 0, ox + cw / 2, oy + rh / 2, cw * 0.7);
      g.addColorStop(0,   "#ffffff");
      g.addColorStop(0.7, "#808080");
      g.addColorStop(1,   "#202020");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(ox + cw / 2, oy + rh / 2, cw * 0.55, rh * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function Snake() {
  const meshRef = useRef<THREE.Mesh>(null);
  const shaderRef = useRef<{ uniforms: { uTime: { value: number } } } | null>(null);

  const { material, diffuse, bump } = useMemo(() => {
    const diffuse = makeScaleTexture();
    const bump = makeBumpTexture();
    diffuse.repeat.set(6, 1.2);
    bump.repeat.set(6, 1.2);

    const material = new THREE.MeshStandardMaterial({
      map: diffuse,
      bumpMap: bump,
      bumpScale: 0.12,
      roughness: 0.52,
      metalness: 0.08,
      color: 0xffffff,
    });

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
           uniform float uTime;`,
        )
        .replace(
          "#include <begin_vertex>",
          `vec3 transformed = vec3( position );
           float wave  = sin(uv.x * 28.0 - uTime * 2.4) * 0.045;
                 wave += sin(uv.x * 11.0 - uTime * 1.3) * 0.020;
           transformed += normal * wave;`,
        );
      shaderRef.current = shader as unknown as { uniforms: { uTime: { value: number } } };
    };

    return { material, diffuse, bump };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const u = (t * 0.09) % 1;
    diffuse.offset.x = -u;
    bump.offset.x = -u;
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = t * 0.9;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow material={material}>
      <torusKnotGeometry args={[1.35, 0.38, 480, 64, 2, 3]} />
    </mesh>
  );
}

export function HeroSnake() {
  return (
    <Canvas
      className="hero-canvas"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 7.2, 3.4], fov: 32 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
    >
      <ambientLight intensity={0.35} color={0x8aa394} />
      <directionalLight
        position={[4, 9, 4]}
        intensity={1.35}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-radius={4}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-6, 3, -4]} intensity={0.55} color={0x4ade80} />
      <directionalLight position={[0, 2, -6]} intensity={0.18} color={0x6aa0d8} />

      <Snake />

      <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.55} />
      </mesh>
    </Canvas>
  );
}
