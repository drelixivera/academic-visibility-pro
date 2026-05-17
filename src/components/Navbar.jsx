import React from 'react';
import { Award } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top shadow-sm py-3">
            <div className='container'>
                {/* Brand Logo and Name */}
                <a className='navbar-brand d-flex align-items-center fw-bold text-dark' href="#home">
                    <Award  className='text-warning me-2' size={28} />
                    <span style={{ letterSpacing: '0.5px' }}>Academic Visibility Pro</span>
                </a>

                {/* Mobile Toggle Button */}
               <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className='navbar-nav align-items-md-center gap-2 mt-3 mt-md-0'>
                        <li className='nav-item'>
                            <a className='nav-link fw-semibold px-3' href='#home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link fw-semibold px-3' href='#about'>About</a>
                        </li>
                        <li className="nav-item">
              <a className="nav-link fw-semibold px-3" href="#services">Services</a>
            </li>
                        <li className='nav-item'>
                            <a className='nav-link fw-semibold px-3' href='#contact'>Contact</a>
                        </li>
                        {/* Call to Action Button */}
                        <li className='nav-item ms-md-2'>
                            <a 
                                className='btn text-white fw-bold px-4 shadow-sm'
                                href='#contact'
                                style={{ backgroundColor: '#0B192C'}}
                                >
                                Get Started 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}