import React, { useState } from 'react';
import { Calculator, Atom, BarChart3, CheckCircle2, RefreshCw, Sparkles, ArrowRight, Zap, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PracticeLab3D({ onOpenModal }) {
  const [activeTool, setActiveTool] = useState('maths');

  // Tool 1: Maths Quadratic Solver State
  const [coeffA, setCoeffA] = useState(1);
  const [coeffB, setCoeffB] = useState(-5);
  const [coeffC, setCoeffC] = useState(6);
  const [mathSolution, setMathSolution] = useState(null);

  const handleSolveMath = () => {
    const a = parseFloat(coeffA);
    const b = parseFloat(coeffB);
    const c = parseFloat(coeffC);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      setMathSolution({ error: 'Coefficient "a" cannot be 0 in a quadratic equation.' });
      return;
    }

    const D = b * b - 4 * a * c;
    if (D >= 0) {
      const root1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
      const root2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);
      setMathSolution({
        D,
        type: D === 0 ? 'Real & Equal Roots' : 'Real & Distinct Roots',
        root1,
        root2,
        steps: [
          `Formula: D = b² - 4ac = (${b})² - 4(${a})(${c}) = ${D}`,
          `x = (-b ± √D) / 2a = (-(${b}) ± √${D}) / (2 × ${a})`,
          `Root 1: x₁ = ${root1}`,
          `Root 2: x₂ = ${root2}`
        ]
      });
      confetti({ particleCount: 75, spread: 60, origin: { y: 0.7 } });
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imagPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);
      setMathSolution({
        D,
        type: 'Complex Conjugate Roots',
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} - ${imagPart}i`,
        steps: [
          `Discriminant D = ${D} (< 0, no real roots)`,
          `x₁ = ${realPart} + ${imagPart}i`,
          `x₂ = ${realPart} - ${imagPart}i`
        ]
      });
    }
  };

  // Tool 2: Science Circuit & Ohm's Law State
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const current = resistance > 0 ? (voltage / resistance).toFixed(2) : 0;
  const power = (voltage * current).toFixed(2);

  // Tool 3: Commerce Ledger & Golden Rules State
  const [txnType, setTxnType] = useState('capital');
  const [amount, setAmount] = useState(50000);
  const [commerceFeedback, setCommerceFeedback] = useState(null);

  const transactions = {
    capital: {
      desc: "Started business with Cash ₹50,000",
      debit: "Cash Account (Asset Increases)",
      credit: "Capital Account (Owner Equity Increases)",
      rule: "Debit what comes in (Real Account) | Credit the Giver (Personal Account)"
    },
    goods: {
      desc: "Purchased goods for Cash ₹20,000",
      debit: "Purchases Account (Expense Incurred)",
      credit: "Cash Account (Asset Decreases)",
      rule: "Debit all expenses & losses (Nominal Account) | Credit what goes out (Real Account)"
    },
    sales: {
      desc: "Sold goods to customer on credit ₹35,000",
      debit: "Customer / Debtor Account (Asset Increases)",
      credit: "Sales Account (Revenue Earned)",
      rule: "Debit the Receiver (Personal Account) | Credit all incomes & gains (Nominal Account)"
    }
  };

  const handleVerifyCommerce = () => {
    const selected = transactions[txnType];
    setCommerceFeedback({
      msg: `Journal Entry Verified: Dr. ${selected.debit} ₹${Number(amount).toLocaleString('en-IN')} | Cr. ${selected.credit} ₹${Number(amount).toLocaleString('en-IN')}`,
      rule: selected.rule
    });
    confetti({ particleCount: 75, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <section id="practicelab" style={{ position: 'relative', padding: '90px 0', background: '#FFFFFF' }}>
      <div className="section-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            color: '#2563EB',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '2px',
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            ⚡ INTERACTIVE LEARNING LAB
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Experience Our <span className="gradient-text">Live Concept Simulator</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            Learning by doing is the secret to retaining concepts. Try out our live Maths, Science, and Commerce sandboxes right here!
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTool('maths')}
            className={activeTool === 'maths' ? 'btn-primary' : 'btn-glass'}
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <Calculator size={18} /> 1. Maths: Quadratic Equation Explorer
          </button>
          <button
            onClick={() => setActiveTool('science')}
            className={activeTool === 'science' ? 'btn-emerald' : 'btn-glass'}
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <Atom size={18} /> 2. Science: Ohm's Law & Circuit Lab
          </button>
          <button
            onClick={() => setActiveTool('commerce')}
            className={activeTool === 'commerce' ? 'btn-gold' : 'btn-glass'}
            style={{ padding: '12px 24px', fontSize: '0.92rem' }}
          >
            <BarChart3 size={18} /> 3. Commerce: Double Entry Ledger Simulator
          </button>
        </div>

        {/* TOOL 1: MATHS QUADRATIC SOLVER */}
        {activeTool === 'maths' && (
          <div className="ref-card" style={{
            padding: '40px',
            borderRadius: '24px',
            border: '2px solid #3B82F6',
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1E40AF' }}>
                  Quadratic Formula & Root Nature Calculator
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                  Solve any quadratic equation <code>ax² + bx + c = 0</code> with live step-by-step discriminant evaluation.
                </p>
              </div>
              <span style={{ background: '#DBEAFE', color: '#1D4ED8', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                Class 10 & 11 Math
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '6px' }}>Coefficient a (x²)</label>
                <input
                  type="number"
                  value={coeffA}
                  onChange={e => setCoeffA(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '1.1rem', fontWeight: 700 }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '6px' }}>Coefficient b (x)</label>
                <input
                  type="number"
                  value={coeffB}
                  onChange={e => setCoeffB(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '1.1rem', fontWeight: 700 }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '6px' }}>Constant c</label>
                <input
                  type="number"
                  value={coeffC}
                  onChange={e => setCoeffC(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '1.1rem', fontWeight: 700 }}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <button onClick={handleSolveMath} className="btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                <Sparkles size={18} /> Solve Equation & View Steps
              </button>
            </div>

            {mathSolution && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                padding: '24px',
                border: '1px solid #BFDBFE',
                boxShadow: '0 4px 20px rgba(37,99,235,0.08)'
              }}>
                {mathSolution.error ? (
                  <div style={{ color: '#DC2626', fontWeight: 700 }}>{mathSolution.error}</div>
                ) : (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>
                        Roots: x₁ = <strong style={{ color: '#2563EB' }}>{mathSolution.root1}</strong>, x₂ = <strong style={{ color: '#2563EB' }}>{mathSolution.root2}</strong>
                      </span>
                      <span style={{ background: '#DCFCE7', color: '#15803D', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                        {mathSolution.type}
                      </span>
                    </div>
                    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px', fontSize: '0.9rem', color: '#334155' }}>
                      {mathSolution.steps.map((st, idx) => (
                        <div key={idx} style={{ marginBottom: '6px', fontFamily: 'monospace' }}>
                          Step {idx + 1}: {st}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: SCIENCE OHM'S LAW & CIRCUIT SIMULATOR */}
        {activeTool === 'science' && (
          <div className="ref-card" style={{
            padding: '40px',
            borderRadius: '24px',
            border: '2px solid #10B981',
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #ECFDF5 0%, #FFFFFF 100%)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#065F46' }}>
                  Physics Circuit & Ohm's Law Simulator (V = IR)
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                  Adjust Voltage and Resistance to observe real-time Current flow and Electrical Power dissipation.
                </p>
              </div>
              <span style={{ background: '#D1FAE5', color: '#065F46', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                Class 10 & 12 Physics
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '28px' }}>
              <div>
                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Voltage (V):</span>
                  <strong style={{ color: '#059669', fontSize: '1.1rem' }}>{voltage} Volts</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={voltage}
                  onChange={e => setVoltage(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                />

                <label style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', display: 'flex', justifyContent: 'space-between', marginTop: '24px', marginBottom: '8px' }}>
                  <span>Resistance (R):</span>
                  <strong style={{ color: '#059669', fontSize: '1.1rem' }}>{resistance} Ω (Ohms)</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={resistance}
                  onChange={e => setResistance(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                />
              </div>

              {/* Circuit Output Display */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #A7F3D0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase', marginBottom: '12px' }}>
                  ⚡ Live Circuit Measurements
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>
                  <span style={{ color: '#64748B', fontWeight: 600 }}>Calculated Current (I = V / R):</span>
                  <strong style={{ fontSize: '1.3rem', color: '#059669' }}>{current} Amperes</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>
                  <span style={{ color: '#64748B', fontWeight: 600 }}>Power Dissipated (P = V × I):</span>
                  <strong style={{ fontSize: '1.3rem', color: '#D97706' }}>{power} Watts</strong>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#475569', background: '#ECFDF5', padding: '10px', borderRadius: '10px' }}>
                  💡 <strong>Concept Insight:</strong> As resistance decreases, current increases exponentially, heating up the circuit element as per Joule's Law (H = I²Rt).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 3: COMMERCE DOUBLE ENTRY LEDGER SIMULATOR */}
        {activeTool === 'commerce' && (
          <div className="ref-card" style={{
            padding: '40px',
            borderRadius: '24px',
            border: '2px solid #F59E0B',
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#92400E' }}>
                  Double Entry Bookkeeping & Journal Simulator
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                  Select a business transaction and verify the Golden Rules of Debit and Credit instantly.
                </p>
              </div>
              <span style={{ background: '#FEF3C7', color: '#92400E', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                Class 11 & 12 Commerce
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '8px' }}>
                  Select Transaction Scenario:
                </label>
                <select
                  value={txnType}
                  onChange={e => setTxnType(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px' }}
                >
                  <option value="capital">1. Commenced Business with Cash ₹50,000</option>
                  <option value="goods">2. Purchased Goods for Cash ₹20,000</option>
                  <option value="sales">3. Sold Goods on Credit to Customer ₹35,000</option>
                </select>

                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '8px' }}>
                  Transaction Amount (₹):
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '1.1rem', fontWeight: 700 }}
                />
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '20px', border: '1px solid #FDE68A' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B45309', marginBottom: '8px' }}>
                  PREVIEW TRANSACTION:
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {transactions[txnType].desc}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                  Dr: <strong>{transactions[txnType].debit}</strong><br />
                  Cr: <strong>{transactions[txnType].credit}</strong>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <button onClick={handleVerifyCommerce} className="btn-gold" style={{ padding: '14px 36px', fontSize: '1rem' }}>
                <Sparkles size={18} /> Post to Journal & Verify Golden Rules
              </button>
            </div>

            {commerceFeedback && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid #F59E0B',
                boxShadow: '0 4px 15px rgba(245,158,11,0.1)'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#15803D', marginBottom: '8px' }}>
                  🎉 {commerceFeedback.msg}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', background: '#FFFBEB', padding: '10px 14px', borderRadius: '10px' }}>
                  📖 <strong>Applied Accounting Principle:</strong> {commerceFeedback.rule}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
