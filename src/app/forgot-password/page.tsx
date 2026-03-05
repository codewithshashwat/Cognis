'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending password reset email
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#ff5a36' }}
          />
        </div>

        {/* Forgot Password Form */}
        <div className="relative z-10 mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="relative p-8 sm:p-12 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            <div className="relative z-10 space-y-8">
              {/* Header */}
              <div className="text-center space-y-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto"
                  style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }}
                >
                  🔑
                </div>
                <h1
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ color: '#f2f2f2' }}
                >
                  Forgot password?
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  No worries, we'll send you reset instructions.
                </p>
              </div>

              {submitted ? (
                /* Success Message */
                <div className="text-center space-y-4 py-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto"
                    style={{ backgroundColor: 'rgba(232, 76, 43, 0.15)' }}
                  >
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: '#f2f2f2' }}
                    >
                      Check your email
                    </h2>
                    <p
                      className="text-sm"
                      style={{ color: '#a0a0a0' }}
                    >
                      We sent a password reset link to
                      <br />
                      <span
                        className="font-medium"
                        style={{ color: '#e84c2b' }}
                      >
                        {email}
                      </span>
                    </p>
                  </div>
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
                      style={{ borderColor: 'rgba(232, 76, 43, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#e84c2b' }}
                    >
                      Try another email
                    </button>
                    <Link
                      href="/login"
                      className="block w-full px-6 py-3 rounded-xl text-sm font-medium text-center transition-all duration-300 hover:scale-[1.02]"
                      style={{ color: '#a0a0a0' }}
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              ) : (
                /* Form */
                <>
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send reset link'}
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

                  {/* Back to Login */}
                  <Link
                    href="/login"
                    className="block text-center text-sm font-medium transition-colors duration-300 hover:underline"
                    style={{ color: '#a0a0a0' }}
                  >
                    ← Back to login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
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