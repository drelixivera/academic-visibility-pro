import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Mission & Highlights */}
          <div className="col-lg-5">
            <h5 className="text-uppercase fw-bold tracking-wider mb-2" style={{ color: '#D4AF37', letterSpacing: '1px' }}>
              Who We Are
            </h5>
            <h2 className="display-6 fw-bold text-dark mb-4" style={{ color: '#0B192C' }}>
              Strategic Profile Architecture for Global Minds
            </h2>
            <p className="text-muted mb-4">
              We specialize in closing the gap between remarkable academic achievement and the stringent requirements set by elite international immigration frameworks.
            </p>
            
            {/* Core Pillars */}
            <div className="d-flex align-items-start mb-3 gap-3">
              <div className="p-2 rounded bg-light text-dark">
                <Target size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-dark">Result-Driven Strategy</h6>
                <p className="small text-muted">Aligning research portfolios directly with EB-1A and EB-2 NIW statutory criteria.</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="p-2 rounded bg-light text-dark">
                <Users size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-dark">Tailored Consultancy</h6>
                <p className="small text-muted">Providing bespoke advice unique to individual scholarship domains and technical niches.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Bio Card */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 rounded-4 shadow-sm border border-light" style={{ backgroundColor: '#f8f9fa' }}>
              <p className="fs-5 text-dark mb-4 lh-base" style={{ fontStyle: 'italic', color: '#333333' }}>
                "I am an Academic Profile Building Consultant specializing in research paper writing, journal publication support, citation growth strategies, professional letters of recommendation, fellowship membership support, peer review opportunities, and academic visibility enhancement."
              </p>
              <hr className="my-4 text-muted opacity-25" />
              <p className="text-muted mb-0">
                I help researchers, scholars, and professionals build strong academic profiles for career advancement, recognition, and immigration pathways such as <strong className="text-dark">EB1A</strong> and <strong className="text-dark">EB2 NIW</strong>. Dedicated to delivering professional, reliable, and high-quality support tailored to each client's goals.
              </p>
              
              {/* Institutional Trust Footnote */}
              <div className="mt-4 d-inline-flex align-items-center gap-2 text-dark bg-white border rounded px-3 py-2 shadow-sm">
                <Award size={16} className="text-warning" />
                <span className="small fw-semibold text-muted">Empowering Global Researchers & Academics</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}