'use client'

import React from 'react'

export default function AppIcon() {
  return (
    <div className="app-icon">
      <div className="marty-text">M</div>
      <style jsx>{`
        .app-icon {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #0d0f1a 0%, #12172d 50%, #1c223a 100%);
          border-radius: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow:
            0 0 12px rgba(102, 153, 255, 0.35),
            0 12px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .app-icon:hover {
          box-shadow:
            0 0 16px rgba(102, 153, 255, 0.5),
            0 14px 40px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%);
          border-radius: 44px 44px 0 0;
          z-index: 0;
        }

        .marty-text {
          font-size: 120px;
          font-weight: 900;
          color: #ffffff;
          transform: rotate(-5deg);
          text-shadow:
            0 4px 12px rgba(0, 0, 0, 0.6),
            0 -2px 2px rgba(255, 255, 255, 0.2);
          font-family: 'Impact', 'Arial Black', sans-serif;
          letter-spacing: -4px;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}