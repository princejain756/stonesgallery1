'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const projectTypes = [
  'Luxury villa interiors',
  'Temple / spiritual spaces',
  'Hospitality or retail fitout',
  'Landscape & outdoor features',
  'Export enquiry',
];

export default function LeadGenForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: projectTypes[0],
    notes: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Unable to submit lead right now.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: projectTypes[0], notes: '' });
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-white/15 bg-white/5 p-6 text-left">
      <p className="text-xs uppercase tracking-[0.4em] text-white/60">Share your stone brief</p>
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-white/60">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none"
          placeholder="Architect / homeowner name"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-white/60">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none"
            placeholder="you@studio.com"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-white/60">Phone / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none"
            placeholder="+91 9XXXXXXXXX"
          />
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-white/60">Project type</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="mt-2 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-[#050505] text-white">
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-white/60">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="mt-2 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none"
          placeholder="Share BOQ highlights, delivery timelines, finishes..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-white/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Submitting…' : 'Share project brief'}
      </button>
      {status === 'success' && <p className="text-xs text-emerald-300">Thank you! Our team will respond within 12 working hours.</p>}
      {status === 'error' && <p className="text-xs text-red-300">{error ?? 'Something went wrong. Please try again.'}</p>}
    </form>
  );
}
