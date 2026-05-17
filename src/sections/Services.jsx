import React from 'react';
import { BookOpen, LineChart, FileText, Landmark, CheckCircle } from 'lucide-react';

export default function Services() {
    // Grouped Services Array for clean iteration
    const serviceData = [
        {
            id: 1,
            icon: <BookOpen className='text-warning' size={28} />,
            category: "Scholarly Publishing & Research",
            items: [
                "Research Paper Writing Support",
                "Academic Book Writing Guidance",
                "Journal Publication Support",
                "Peer Review Invitations & Editorial Board Setup"
            ]
        },
        {
            id: 2,
            icon: <LineChart className='text-warning' size={28} />,
            category: "Profile & Citation Boosting",
            items: [
                "Citation Growth Strategies (Current & Backdated)",
                "Best Paper Award Positioning",
                "Merit-Based Awards & Recognition Strategy"
            ]
        },
        {
            id: 3,
            icon: <FileText className='text-warning' size={28} />,
            category: "Authority & Evidence Preparation",
            items: [
               "Expert Letter of Recommendation Preparation",
               "Media Coverage & Press Release Strategy",
                "Conference Leadership Roles (Session Chair Setup)"
            ]
        },
        {
            id: 4,
            icon: <Landmark className="text-warning" size={28} />,
            category: "Institutional Memberships",
            items: [
                "Professional Fellow Membership Support",
                "Technical Committee Placement",
                "Academic Visibility Enhancement"
            ]
        }
    ];

    return (
        <section id="services" className="py-5 bg-navy" style={{ color: '#ffffff' }}>
            <div className='container py-5'>

                {/* Section Title Header */}
                <div className='text-center mb-5'>
                    <h5 className='text-uppercase fw-bold mb-2' style={{ color: '#D4AF37', letterSpacing: '1px' }}>
                        Our Expertise
                    </h5>
                    <h2 className='display-6 fw-bold mb-3'>
                        Comprehensive profile Consultation Services
                    </h2>
                    <p className='text-white-50 mx-auto' style={{ maxWidth: '650px' }}>
                        Bespoke academic acceleration services designed specifically to satisfy individual legal criteria for EB-1A and EB-2 NIW visa categories.
                    </p>
                </div>

                {/* Dynamic Services Cards Grid */}
                <div className='row g-4 justify-content-center'>
                    {serviceData.map((service) => (
                        <div key={service.id} className='col-md-6 col-lg-3'>
                            <div
                                className='card h-100 bg-white bg-opacity-10 border border-white border-opacity-10 rounded-4 p-4 text-white shadow-sm'
                                style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Header Icon + category */}
                                <div className='mb-3 d-inline-block bg-white bg-opacity-5 p-3 rounded-3 border border-white border-opacity-10'>
                                    {service.icon}
                                </div>
                                <h5 className='fw-bold mb-3 text-gold fs-5'>{service.category}</h5>
                                {/* Bullet Points */}
                                <ul className='list-unstyled mb-0 d-flex flex-column gap-2'>
                                    {service.items.map((item, index) => (
                                        <li key={index} className="small text-white-50 d-flex align-items-start gap-2" >
                                            <CheckCircle className="text-success mt-1 flex-shrink-0" size={14} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}