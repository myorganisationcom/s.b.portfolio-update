'use client';

import React from 'react';

export default function ServiceGrid() {
    const services = [
        {
            icon: "fa-bullseye",
            title: "Brand Acceleration",
            desc: "Naming, vision, voice, differentiation & storytelling for a unique market position.",
            price: "From ₹25,000",
            glow: "rgba(16, 185, 129, 0.4)"
        },
        {
            icon: "fa-chart-pie",
            title: "Investor Readiness",
            desc: "Pitch deck creation, financial projections, and mock Q&A preparation.",
            price: "From ₹25,000",
            glow: "rgba(59, 130, 246, 0.4)"
        },
        {
            icon: "fa-rocket",
            title: "Market Entry & Launch",
            desc: "Market research, go-to-market strategy, and launch campaign execution.",
            price: "From ₹15,000",
            glow: "rgba(16, 185, 129, 0.4)"
        },
        {
            icon: "fa-hashtag",
            title: "Digital Authority",
            desc: "LinkedIn growth, thought leadership content, and media strategy.",
            price: "From ₹15,000/month",
            glow: "rgba(16, 185, 129, 0.4)"
        },
        {
            icon: "fa-cogs",
            title: "Operational Excellence",
            desc: "SOP development, CRM automation setup, and KPI dashboards.",
            price: "From ₹20,000",
            glow: "rgba(59, 130, 246, 0.4)"
        },
        {
            icon: "fa-globe",
            title: "Global Expansion",
            desc: "Cross-border strategy, partnership mapping, and B2B outreach.",
            price: "Custom Quote",
            glow: "rgba(16, 185, 129, 0.4)"
        }
    ];

    return (
        <div className="premium-service-grid">
            {services.map((srv, index) => (
                <div className="premium-service-card" key={index}>
                    <div className="card-glow-bg" style={{ background: `radial-gradient(circle at top right, ${srv.glow}, transparent 60%)` }}></div>
                    
                    <div className="card-icon-wrapper">
                        <i className={`fas ${srv.icon}`}></i>
                    </div>
                    
                    <div className="card-content">
                        <h3>{srv.title}</h3>
                        <p>{srv.desc}</p>
                    </div>
                    
                    <div className="card-footer">
                        <div className="price-badge">{srv.price}</div>
                        <i className="fas fa-arrow-right action-icon"></i>
                    </div>
                </div>
            ))}
        </div>
    );
}
