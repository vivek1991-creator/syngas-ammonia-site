import React from 'react';
export default function PFD(){
  return (
    <div>
      <h2>Process Flow Diagrams</h2>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <img src="/assets/sample-pfd.png" alt="pfd" style={{width:'48%',borderRadius:8}} />
        <img src="/assets/sample-pid.png" alt="pid" style={{width:'48%',borderRadius:8}} />
      </div>
    </div>
  );
}