import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import profile from '../data/profile';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);

    // Simulate sending & open mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');

      // Mailto link triggering as fallback for direct email client
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-5"
    >
      <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
        <span className="w-2 h-6 rounded bg-cyan-500"></span>
        Send a Direct Message
      </h3>

      {/* Name Input */}
      <div>
        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
          Full Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-500 border ${
            errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
          } outline-none transition-colors text-sm font-sans`}
        />
        {errors.name && <p className="mt-1 text-xs text-rose-400 font-medium">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
          Your Email Address <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. john@example.com"
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-500 border ${
            errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
          } outline-none transition-colors text-sm font-sans`}
        />
        {errors.email && <p className="mt-1 text-xs text-rose-400 font-medium">{errors.email}</p>}
      </div>

      {/* Subject Input */}
      <div>
        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
          Subject <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry / Opportunity"
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-500 border ${
            errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
          } outline-none transition-colors text-sm font-sans`}
        />
        {errors.subject && <p className="mt-1 text-xs text-rose-400 font-medium">{errors.subject}</p>}
      </div>

      {/* Message Textarea */}
      <div>
        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your idea or project requirements..."
          className={`w-full px-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-500 border ${
            errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
          } outline-none transition-colors text-sm font-sans resize-none`}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-rose-400 font-medium">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Status Alert Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>Message prepared! Opening your mail app to send directly to {profile.email}.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>An error occurred. Please send an email directly to {profile.email}.</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
