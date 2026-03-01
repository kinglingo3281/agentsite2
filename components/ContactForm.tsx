'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-serif font-bold text-coastal-blue dark:text-white mb-6">
        Send a Message
      </h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="text-green-800 dark:text-green-200 text-sm">
            ✓ Message sent successfully! I&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <p className="text-red-800 dark:text-red-200 text-sm">
            Something went wrong. Please try texting or calling instead.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          type="hidden" 
          name="access_key" 
          value="YOUR_WEB3FORMS_ACCESS_KEY"
        />
        <input 
          type="hidden" 
          name="subject" 
          value="New Contact Form Submission from KLingoRealtor.com"
        />
        <input 
          type="hidden" 
          name="from_name" 
          value="KLingo Website Contact Form"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
            I&apos;m interested in...
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select one</option>
            <option value="buying">Buying a home</option>
            <option value="selling">Selling my property</option>
            <option value="both">Both buying and selling</option>
            <option value="valuation">Property valuation</option>
            <option value="general">General inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-coastal-slate dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell me about your real estate goals..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-4 bg-coastal-blue text-white font-semibold rounded-xl hover:bg-coastal-slate transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Your information is secure and will never be shared.
        </p>
      </form>
    </div>
  );
}
