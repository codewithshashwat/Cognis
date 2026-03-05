'use client';

export default function Terms() {
  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#e84c2b' }}
          />
          <div
            className="absolute bottom-40 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: '#ff5a36' }}
          />
        </div>

        {/* Header */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center space-y-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'rgba(232, 76, 43, 0.1)', color: '#e84c2b' }}
            >
              Legal
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: '#f2f2f2' }}
            >
              Terms of Service
            </h1>
            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
              style={{ color: '#a0a0a0' }}
            >
              Last updated: March 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32">
          <div
            className="relative p-8 sm:p-12 rounded-3xl overflow-hidden"
            style={{ border: '1px solid rgba(232, 76, 43, 0.15)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-5 blur-2xl"
              style={{ backgroundColor: '#e84c2b' }}
            />

            <div className="relative z-10 space-y-8">
              {/* Introduction */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  1. Introduction
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  Welcome to Cognis. These Terms of Service govern your use of our application. By using Cognis, you agree to these terms.
                </p>
              </div>

              {/* Open Source */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  2. Open Source Project
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  Cognis is an open-source project. The source code is publicly available and can be modified and deployed by anyone. While the core codebase is maintained, individual deployments may vary.
                </p>
              </div>

              {/* Data Collection */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  3. Data Collection
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  When you use Cognis, we collect basic information such as your email and usage data to provide and improve our services. Your data is stored securely and is not used for any purpose other than providing the service.
                </p>
              </div>

              {/* Use of Service */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  4. Use of Service
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  You agree to use Cognis for lawful purposes only. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  5. Disclaimer
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  Cognis is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation of the service.
                </p>
              </div>

              {/* Changes */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  6. Changes to Terms
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  7. Contact
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  If you have questions about these terms, please contact us at pritishshashwat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}