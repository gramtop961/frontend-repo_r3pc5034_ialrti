import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h4 className="text-white font-semibold">About bloq</h4>
            <p className="mt-2 text-white/70 text-sm">
              We are advancing quantum computing with practical, scalable systems and a culture of rigorous engineering.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Hiring process</h4>
            <p className="mt-2 text-white/70 text-sm">
              Roles include targeted assignments that mirror real challenges. Submit work through our portal, then meet the team.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-white/70 text-sm">careers@bloq.com</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} bloq. All rights reserved.</div>
      </div>
    </footer>
  );
}
