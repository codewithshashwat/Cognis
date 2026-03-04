"use client"

export default function Home() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance that keeps your users engaged.',
      icon: '⚡',
    },
    {
      title: 'Intelligent Design',
      description: 'AI-powered features that understand your workflow and adapt to your needs.',
      icon: '✨',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your favorite tools and services in just a few clicks.',
      icon: '🔗',
    },
  ];

  return (
    <>

      <main
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#ff5a36' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105" style={{ borderColor: 'rgba(232, 76, 43, 0.2)', backgroundColor: 'rgba(232, 76, 43, 0.05)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#e84c2b' }} />
              <span className="text-sm font-medium" style={{ color: '#a0a0a0' }}>
                Now available in early access
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              style={{ color: '#f2f2f2' }}
            >
              Build smarter.
              <br />
              <span
                className="relative inline-block group"
              >
                Ship faster.
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full opacity-50 blur-sm transition-all duration-300 group-hover:opacity-70"
                  style={{ backgroundColor: '#e84c2b' }}
                />
                <span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full transition-all duration-300 group-hover:scale-x-110"
                  style={{ backgroundColor: '#e84c2b' }}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              Empowering teams with intelligent tools that transform the way you work. Start building something extraordinary today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                className="relative px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
              >
                <span className="relative z-10">Get Started Free</span>
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                  style={{ backgroundColor: '#e84c2b' }}
                />
                <span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                />
              </button>

              <button
                className="relative px-8 py-4 rounded-full text-base font-semibold tracking-wide overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1px solid rgba(232, 76, 43, 0.3)', color: '#f2f2f2' }}
              >
                <span className="relative z-10">Watch Demo</span>
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ backgroundColor: '#e84c2b' }}
                />
                <span
                  className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#e84c2b' }}
                />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-16 flex items-center justify-center gap-8 opacity-40">
              <span className="text-sm" style={{ color: '#606060' }}>Trusted by teams at</span>
              <span className="text-lg font-bold" style={{ color: '#606060' }}>Acme</span>
              <span className="text-lg font-bold" style={{ color: '#606060' }}>Stark</span>
              <span className="text-lg font-bold" style={{ color: '#606060' }}>Wayne</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: '#f2f2f2' }}
            >
              Why choose Cognis?
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: '#a0a0a0' }}
            >
              Everything you need to accelerate your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)' }}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3
                    className="text-xl font-semibold transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: '#f2f2f2' }}
                  >
                    {feature.title}
                  </h3>
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
      </main>
    </>
  );
}