'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden flex items-center justify-center py-16"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#ff5a36' }}
          />
        </div>

        {/* Signup Form */}
        <div className="relative z-10 mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
          <div
            className="relative p-8 sm:p-10 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h1
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ color: '#f2f2f2' }}
                >
                  Create an account
                </h1>
                <p
                  className="text-sm"
                  style={{ color: '#a0a0a0' }}
                >
                  Start your free trial today
                </p>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="relative w-full px-4 py-3 rounded-xl border flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: 'rgba(232, 76, 43, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                >
                  <span className="text-xl">🔵</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Continue with Google
                  </span>
                </button>
                <button
                  type="button"
                  className="relative w-full px-4 py-3 rounded-xl border flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: 'rgba(232, 76, 43, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                >
                  <span className="text-xl">⚫</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Continue with GitHub
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center space-x-4">
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }} />
                <span
                  className="text-xs font-medium"
                  style={{ color: '#808080' }}
                >
                  OR CONTINUE WITH EMAIL
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }} />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 placeholder:text-opacity-40"
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
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 placeholder:text-opacity-40"
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
                    htmlFor="password"
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 placeholder:text-opacity-40"
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
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                    style={{ color: '#f2f2f2' }}
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition-all duration-300 placeholder:text-opacity-40"
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

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border focus:outline-none transition-all duration-300 cursor-pointer mt-0.5"
                    style={{
                      borderColor: 'rgba(232, 76, 43, 0.3)',
                      backgroundColor: 'transparent',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.6)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.3)';
                    }}
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm cursor-pointer leading-relaxed"
                    style={{ color: '#a0a0a0' }}
                  >
                    I agree to the{' '}
                    <Link
                      href="/terms"
                      className="font-medium transition-colors duration-300 hover:underline"
                      style={{ color: '#e84c2b' }}
                    >
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link
                      href="/privacy"
                      className="font-medium transition-colors duration-300 hover:underline"
                      style={{ color: '#e84c2b' }}
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Creating account...' : 'Create account'}
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

              {/* Sign In Link */}
              <p
                className="text-center text-sm"
                style={{ color: '#a0a0a0' }}
              >
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium transition-colors duration-300 hover:underline"
                  style={{ color: '#e84c2b' }}
                >
                  Sign in
                </Link>
              </p>
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
        input[type="checkbox"]:checked {
          background-color: #e84c2b !important;
          border-color: #e84c2b !important;
        }
      `}</style>
    </>
  );
}