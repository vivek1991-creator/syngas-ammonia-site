import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav(){
  return (
    <nav style={{background:'#fff',padding:12,borderRadius:12,display:'flex',justifyContent:'space-between',alignItems:'center',boxShadow:'0 10px 20px rgba(0,0,0,0.05)'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontWeight:700,fontSize:18}}>Syngas Ammonia Hub</div>
        <div style={{display:'flex',gap:6}}>
          <Link to="/" style={{padding:'6px 10px'}}>Home</Link>
          <Link to="/pfd" style={{padding:'6px 10px'}}>PFD</Link>
          <Link to="/p&id" style={{padding:'6px 10px'}}>P&amp;ID</Link>
          <Link to="/equipment" style={{padding:'6px 10px'}}>Equipment</Link>
          <Link to="/sops" style={{padding:'6px 10px'}}>SOPs</Link>
          <Link to="/troubleshooting" style={{padding:'6px 10px'}}>Troubleshooting</Link>
          <Link to="/calculations" style={{padding:'6px 10px'}}>Toolkit</Link>
        </div>
      </div>
      <div style={{color:'#6b7280'}}>© 2025</div>
    </nav>
);
}