import React from 'react';
import { FileCode, ArrowRight } from 'lucide-react';

const assignments = [
  {
    id: 'assign-optimizer',
    role: 'Quantum Software Engineer',
    title: 'Quantum Circuit Optimizer',
    difficulty: 'Hard',
    time: '4-6 hrs',
    summary:
      'Implement a depth-reduction pass for parameterized circuits and benchmark on provided suites.',
  },
  {
    id: 'assign-vqe',
    role: 'Quantum Algorithms Researcher',
    title: 'VQE Ansatz Benchmark',
    difficulty: 'Medium',
    time: '3-5 hrs',
    summary:
      'Evaluate ansätze across molecules (H2, LiH) and analyze trade-offs in depth vs accuracy.',
  },
  {
    id: 'assign-scheduler',
    role: 'Cloud Platform Engineer',
    title: 'Quantum Jobs Scheduler',
    difficulty: 'Medium',
    time: '3-4 hrs',
    summary:
      'Design scheduling for hybrid workflows with fairness and latency SLAs.',
  },
];

function AssignmentCard({ item }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/40 hover:bg-white/10 transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300/80">{item.role}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
        </div>
        <FileCode className="h-5 w-5 text-blue-200" />
      </div>
      <p className="mt-3 text-white/70 text-sm">{item.summary}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-white/70">
        <span className="rounded-full border border-white/10 px-2 py-1">{item.difficulty}</span>
        <span className="rounded-full border border-white/10 px-2 py-1">{item.time}</span>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-500 transition">
        Get Instructions
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function Assignments() {
  return (
    <section id="assignments" className="relative py-16 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Assignments</h2>
          <a href="#roles" className="text-blue-300 hover:text-white transition text-sm">Back to roles</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((a) => (
            <AssignmentCard key={a.id} item={a} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/0 via-blue-900/10 to-blue-900/20" />
    </section>
  );
}
