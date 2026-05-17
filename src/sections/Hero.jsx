import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-5 bg-navy d-flex align-items-center" style={{ minHeight: '85vh', color: '#ffffff' }}>
      <div className="container py-4">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Hero Section */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* Elite Badge */}
            <div className="d-inline-flex align-items-center bg-white bg-opacity-10 text-gold rounded-pill px-3 py-2 mb-4 border border-warning border-opacity-25">
              <ShieldCheck size={18} className="me-2" />
              <span className="small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                US Immigration Pathway Consultancy
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-4 fw-extrabold mb-3 lh-sm" style={{ fontWeight: 800 }}>
              Elevate Your Academic Profile for <span className="text-gold">Global Opportunities</span>
            </h1>

            {/* Sub-headline */}
           <p className="lead text-white-50 mb-5 fs-5" style={{ maxWidth: '600px' }}>
              Expert strategic consulting tailored for researchers, scholars, and high-achieving professionals pursuing elite US immigration pathways like <strong className="text-white">EB-1A (Einstein Visa)</strong> and <strong className="text-white">EB-2 NIW</strong>. 
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a 
                href="#contact" 
                className="btn btn-warning btn-lg fw-bold px-4 py-3 shadow d-flex align-items-center justify-content-center gap-2"
                style={{ color: '#0B192C' }}
              >
                Book a Consultation
                <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="btn btn-outline-light btn-lg fw-semibold px-4 py-3"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Visual Prestige Graphic */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="position-relative d-flex justify-content-center align-items-center">
              {/* Abstract Sleek Background Glow Panel */}
              <div 
                className="position-absolute rounded-4 opacity-10"
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  backgroundColor: '#D4AF37', 
                  filter: 'blur(20px)',
                  zIndex: 0 
                }}
              ></div>
              
              {/* Floating Card Element for profile */}
              <div 
                className="card bg-white bg-opacity-10 border border-white border-opacity-10 rounded-4 p-4 text-white shadow-lg backdrop-blur w-100 position-relative"
                style={{ zIndex: 1, backdropFilter: 'blur(10px)' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="badge bg-warning text-dark fw-bold px-3 py-2">EB-1A & NIW ELIGIBLE</span>
                  <div className="text-white-50 small">Profile Matrix v1.0</div>
                </div>
                <div className="mb-3">
                  <div className="text-white-50 small uppercase mb-1">Target Criteria Metrics</div>
                  <div className="h4 fw-bold">Academic Profile Building</div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-5 d-flex justify-content-between align-items-center mb-2">
                    <span className="small text-black-50">Scholarly Publications</span>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-2 py-1">Optimized</span>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-5 d-flex justify-content-between align-items-center mb-2">
                    <span className="small text-black-50">Citation Growth Tracker</span>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-2 py-1">Accelerated</span>
                  </div>
                  <div className="p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-5 d-flex justify-content-between align-items-center">
                    <span className="small text-black-50">Expert Letters & Media Evidence</span>
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-2 py-1">Structured</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}