import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", intention: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch(`${BACKEND_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setForm({ name: "", email: "", intention: "" });
      setStatus("Thank you — you’re on the waitlist. We’ll be in touch.");
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-cream-100">Join the Sacred Stillness Waitlist</h2>
        <p className="mt-2 text-cream-200/90">Be the first to receive an invitation and early access to limited spaces.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4 text-left">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-cream-300/20 bg-slate-900/50 px-4 py-3 text-cream-100 placeholder-cream-300/50 focus:outline-none focus:ring-2 focus:ring-muted-gold/40"
            required
            minLength={2}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-cream-300/20 bg-slate-900/50 px-4 py-3 text-cream-100 placeholder-cream-300/50 focus:outline-none focus:ring-2 focus:ring-muted-gold/40"
            required
          />
          <textarea
            placeholder="Your intention for this journey"
            value={form.intention}
            onChange={(e) => setForm({ ...form, intention: e.target.value })}
            rows={5}
            className="w-full rounded-lg border border-cream-300/20 bg-slate-900/50 px-4 py-3 text-cream-100 placeholder-cream-300/50 focus:outline-none focus:ring-2 focus:ring-muted-gold/40"
            required
            minLength={10}
          />
          <button
            type="submit"
            className="mt-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-deep-green to-deep-blue text-cream-50 shadow-lg shadow-deep-blue/20 hover:opacity-95 transition"
          >
            Join the Waitlist
          </button>
          {status && <p className="text-sm text-cream-200/80">{status}</p>}
        </form>
      </div>
    </section>
  );
}
