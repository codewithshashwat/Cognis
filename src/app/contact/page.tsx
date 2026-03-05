'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#ff5a36' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center space-y-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)', color: '#e84c2b' }}
            >
              Contact Us
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: '#f2f2f2' }}
            >
              Get in touch
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="relative p-8 sm:p-12 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            {submitted ? (
              <div className="relative z-10 text-center space-y-6 py-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto"
                  style={{ backgroundColor: 'rgba(232, 76, 43, 0.15)' }}
                >
                  ✓
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  Message Sent!
                </h2>
                <p
                  className="text-lg"
                  style={{ color: '#a0a0a0' }}
                >
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                      style={{ color: '#f2f2f2' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: 'rgba(232, 76, 43, 0.2)',
                        color: '#f2f2f2',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.5)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.2)';
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                      style={{ color: '#f2f2f2' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: 'rgba(232, 76, 43, 0.2)',
                        color: '#f2f2f2',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.5)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.2)';
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{
                      borderColor: 'rgba(232, 76, 43, 0.2)',
                      color: formData.subject ? '#f2f2f2' : '#808080',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.5)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.2)';
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#0a0a0f' }}>Select a subject</option>
                    <option value="general" style={{ backgroundColor: '#0a0a0f' }}>General Inquiry</option>
                    <option value="sales" style={{ backgroundColor: '#0a0a0f' }}>Sales</option>
                    <option value="support" style={{ backgroundColor: '#0a0a0f' }}>Support</option>
                    <option value="partnership" style={{ backgroundColor: '#0a0a0f' }}>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      borderColor: 'rgba(232, 76, 43, 0.2)',
                      color: '#f2f2f2',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.5)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.2)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                    style={{ backgroundColor: '#e84c2b' }}
                  />
                  <span
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
                  />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Contact Info */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Email',
                value: 'pritishshashwat@gmail.com',
                icon: '📧',
              },
              {
                title: 'Github',
                value: 'codewithshashwat/Cognis',
                icon: '💻',
              },
            ].map((info) => (
              <div
                key={info.title}
                className="relative group p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ border: '1px solid rgba(232, 76, 43, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.1)';
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: '#e84c2b' }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }}>
                    {info.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: '#f2f2f2' }}
                  >
                    {info.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: '#808080' }}
                  >
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  );
}