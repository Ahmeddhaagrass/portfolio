import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

type InquiryType =
  | 'Hiring (Full-time)'
  | 'Hiring (Contract)'
  | 'Hiring (Freelance)'
  | 'Collaboration'
  | 'Other';

const HIRE_OPTIONS: { label: string; value: InquiryType }[] = [
  { label: 'Full-time', value: 'Hiring (Full-time)' },
  { label: 'Contract', value: 'Hiring (Contract)' },
  { label: 'Freelance', value: 'Hiring (Freelance)' },
  { label: 'Collaboration', value: 'Collaboration' },
  { label: 'Other', value: 'Other' },
];

/** Email subject line synced to the selected hiring option */
const SUBJECT_BY_INQUIRY: Record<InquiryType, string> = {
  'Hiring (Full-time)': 'Full-time hiring opportunity',
  'Hiring (Contract)': 'Contract hiring opportunity',
  'Hiring (Freelance)': 'Freelance project opportunity',
  Collaboration: 'Collaboration opportunity',
  Other: 'General inquiry',
};

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: SUBJECT_BY_INQUIRY['Hiring (Full-time)'],
  message: '',
  inquiryType: 'Hiring (Full-time)' as InquiryType,
  budget: '',
  timeline: '',
  preferredContact: 'Email' as 'Email' | 'Phone',
};

const inputClass =
  'w-full bg-slate-700/50 border border-slate-600 hover:border-slate-500 focus:border-teal-500 rounded-xl px-4 py-2.5 text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 text-sm focus:ring-2 focus:ring-teal-500/25';

function buildInquiryBody(form: typeof emptyForm): string {
  return [
    `Inquiry type: ${form.inquiryType}`,
    `Preferred contact: ${form.preferredContact}`,
    `Phone: ${form.phone || '—'}`,
    '',
    `Budget: ${form.budget || '—'}`,
    `Timeline: ${form.timeline || '—'}`,
    '',
    'Message:',
    form.message,
  ].join('\n');
}

