import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube(){ return (
  <mesh rotation={[0.6,0.6,0]}>
    <boxGeometry args={[1.8,1.2,1.2]} />
    <meshStandardMaterial roughness={0.4} metalness={0.2} />
  </mesh>
);}

export default function Equipment(){
  return (
    <div>
      <h2>Equipment Library</h2>
      <p>Gas turbines, compressors, pumps, reformers, HTS/LTS, absorbers - brief descriptions and datasheet links.</p>
      <div style={{marginTop:12,background:'#fff',padding:12,borderRadius:8}}>
        <h3>3D Model Viewer</h3>
        <p>Replace public/models/sample-placeholder.gltf with your .glb/.gltf file. Use useGLTF from @react-three/drei to load.</p>
        <div style={{height:360,borderRadius:8,overflow:'hidden',background:'#f9fafb'}}>
          <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5,5,5]} />
            <Suspense fallback={null}><Cube /></Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </div>
  );
}