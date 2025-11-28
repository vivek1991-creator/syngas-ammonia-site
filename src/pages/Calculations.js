import React, { useState } from 'react';

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.4rem 0.9rem',
        borderRadius: '999px',
        border: active ? '1px solid #2563eb' : '1px solid transparent',
        background: active ? '#eff6ff' : 'transparent',
        color: active ? '#1d4ed8' : '#4b5563',
        fontSize: '0.85rem',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}

function HeatBalance() {
  const [qin, setQin] = useState(1000);
  const [qout, setQout] = useState(800);
  const loss = ((qin - qout) / qin) * 100;
  return (
    <div style={{ background:'#ffffff', padding:'1rem', borderRadius:'1rem', boxShadow:'0 8px 20px rgba(0,0,0,0.04)' }}>
      <h3>Heat Balance – Furnace / Exchanger</h3>
      <label style={{ fontSize:'0.8rem' }}>Heat In (kW)</label>
      <input type="number" value={qin} onChange={e => setQin(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Heat Out (kW)</label>
      <input type="number" value={qout} onChange={e => setQout(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <p style={{ marginTop:'0.5rem', fontSize:'0.9rem' }}>
        Loss / Duty: <strong>{isFinite(loss) ? loss.toFixed(1) : '0.0'}%</strong>
      </p>
      <p style={{ fontSize:'0.75rem', color:'#6b7280' }}>
        Use this for rough heater / exchanger duty checks vs. design duty.
      </p>
    </div>
  );
}

function RecycleEstimator() {
  const [fresh, setFresh] = useState(100);
  const [conv, setConv] = useState(0.8);
  const [recycle, setRecycle] = useState(50);
  const overall = conv * (fresh / (fresh + recycle));
  return (
    <div style={{ background:'#ffffff', padding:'1rem', borderRadius:'1rem', boxShadow:'0 8px 20px rgba(0,0,0,0.04)' }}>
      <h3>Recycle Loop – Overall Conversion</h3>
      <label style={{ fontSize:'0.8rem' }}>Fresh Feed (kmol/h)</label>
      <input type="number" value={fresh} onChange={e => setFresh(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Per-pass Conversion (fraction)</label>
      <input type="number" step="0.01" value={conv} onChange={e => setConv(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Recycle Flow (kmol/h)</label>
      <input type="number" value={recycle} onChange={e => setRecycle(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <p style={{ marginTop:'0.5rem', fontSize:'0.9rem' }}>
        Estimated overall conversion: <strong>{isFinite(overall) ? overall.toFixed(3) : '0.000'}</strong>
      </p>
      <p style={{ fontSize:'0.75rem', color:'#6b7280' }}>
        Use for synloop or shift loop with recycle; simplified back-of-envelope only.
      </p>
    </div>
  );
}

function CompressorHead() {
  const [Tin, setTin] = useState(300); // K
  const [Pin, setPin] = useState(1);   // bar
  const [Pout, setPout] = useState(10);
  const [k, setK] = useState(1.4);
  const R = 8.314; // kJ/(kmol·K) pseudo

  const ratio = Pout > 0 && Pin > 0 ? (Pout/Pin) : 1;
  const H = (k/(k-1)) * R * Tin * (Math.pow(ratio, (k-1)/k) - 1); // kJ/kmol (simplified)

  return (
    <div style={{ background:'#ffffff', padding:'1rem', borderRadius:'1rem', boxShadow:'0 8px 20px rgba(0,0,0,0.04)' }}>
      <h3>Compressor – Polytropic Head</h3>
      <label style={{ fontSize:'0.8rem' }}>Inlet T (K)</label>
      <input type="number" value={Tin} onChange={e => setTin(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Inlet P (bar)</label>
      <input type="number" value={Pin} onChange={e => setPin(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Outlet P (bar)</label>
      <input type="number" value={Pout} onChange={e => setPout(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>k (Cp/Cv)</label>
      <input type="number" step="0.01" value={k} onChange={e => setK(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <p style={{ marginTop:'0.5rem', fontSize:'0.9rem' }}>
        Ideal polytropic head ≈ <strong>{isFinite(H) ? H.toFixed(1) : '0.0'}</strong> kJ/kmol
      </p>
      <p style={{ fontSize:'0.75rem', color:'#6b7280' }}>
        Compare this with vendor maps (head vs. flow) to position operating point and surge margin.
      </p>
    </div>
  );
}

function TurbinePower() {
  const [mdot, setMdot] = useState(10);   // kg/s
  const [Hin, setHin] = useState(1300);  // kJ/kg
  const [Hout, setHout] = useState(900); // kJ/kg
  const [eta, setEta] = useState(0.9);   // fraction

  const ideal = mdot * (Hin - Hout);
  const actual = eta * ideal;

  return (
    <div style={{ background:'#ffffff', padding:'1rem', borderRadius:'1rem', boxShadow:'0 8px 20px rgba(0,0,0,0.04)' }}>
      <h3>Turbine – Power Estimate</h3>
      <label style={{ fontSize:'0.8rem' }}>Mass Flow (kg/s)</label>
      <input type="number" value={mdot} onChange={e => setMdot(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Inlet Enthalpy (kJ/kg)</label>
      <input type="number" value={Hin} onChange={e => setHin(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Outlet Enthalpy (kJ/kg)</label>
      <input type="number" value={Hout} onChange={e => setHout(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <label style={{ fontSize:'0.8rem', marginTop:'0.5rem', display:'block' }}>Isentropic Efficiency</label>
      <input type="number" step="0.01" value={eta} onChange={e => setEta(Number(e.target.value))} style={{ width:'100%', marginTop:'0.25rem' }} />
      <p style={{ marginTop:'0.5rem', fontSize:'0.9rem' }}>
        Ideal Power ≈ <strong>{isFinite(ideal) ? ideal.toFixed(1) : '0.0'}</strong> (kW if units consistent)
      </p>
      <p style={{ fontSize:'0.9rem' }}>
        Actual Shaft Power ≈ <strong>{isFinite(actual) ? actual.toFixed(1) : '0.0'}</strong> kW
      </p>
      <p style={{ fontSize:'0.75rem', color:'#6b7280' }}>
        Compare against generator / compressor shaft demand to verify margins.
      </p>
    </div>
  );
}

const TOOL_TABS = [
  { key: 'heat', label: 'Heat / Duty', component: HeatBalance },
  { key: 'recycle', label: 'Recycle / Conversion', component: RecycleEstimator },
  { key: 'compressor', label: 'Compressor', component: CompressorHead },
  { key: 'turbine', label: 'Turbine', component: TurbinePower },
];

export default function Calculations() {
  const [active, setActive] = useState('heat');
  const activeTool = TOOL_TABS.find(t => t.key === active) || TOOL_TABS[0];
  const ActiveComponent = activeTool.component;

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem' }}>Engineering Toolkit</h2>
      <p style={{ fontSize:'0.85rem', color:'#6b7280', marginTop:'0.25rem' }}>
        Quick back-of-envelope tools. Always validate with detailed simulation and vendor data for design decisions.
      </p>

      <div style={{ marginTop:'0.75rem', display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
        {TOOL_TABS.map(tab => (
          <TabButton key={tab.key} label={tab.label} active={tab.key === active} onClick={() => setActive(tab.key)} />
        ))}
      </div>

      <div style={{ marginTop:'1rem' }}>
        <ActiveComponent />
      </div>
    </div>
  );
}