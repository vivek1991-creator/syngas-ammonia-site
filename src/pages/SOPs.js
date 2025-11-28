import React from 'react';
export default function SOPs(){
  return (
    <div>
      <h2>Standard Operating Procedures</h2>
      <ol style={{marginTop:12}}>
        <li>Startup sequence for primary reformer</li>
        <li>Shutdown & emergency depressurization</li>
        <li>Catalyst handling & replacement</li>
      </ol>
      <p style={{marginTop:12}}>Download example SOP: <a href="/docs/SOP-Reformer-Startup.pdf" target="_blank" rel="noreferrer">Reformer Startup SOP</a></p>
    </div>
  );
}