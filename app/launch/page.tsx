
"use client";

import { useEffect, useState } from "react";

const WEBSITE_URL = "https://www.fortunaglobalsupplychain.com/";

export default function LaunchPage() {
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [celebrating, setCelebrating] = useState(false);

  // Countdown
  useEffect(() => {
    if (!started || celebrating) return;

    if (seconds <= 0) {
      setCelebrating(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [started, seconds, celebrating]);

  // Celebration before redirect
  useEffect(() => {
    if (!celebrating) return;

    const redirectTimer = window.setTimeout(() => {
      window.location.assign(WEBSITE_URL);
    }, 2500);

    return () => window.clearTimeout(redirectTimer);
  }, [celebrating]);

  const launchWebsite = () => {
    window.location.assign(WEBSITE_URL);
  };

  return (
    <main className={`launch-page ${celebrating ? "celebration-active" : ""}`}>
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* Celebration Overlay */}
      {celebrating && (
        <div className="celebration-overlay">
          <div className="firework firework-one">✦</div>
          <div className="firework firework-two">✧</div>
          <div className="firework firework-three">✦</div>
          <div className="firework firework-four">✧</div>

          <div className="confetti-container">
            {Array.from({ length: 60 }).map((_, i) => (
              <span
                key={i}
                className={`confetti confetti-${i % 6}`}
                style={{
                  left: `${(i * 37) % 100}%`,
                  animationDelay: `${(i % 10) * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="celebration-message">
            <div className="celebration-icon">🎉</div>
            <h2>WEBSITE LAUNCHED!</h2>
            <div className="celebration-divider" />
            <p>Welcome to Fortuna Global Supply Chain Systems</p>
            <div className="celebration-stars">✨ ✨ ✨</div>
          </div>
        </div>
      )}

      <div className="launch-content">

        {/* Fortuna Logo */}
        <div className="logo-wrap">
          <img
            src="/images/logos/Logo(3).png"
            alt="Fortuna Global Supply Chain Systems"
            className="fortuna-logo"
          />
        </div>

        <div className="top-label">
          A NEW DIGITAL BEGINNING
        </div>

        <h1 className="main-title">
          WEBSITE <span>LAUNCH</span>
        </h1>

        <div className="gold-line" />

        <p className="welcome-text">
          We are honoured to welcome
        </p>

        <h2 className="guest-name">
          Mr. M.Raja Ramesh Garu
        </h2>

        <p className="guest-designation">
          A.P. SAAP Director
        </p>

        <p className="message">
          Your gracious presence marks the beginning
          of our journey towards an intelligent,
          connected supply chain future.
        </p>

        {!started ? (
          <button
            className="launch-button"
            onClick={() => {
              setSeconds(10);
              setCelebrating(false);
              setStarted(true);
            }}
          >
            GUEST LAUNCH
            <span> → </span>
          </button>
        ) : celebrating ? (
          <div className="launching-message">
            <span>✨</span>
            Celebrating Our Digital Beginning
            <span>✨</span>
          </div>
        ) : (
          <div className="countdown-area">
            <div className="countdown-circle">
              <span>{seconds}</span>
            </div>

            <p>Launching Fortuna Website...</p>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${(10 - seconds) * 10}%`,
                }}
              />
            </div>

            <button
              className="skip-button"
              onClick={launchWebsite}
            >
              Skip & Visit Website
            </button>
          </div>
        )}

        <div className="footer-text">
          FORTUNA GLOBAL SUPPLY CHAIN SYSTEMS
          <span> · </span>
          VISAKHAPATNAM
        </div>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        /* Hide website header/footer only on launch page */
        body:has(.launch-page) header,
        body:has(.launch-page) footer,
        body:has(.launch-page) .site-header,
        body:has(.launch-page) .site-footer,
        body:has(.launch-page) #site-header,
        body:has(.launch-page) #site-footer {
          display: none !important;
        }

        body:has(.launch-page) {
          margin: 0 !important;
          padding: 0 !important;
          background: #06152b !important;
        }

        html:has(.launch-page) {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .launch-page {
          min-height: 100vh;
          min-height: 100dvh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px 20px;
          background:
            radial-gradient(
              circle at 50% 40%,
              #123d68 0%,
              #071b35 45%,
              #030b18 100%
            );
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .launch-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 850px;
          animation: reveal 1.2s ease both;
        }

        .logo-wrap {
          margin-bottom: 35px;
          animation: float 4s ease-in-out infinite;
        }

        .fortuna-logo {
          width: min(620px, 90%);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 18px #ffffff22);
        }

        .top-label {
          color: #f5c66b;
          letter-spacing: 5px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .main-title {
          font-size: clamp(36px, 7vw, 68px);
          letter-spacing: 5px;
          margin: 0;
          font-weight: 800;
        }

        .main-title span {
          color: #e52b3e;
        }

        .gold-line {
          height: 3px;
          width: 100px;
          background: #f5c66b;
          margin: 24px auto;
          box-shadow: 0 0 15px #f5c66b;
        }

        .welcome-text {
          color: #cbd8e8;
          font-size: 17px;
        }

        .guest-name {
          font-size: clamp(25px, 4vw, 39px);
          color: #ffffff;
          margin: 18px 0 8px;
          font-weight: 700;
        }

        .guest-designation {
          color: #f5c66b;
          font-size: 19px;
          margin: 0;
          font-weight: 600;
        }

        .message {
          max-width: 600px;
          margin: 28px auto;
          line-height: 1.8;
          color: #bdcde0;
          font-size: 15px;
        }

        .launch-button {
          border: 0;
          padding: 17px 42px;
          border-radius: 40px;
          color: white;
          background: linear-gradient(
            110deg,
            #c8102e,
            #f04444
          );
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          font-size: 15px;
          box-shadow: 0 0 30px #c8102e66;
          transition: 0.3s;
        }

        .launch-button:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 0 45px #ef334b;
        }

        .countdown-area {
          margin: 25px auto;
        }

        .countdown-circle {
          width: 100px;
          height: 100px;
          border: 3px solid #f5c66b;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: auto;
          box-shadow: 0 0 30px #f5c66b66;
          animation: pulse 1s infinite;
        }

        .countdown-circle span {
          font-size: 42px;
          font-weight: bold;
          color: #f5c66b;
        }

        .countdown-area p {
          color: #ffffff;
          letter-spacing: 2px;
          margin: 20px 0;
        }

        .progress-track {
          height: 5px;
          max-width: 300px;
          background: #ffffff22;
          border-radius: 10px;
          margin: 20px auto;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #f5c66b;
          transition: width 1s linear;
        }

        .skip-button {
          color: #dce8f5;
          background: transparent;
          border: 1px solid #ffffff55;
          border-radius: 25px;
          padding: 10px 22px;
          cursor: pointer;
        }

        .launching-message {
          color: #f5c66b;
          font-weight: bold;
          letter-spacing: 1px;
          margin: 25px auto;
          animation: pulse 0.8s infinite;
        }

        .footer-text {
          margin-top: 65px;
          color: #8297b1;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.18;
          animation: drift 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .glow-one {
          background: #c8102e;
          top: -120px;
          left: -100px;
        }

        .glow-two {
          background: #006db5;
          bottom: -120px;
          right: -100px;
          animation-delay: 2s;
        }

        /* Celebration animation */
        .celebration-overlay {
          position: fixed;
          inset: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
          background: #06152b99;
          animation: celebrationFade 2.5s ease forwards;
        }

        .celebration-message {
          position: relative;
          z-index: 5;
          padding: 25px;
          animation: celebrationZoom 0.7s ease both;
        }

        .celebration-icon {
          font-size: clamp(55px, 10vw, 90px);
          animation: celebrationBounce 0.7s infinite alternate;
        }

        .celebration-message h2 {
          font-size: clamp(28px, 6vw, 55px);
          color: #f5c66b;
          letter-spacing: 3px;
          text-shadow: 0 0 25px #f5c66b99;
          margin: 12px 0;
        }

        .celebration-message p {
          color: white;
          font-size: clamp(13px, 2vw, 19px);
          line-height: 1.6;
        }

        .celebration-divider {
          width: 120px;
          height: 3px;
          margin: 18px auto;
          background: linear-gradient(
            90deg,
            transparent,
            #f5c66b,
            transparent
          );
        }

        .celebration-stars {
          font-size: 30px;
          margin-top: 20px;
          animation: pulse 0.7s infinite;
        }

        .confetti-container {
          position: absolute;
          inset: 0;
        }

        .confetti {
          position: absolute;
          top: -30px;
          width: 9px;
          height: 15px;
          border-radius: 2px;
          animation: confettiFall 2.5s ease-in forwards;
        }

        .confetti-0 { background: #f5c66b; }
        .confetti-1 { background: #c8102e; }
        .confetti-2 { background: #ffffff; }
        .confetti-3 { background: #1688d4; }
        .confetti-4 { background: #f04444; }
        .confetti-5 { background: #ffe8a3; }

        .firework {
          position: absolute;
          font-size: 65px;
          color: #f5c66b;
          text-shadow: 0 0 25px #f5c66b;
          animation: fireworkBurst 1s ease-out infinite;
        }

        .firework-one {
          top: 12%;
          left: 12%;
        }

        .firework-two {
          top: 18%;
          right: 15%;
          animation-delay: 0.3s;
        }

        .firework-three {
          bottom: 15%;
          left: 18%;
          animation-delay: 0.5s;
        }

        .firework-four {
          bottom: 12%;
          right: 12%;
          animation-delay: 0.2s;
        }

        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes pulse {
          50% { transform: scale(1.06); }
        }

        @keyframes drift {
          to {
            transform: translate(80px, 50px) scale(1.2);
          }
        }

        @keyframes celebrationFade {
          0% { opacity: 0; }
          10%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes celebrationZoom {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes celebrationBounce {
          to { transform: scale(1.2) rotate(8deg); }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(115vh) rotate(900deg);
            opacity: 0;
          }
        }

        @keyframes fireworkBurst {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          40% {
            transform: scale(1.3);
            opacity: 1;
          }
          100% {
            transform: scale(0.7);
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          .launch-page {
            padding: 25px 16px;
          }

          .top-label {
            letter-spacing: 2px;
          }

          .footer-text {
            line-height: 2;
            margin-top: 40px;
          }

          .logo-wrap {
            margin-bottom: 25px;
          }

          .main-title {
            letter-spacing: 2px;
          }
        }

        @media (max-height: 700px) {
          .launch-page {
            padding-top: 18px;
            padding-bottom: 18px;
          }

          .logo-wrap {
            margin-bottom: 15px;
          }

          .fortuna-logo {
            width: min(420px, 75%);
          }

          .gold-line {
            margin: 15px auto;
          }

          .message {
            margin: 18px auto;
          }

          .footer-text {
            margin-top: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .celebration-overlay,
          .confetti,
          .firework {
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
