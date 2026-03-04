'use client';

import Link from 'next/link';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '⌘' },
  { name: 'Discord', href: '#', icon: '◆' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: '#e84c2b' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="relative inline-block group">
              <span
                className="text-2xl font-bold tracking-wider transition-all duration-300"
                style={{ color: '#f2f2f2' }}
              >
                Cognis
              </span>
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#e84c2b' }}
              />
              <span
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"
                style={{ backgroundColor: '#e84c2b' }}
              />
            </Link>
            <p
              className="text-sm"
              style={{ color: '#606060' }}
            >
              Build smarter. Ship faster.
            </p>
          </div>

          {/* Social Links - Middle */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="relative group p-2 rounded-lg transition-all duration-300"
                aria-label={social.name}
              >
                <span
                  className="relative z-10 text-sm font-medium transition-colors duration-300"
                  style={{ color: '#a0a0a0' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e84c2b'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
                >
                  {social.icon}
                </span>
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300"
                  style={{ backgroundColor: '#e84c2b' }}
                />
              </a>
            ))}
          </div>

          {/* Copyright - End */}
          <p
            className="text-xs"
            style={{ color: '#404040' }}
          >
            © {new Date().getFullYear()} Cognis
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </footer>
  );
}