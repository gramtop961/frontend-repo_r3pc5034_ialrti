import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build the future of quantum computing
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Join bloq to architect scalable quantum systems. Explore roles and complete cutting-edge assignments designed to evaluate real-world skills.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#roles" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition">
              Explore Roles
            </a>
            <a href="#assignments" className="px-6 py-3 rounded-md bg-white/20 text-white font-semibold backdrop-blur hover:bg-white/30 transition">
              View Assignments
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-blue-900/40" />
    </section>
  );
}
