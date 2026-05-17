import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white-50 border-top border-secondary border-opacity-10">
      <div className="container">
        <div className="row align-items-center justify-content-between text-center text-md-start g-3">
          
          {/* Copyright Branding */}
          <div className="col-md-6">
            <span className="small">&copy; {currentYear} <strong className="text-white">Academic Visibility Pro</strong>. All Rights Reserved.</span>
          </div>

          {/* Quick Informational Legal Tag */}
          <div className="col-md-6 text-md-end">
            <span className="small style={{ fontSize: '12px' }}">
              Tailored Profiles for EB-1A & EB-2 NIW Pathways.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}