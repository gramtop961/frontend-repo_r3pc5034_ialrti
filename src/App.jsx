import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobList from './components/JobList';
import Assignments from './components/Assignments';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <JobList />
        <Assignments />
      </main>
      <Footer />
    </div>
  );
}
