import React from 'react';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    id: 'qeng-1',
    title: 'Quantum Software Engineer',
    location: 'Remote / SF',
    level: 'Senior',
    tags: ['Qiskit', 'Python', 'Circuit Design'],
    assignment: {
      title: 'Quantum Circuit Optimizer',
      brief:
        'Build a pass that reduces depth of parameterized circuits while preserving output within a tolerance.',
      link: '#assignments',
    },
  },
  {
    id: 'r-d-2',
    title: 'Quantum Algorithms Researcher',
    location: 'Boston',
    level: 'Mid-Senior',
    tags: ['Variational Methods', 'Optimization', 'Linear Algebra'],
    assignment: {
      title: 'VQE Ansatz Benchmark',
      brief:
        'Compare hardware-efficient vs problem-inspired ansätze on small molecules and report trade-offs.',
      link: '#assignments',
    },
  },
  {
    id: 'plat-3',
    title: 'Cloud Platform Engineer',
    location: 'Remote',
    level: 'Senior',
    tags: ['Kubernetes', 'Rust/Go', 'Observability'],
    assignment: {
      title: 'Quantum Jobs Scheduler',
      brief:
        'Design a scheduling strategy for mixed classical/quantum workloads with SLAs.',
      link: '#assignments',
    },
  },
];

function RoleCard({ role }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/40 hover:bg-white/10 transition relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80">
            <Briefcase className="h-4 w-4" />
            {role.level} • {role.location}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white">{role.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {role.tags.map((t) => (
              <span key={t} className="rounded-full bg-blue-500/10 text-blue-200 px-3 py-1 text-xs border border-blue-400/30">
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href={role.assignment.link}
          className="mt-1 inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-blue-500 transition"
        >
          Assignment
        </a>
      </div>
      <p className="mt-4 text-white/70 text-sm">{role.assignment.brief}</p>
    </div>
  );
}

export default function JobList() {
  return (
    <section id="roles" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Open Roles</h2>
          <a href="#assignments" className="text-blue-300 hover:text-white transition text-sm">See all assignments</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <RoleCard key={r.id} role={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
