export function IdentityHook() {
  return (
    <section className="px-6 py-20 bg-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xl leading-relaxed text-cream-200/90 font-light">
          You’ve achieved success. Now you’re seeking meaning. You feel the call to
          step beyond noise, roles, and expectations. You’re ready for depth, truth,
          and a more grounded way of leading.
        </p>
      </div>
    </section>
  );
}

export function WhatItIs() {
  const pillars = [
    { title: "Severance", desc: "Letting go of roles, expectations, and noise — creating space for what is essential." },
    { title: "Threshold", desc: "Three days and nights alone in nature. Fasting, solitude, and symbolic rites to contact the deeper Self." },
    { title: "Integration", desc: "Return with clarity, purpose, and a renewed sense of direction — grounded in your life and work." },
  ];

  const ties = [
    "Jungian individuation: maturing into true selfhood",
    "Shadow work: integrating denied or unconscious aspects",
    "Evolution of the soul: stepping into innate potential",
    "Nature-based rites drawn from ancient traditions",
  ];

  return (
    <section className="px-6 py-20 bg-slate-950/95" id="what">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl text-cream-100 mb-6">What Is Sacred Stillness</h2>
        <p className="text-cream-200/90 max-w-3xl leading-relaxed">
          A modern vision fast and leadership rite-of-passage held in wild nature — a precise
          container for clarity, renewal, and purpose.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-xl border border-cream-300/20 bg-slate-900/40 p-6">
              <h3 className="font-serif text-xl text-cream-100">{item.title}</h3>
              <p className="mt-2 text-cream-200/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h4 className="font-serif text-xl text-cream-100 mb-3">Rooted in psychology and ceremony</h4>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ties.map((t) => (
              <li key={t} className="flex items-start gap-3 text-cream-200/90">
                <span className="mt-1 h-2 w-2 rounded-full bg-muted-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const points = [
    "Leaders need inner stability in volatile times",
    "Individuation creates clarity and authentic presence",
    "Shadow integration prevents fear-driven decisions",
    "Stillness awakens intuition and self-trust",
    "Adlerian circles build empathy, belonging, and confidence",
    "Ancient rites reconnect you to values and your inner compass",
  ];
  return (
    <section className="px-6 py-20 bg-slate-950" id="why">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl text-cream-100 mb-6">Why Leaders Choose This</h2>
        <p className="text-cream-200/90 max-w-3xl leading-relaxed mb-6">
          Where modern psychology meets ancient wisdom. Jung offers a map of the inner
          voyage; Adler anchors it in contribution and community. Sacred Stillness brings
          them together so you can lead with clarity, depth, and purpose.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-cream-200/90">
              <span className="mt-1 h-2 w-2 rounded-full bg-muted-gold" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-cream-200/80">
          Sacred Stillness is a modern rite of passage for uncertain times.
        </p>
      </div>
    </section>
  );
}

export function FitSection() {
  return (
    <section className="px-6 py-20 bg-slate-950/95">
      <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-2xl text-cream-100 mb-4">Who It’s For</h3>
          <ul className="space-y-2 text-cream-200/90">
            <li>Entrepreneurs, founders, and senior leaders</li>
            <li>Individuals seeking clarity during transition</li>
            <li>Those who feel the call for deeper work</li>
            <li>People ready to be honest with themselves</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-cream-100 mb-4">Who It’s Not For</h3>
          <ul className="space-y-2 text-cream-200/90">
            <li>Those unwilling to disconnect from devices</li>
            <li>People seeking comfort over truth</li>
            <li>Anyone wanting a casual wellness retreat</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Guide() {
  return (
    <section className="px-6 py-20 bg-slate-950" id="guide">
      <div className="mx-auto max-w-5xl grid gap-10 sm:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-xl border border-cream-300/20">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
            alt="Guide portrait near firelight"
            className="w-full h-72 object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-cream-100 mb-4">Meet the Guide</h2>
          <p className="text-cream-200/90 leading-relaxed">
            Trained with the School of Lost Borders (Four Shields lineage) and rooted in
            Javanese ceremonial heritage tracing back to Keraton traditions, your facilitator
            bridges ancient rites, nature connection, and modern psychology. Years of guiding
            transformational work inform a warm, grounded, trustworthy approach.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    "The most clarifying experience of my professional life.",
    "I returned with a level of purpose I didn’t know I was missing.",
    "Stillness changed how I lead.",
  ];
  return (
    <section className="px-6 py-20 bg-slate-950/95">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl text-cream-100 mb-8">Testimonials</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {quotes.map((q) => (
            <div key={q} className="rounded-xl border border-cream-300/20 bg-slate-900/40 p-6">
              <p className="text-cream-200/90 italic">“{q}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Logistics() {
  const items = [
    { label: "Location", value: "Private land in the Lake District" },
    { label: "Dates", value: "Late August – early September" },
    { label: "Duration", value: "9 days" },
    { label: "Group Size", value: "Limited to 10 participants" },
    { label: "Investment", value: "£4,000–£7,000 (an investment in leadership and inner development)" },
    { label: "Payment", value: "Payment plans available" },
  ];
  return (
    <section className="px-6 py-20 bg-slate-950" id="logistics">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl text-cream-100 mb-6">Logistics + Investment</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.label} className="rounded-xl border border-cream-300/20 bg-slate-900/40 p-5">
              <div className="text-cream-300/70 text-sm">{it.label}</div>
              <div className="text-cream-100 mt-1">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
