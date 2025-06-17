import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="elegant-container text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Elegant 404 Typography */}
          <div className="space-y-4">
            <h1 className="font-serif text-8xl md:text-9xl font-light text-charcoal/20 tracking-tight">
              404
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal tracking-tight">
              Page Not Found
            </h2>
          </div>

          {/* Sophisticated Message */}
          <div className="space-y-4 max-w-md mx-auto">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              The page you're looking for seems to have wandered off into the digital ether.
            </p>
            <p className="text-base text-charcoal/60">
              Perhaps it was never meant to be found, or perhaps it's simply taking a moment to compose itself.
            </p>
          </div>

          {/* Elegant Navigation */}
          <div className="pt-8">
            <Link
              to="/"
              className="elegant-button group"
            >
              <span className="transition-all duration-300 group-hover:tracking-wide">
                Return Home
              </span>
            </Link>
          </div>

          {/* Subtle Footer */}
          <div className="pt-16">
            <p className="text-xs text-charcoal/40 font-mono tracking-wider">
              Error 404 — Olli Airola Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
