import React from 'react';
import Lottie from 'lottie-react';
import pulse from '../../public/animations/pulse.json';
export default function Home(){
  return (
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      <header style={{background:'linear-gradient(90deg,#2563eb,#06b6d4)',color:'white',padding:20,borderRadius:12}}>
        <h1 style={{margin:0}}>Syngas-Based Ammonia Plant Insights</h1>
        <p style={{marginTop:8}}>PFDs, P&IDs, equipment, SOPs, troubleshooting, calculators, and 3D models.</p>
      </header>
      <section style={{display:'flex',gap:12}}>
        <div style={{background:'#fff',padding:12,borderRadius:12,flex:1}}>PFD & P&amp;ID</div>
        <div style={{background:'#fff',padding:12,borderRadius:12,flex:1}}>Equipment Library</div>
        <div style={{background:'#fff',padding:12,borderRadius:12,flex:1}}>Engineering Toolkit</div>
      </section>
      <section style={{background:'#fff',padding:12,borderRadius:12,display:'flex',gap:12,alignItems:'center'}}>
        <div style={{width:180}}><Lottie animationData={pulse} loop={true} /></div>
        <div>
          <h3 style={{margin:0}}>Interactive 3D Viewer</h3>
          <p style={{marginTop:6}}>Open Equipment page to view a sample 3D model and replace it with your own GLTF/GLB.</p>
        </div>
      </section>
    </div>
  );
}