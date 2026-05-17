import React from 'react';
import { MessageSquare, ExternalLink, Mail } from 'lucide-react';

export default function Contact() {
  // Pre-filled professional message for his WhatsApp link
  const whatsappNumber = "ifc538"; // Using his exact vanity link identifier from the logs
  const whatsappUrl = `https://wa.link/${whatsappNumber}`;
  const fiverrUrl = "https://www.fiverr.com/s/bdN8Rwq";

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            
            {/* Heading */}
            <h5 className="text-uppercase fw-bold mb-2" style={{ color: '#D4AF37', letterSpacing: '1px' }}>
              Ready to Begin?
            </h5>
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#0B192C' }}>
              Transform Your Academic Portfolio Today
            </h2>
            <p className="text-muted mb-5 fs-5">
              Take the first definitive step toward secure US immigration pathways. Let’s collaborate to build a robust, criteria-compliant academic profile.
            </p>

            {/* Premium Contact Action Box */}
            <div className="p-4 p-md-5 rounded-4 shadow-sm border bg-light">
              <h4 className="fw-bold mb-4 text-dark">Schedule Your Consultation</h4>
              
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                {/* Primary WhatsApp Direct Route */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg text-white fw-bold px-4 py-3 shadow-sm w-100 w-md-auto d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <MessageSquare size={20} />
                  Message via WhatsApp
                </a>

                {/* Secondary Fiverr Channel */}
                <a 
                  href={fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-outline-dark fw-semibold px-4 py-3 w-100 w-md-auto d-flex align-items-center justify-content-center gap-2"
                >
                  Order on Fiverr
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="mt-4 text-center">
                <span className="small text-muted d-flex align-items-center justify-content-center gap-2">
                  <Mail size={14} />
                  Available for global consultation and ongoing strategic support.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}