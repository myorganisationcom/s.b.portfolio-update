'use client';

import React from 'react';

export default function HeroLiveDashboard() {
  return (
    <div className="live-dash-container">
      <div className="live-dash-window">
        {/* Window Header */}
        <div className="live-dash-header">
          <div className="dash-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="dash-title">Systematic Growth Engine</div>
          <div className="dash-status">
            <span className="pulse-dot"></span> LIVE
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="live-dash-body">
          {/* Top Row: Analytics & Gears */}
          <div className="dash-row top-row">
            
            {/* Live Line Chart */}
            <div className="dash-card chart-card">
              <div className="card-header">Revenue Growth</div>
              <div className="svg-chart-container">
                <svg viewBox="0 0 100 50" className="live-line-chart">
                  <path d="M0,45 L20,35 L40,40 L60,20 L80,25 L100,5" fill="none" stroke="url(#blue-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="chart-glow"></div>
              </div>
            </div>

            {/* Spinning Gears Engine */}
            <div className="dash-card gears-card">
              <div className="card-header">Operations Engine</div>
              <div className="gears-container">
                <div className="gear-wrapper main-gear">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="gear-wrapper sub-gear">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="gear-wrapper small-gear">
                  <i className="fas fa-cog"></i>
                </div>
              </div>
              <div className="engine-status">Optimization: 98%</div>
            </div>

          </div>

          {/* Bottom Row: Bar Chart & Metrics */}
          <div className="dash-row bottom-row">
            
            {/* Automated Workflow Metrics */}
            <div className="dash-card metrics-card">
               <div className="metric-item">
                 <div className="metric-label">Efficiency</div>
                 <div className="metric-bar-bg"><div className="metric-bar-fill fill-1"></div></div>
               </div>
               <div className="metric-item">
                 <div className="metric-label">Conversion</div>
                 <div className="metric-bar-bg"><div className="metric-bar-fill fill-2"></div></div>
               </div>
               <div className="metric-item">
                 <div className="metric-label">Scale Capacity</div>
                 <div className="metric-bar-bg"><div className="metric-bar-fill fill-3"></div></div>
               </div>
            </div>

            {/* Live Bar Chart */}
            <div className="dash-card bar-chart-card">
              <div className="bar-wrapper"><div className="live-bar b1"></div></div>
              <div className="bar-wrapper"><div className="live-bar b2"></div></div>
              <div className="bar-wrapper"><div className="live-bar b3"></div></div>
              <div className="bar-wrapper"><div className="live-bar b4"></div></div>
              <div className="bar-wrapper"><div className="live-bar b5"></div></div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Elements around dashboard */}
      <div className="dash-float-element f1"><i className="fas fa-chart-line"></i></div>
      <div className="dash-float-element f2"><i className="fas fa-bullseye"></i></div>
      <div className="dash-float-element f3"><i className="fas fa-rocket"></i></div>
    </div>
  );
}
