'use client';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former product lead at Google. Building tools that teams actually love.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    bio: '15 years in engineering. Obsessed with performance and developer experience.',
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    bio: 'Creating intuitive experiences that feel magical.',
    avatar: 'ER',
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    bio: 'Full-stack wizard who turns coffee into clean code.',
    avatar: 'DK',
  },
];

export default function About() {
  return (
    <>

      <main
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-32 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
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
              Our Story
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: '#f2f2f2' }}
            >
              About Cognis
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              We're on a mission to transform how teams collaborate and build the future together.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24">
          <div
            className="relative p-12 sm:p-16 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: 'rgba(232, 76, 43, 0.15)' }}
                >
                  🎯
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  Our Mission
                </h2>
              </div>

              <p
                className="text-lg leading-relaxed"
                style={{ color: '#a0a0a0' }}
              >
                At Cognis, we believe that great tools shouldn't get in the way of great work. We're building a platform that understands your workflow, anticipates your needs, and helps your team move faster without sacrificing quality.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: '#a0a0a0' }}
              >
                Every feature we build is guided by one principle: <span style={{ color: '#e84c2b' }}>make the complex simple</span>. Whether you're a startup just getting started or an enterprise scaling globally, Cognis adapts to you—not the other way around.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: '#f2f2f2' }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Simplicity First',
                description: 'Complexity is the enemy. We strive for elegant solutions that just work.',
                emoji: '✨',
              },
              {
                title: 'User Obsessed',
                description: 'Every decision starts with the user experience. Their success is our success.',
                emoji: '💡',
              },
              {
                title: 'Continuous Improvement',
                description: 'We never stop learning, iterating, and making things better.',
                emoji: '🚀',
              },
            ].map((value, index) => (
              <div
                key={value.title}
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
                    {value.emoji}
                  </div>
                  <h3
                    className="text-xl font-semibold transition-all duration-300"
                    style={{ color: '#f2f2f2' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#808080' }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: '#f2f2f2' }}
            >
              Meet the Team
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: '#a0a0a0' }}
            >
              The people behind Cognis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="relative group p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
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
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(232, 76, 43, 0.15)', color: '#e84c2b' }}
                  >
                    {member.avatar}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3
                      className="text-lg font-semibold transition-all duration-300"
                      style={{ color: '#f2f2f2' }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: '#e84c2b' }}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#808080' }}
                  >
                    {member.bio}
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