export default function Contact() {
  const toEmail = 'hagrasahmed123@gmail.com';
  const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!web3AccessKey?.trim()) {
      setSubmitError(
        'Direct inbox delivery is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your environment (see .env.example), rebuild, and redeploy.',
      );
      return;
    }

    setLoading(true);
    try {
      const subject = `${form.inquiryType} — ${form.subject || 'Portfolio inquiry'} (${form.name})`;
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3AccessKey.trim(),
          subject,
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: buildInquiryBody(form),
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again or email me directly.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Could not send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50 overflow-hidden relative">
      {submitted && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/85 backdrop-blur-md motion-safe:animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="relative max-w-md w-full">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-500/50 via-cyan-500/20 to-teal-400/30 motion-safe:animate-success-glow blur-md" />
            <div className="relative rounded-2xl border border-teal-500/30 bg-slate-900/95 p-10 text-center shadow-2xl shadow-teal-500/10 motion-safe:animate-scale-in overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.12),transparent_55%)]" />
              <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-teal-400/25 motion-safe:animate-ping" />
                <span className="absolute inset-3 rounded-full bg-teal-400/15 motion-safe:animate-ping motion-safe:[animation-delay:200ms]" />
                <CheckCircle
                  className="relative z-10 h-20 w-20 text-teal-400 drop-shadow-[0_0_24px_rgba(20,184,166,0.55)] motion-safe:animate-success-bounce"
                  strokeWidth={1.75}
                />
              </div>
              <h3 id="success-title" className="text-slate-100 font-bold text-2xl mb-2 motion-safe:animate-fade-up motion-safe:[animation-delay:0.15s]">
                You’re all set
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed motion-safe:animate-fade-up motion-safe:[animation-delay:0.22s]">
                Your inquiry was delivered straight to my inbox. I’ll reply as soon as I can.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ ...emptyForm });
                  setSubmitError(null);
                }}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25 motion-safe:animate-fade-up motion-safe:[animation-delay:0.3s]"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 motion-safe:animate-fade-up">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Let's Work Together</h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="motion-safe:animate-fade-up" style={{ animationDelay: '80ms' }}>
              <h3 className="text-slate-200 font-semibold mb-4">Get in touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${toEmail}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-all duration-300 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-teal-500/40 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </span>
                  {toEmail}
                </a>
                <span className="flex items-center gap-3 text-slate-400">
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </span>
                  Cairo, Egypt
                </span>
                <a
                  href="tel:+201016429658"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-all duration-300 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-teal-500/40 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </span>
                  +2 01016429658
                </a>
                <a
                  href="tel:+447951831902"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-all duration-300 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-teal-500/40 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </span>
                  +44 7951 831902
                </a>
              </div>
            </div>

            <div className="motion-safe:animate-fade-up" style={{ animationDelay: '140ms' }}>
              <h3 className="text-slate-200 font-semibold mb-4">Follow me</h3>
              <div className="flex gap-3">
                {[
                  { icon: Mail, label: 'Email', href: `mailto:${toEmail}` },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmedhagraas/', external: true },
                  { icon: Github, label: 'GitHub', href: 'https://github.com/Ahmeddhaagrass', external: true },
                ].map(({ icon: Icon, label, href, external }, i) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10 active:scale-95"
                    style={{ animationDelay: `${160 + i * 50}ms` }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 motion-safe:animate-fade-up transition-all duration-500 hover:border-teal-500/20 hover:shadow-lg hover:shadow-teal-500/5"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-sm font-medium">Currently available</span>
              </div>
              <p className="text-slate-500 text-sm">Open to full-time roles, contract work, and interesting collaborations.</p>
            </div>

            <div
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-500/40 via-slate-600/80 to-cyan-500/30 motion-safe:animate-fade-up shadow-lg shadow-black/20"
              style={{ animationDelay: '260ms' }}
            >
              <div className="rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-slate-800/80 p-5 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl motion-safe:animate-pulse" />
                <h3 className="text-slate-200 font-semibold mb-1 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-teal-400 motion-safe:animate-pulse" />
                  Hiring options
                </h3>
                <p className="text-slate-500 text-xs mb-4">Pick how you’d like to work together — your choice is included in the email.</p>
                <div className="flex flex-wrap gap-2">
                  {HIRE_OPTIONS.map((opt, idx) => {
                    const selected = form.inquiryType === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() =>
                          setForm((p) => ({
                            ...p,
                            inquiryType: opt.value,
                            subject: SUBJECT_BY_INQUIRY[opt.value],
                          }))
                        }
                        className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 motion-safe:animate-fade-up ${
                          selected
                            ? 'bg-teal-500/20 border-teal-500/55 text-teal-200 shadow-[0_0_28px_-8px_rgba(20,184,166,0.55)] scale-[1.02]'
                            : 'bg-slate-800/60 border-slate-600/90 text-slate-400 hover:border-teal-500/40 hover:text-teal-200 hover:scale-[1.03] active:scale-[0.97]'
                        }`}
                        style={{ animationDelay: `${300 + idx * 55}ms` }}
                      >
                        {selected && (
                          <span className="absolute inset-0 rounded-full bg-teal-400/10 motion-safe:animate-pulse pointer-events-none" />
                        )}
                        <span className="relative">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                  Submit the form to send your inquiry straight to my inbox — no extra steps or mail app required.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 motion-safe:animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-500/25 via-slate-700/50 to-slate-800/80">
              <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-7 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,transparent_0%,rgba(20,184,166,0.5)_50%,transparent_100%)] motion-safe:animate-shimmer bg-[length:200%_100%]" />

                {!submitted && (
                  <form onSubmit={handleSubmit} className="relative space-y-4">
                    {submitError && (
                      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-200/95 text-sm leading-relaxed">
                        {submitError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="motion-safe:animate-fade-up" style={{ animationDelay: '40ms' }}>
                        <label className="block text-slate-400 text-sm mb-1.5">Name</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div className="motion-safe:animate-fade-up" style={{ animationDelay: '90ms' }}>
                        <label className="block text-slate-400 text-sm mb-1.5">Email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="motion-safe:animate-fade-up" style={{ animationDelay: '140ms' }}>
                      <label className="block text-slate-400 text-sm mb-1.5">Your phone number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required={form.preferredContact === 'Phone'}
                        placeholder={
                          form.preferredContact === 'Phone'
                            ? 'Required when phone is your preferred contact'
                            : 'Optional — include if you want a call or WhatsApp'
                        }
                        className={inputClass}
                      />
                    </div>

                    <div className="motion-safe:animate-fade-up" style={{ animationDelay: '190ms' }}>
                      <label className="block text-slate-400 text-sm mb-1.5">Preferred contact</label>
                      <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-900/50 border border-slate-700/80">
                        {(['Email', 'Phone'] as const).map((opt) => {
                          const active = form.preferredContact === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setForm((p) => ({ ...p, preferredContact: opt }))}
                              className={`relative py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                active
                                  ? 'text-slate-950 bg-teal-500 shadow-md shadow-teal-500/25'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="motion-safe:animate-fade-up" style={{ animationDelay: '240ms' }}>
                      <label className="block text-slate-400 text-sm mb-1.5">Subject</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project inquiry"
                        className={inputClass}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="motion-safe:animate-fade-up" style={{ animationDelay: '290ms' }}>
                        <label className="block text-slate-400 text-sm mb-1.5">Budget (optional)</label>
                        <input
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          placeholder="e.g. $500, $2k, negotiable"
                          className={inputClass}
                        />
                      </div>
                      <div className="motion-safe:animate-fade-up" style={{ animationDelay: '340ms' }}>
                        <label className="block text-slate-400 text-sm mb-1.5">Timeline (optional)</label>
                        <input
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          placeholder="e.g. 2 weeks, ASAP"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="motion-safe:animate-fade-up" style={{ animationDelay: '390ms' }}>
                      <label className="block text-slate-400 text-sm mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="motion-safe:animate-fade-up pt-1" style={{ animationDelay: '440ms' }}>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-teal-500/50 text-slate-950 font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:hover:translate-y-0"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed motion-safe:animate-fade-up" style={{ animationDelay: '490ms' }}>
                      Messages are sent in the background to {toEmail} (no page change). Add your Web3Forms key in GitHub Actions or a local{' '}
                      <code className="text-slate-400">.env</code> before building for production.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
