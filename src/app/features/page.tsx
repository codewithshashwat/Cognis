'use client';


const features = [
  {
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and automated workflows that learn from your patterns.',
    icon: '🤖',
    comingSoon: false,
  },
  {
    title: 'Advanced Analytics',
    description: 'Track performance, identify bottlenecks, and make data-driven decisions.',
    icon: '📊',
    comingSoon: false,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SSO, and compliance certifications you can trust.',
    icon: '🔒',
    comingSoon: false,
  }
];

export default function Features() {
  return (
    <>

      <main
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
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
              Features
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: '#f2f2f2' }}
            >
              Everything you need
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              Powerful features designed to help your team work smarter, not harder.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 justify-center">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ border: '1px solid rgba(232, 76, 43, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232, 76, 43, 0.1)';
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: '#e84c2b' }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <div className="flex items-center space-x-3">
                    <h3
                      className="text-xl font-semibold transition-all duration-300"
                      style={{ color: '#f2f2f2' }}
                    >
                      {feature.title}
                    </h3>
                    {feature.comingSoon && (
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ backgroundColor: 'rgba(232, 76, 43, 0.15)', color: '#e84c2b' }}
                      >
                        Soon
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#808080' }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                  style={{ color: '#e84c2b' }}
                >
                  →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24">
          <div
            className="relative p-12 sm:p-16 rounded-3xl overflow-hidden text-center"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            <div className="relative z-10 space-y-6">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{ color: '#f2f2f2' }}
              >
                Ready to get started?
              </h2>
              <p
                className="max-w-xl mx-auto text-lg"
                style={{ color: '#a0a0a0' }}
              >
                Join thousands of teams already using Cognis to transform their workflow.
              </p>
              <button
                className="relative px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
              >
                <span className="relative z-10">Start Free Trial</span>
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                  style={{ backgroundColor: '#e84c2b' }}
                />
                <span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
                />
              </button>
            </div>
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