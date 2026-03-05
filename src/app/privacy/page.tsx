'use client';

export default function Privacy() {
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
            className="absolute bottom-40 right-1/3 w-80 h-80 rounded-full opacity-5 blur-3xl"
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
              Privacy Policy
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
                  This Privacy Policy explains how Cognis collects, uses, and protects your information. We are committed to protecting your privacy and being transparent about our data practices.
                </p>
              </div>

              {/* Open Source */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  2. Open Source Nature
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  Cognis is an open-source project. The source code is publicly available on GitHub. Anyone can review, modify, and deploy their own version of this application. Each deployment may have different data handling practices.
                </p>
              </div>

              {/* Data We Collect */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  3. Information We Collect
                </h2>
                <ul
                  className="text-sm leading-relaxed space-y-2 list-disc list-inside"
                  style={{ color: '#a0a0a0' }}
                >
                  <li>Email address for account creation and communication</li>
                  <li>Account profile information you provide</li>
                  <li>Usage data to improve the service</li>
                  <li>Technical data such as IP address and browser type</li>
                </ul>
              </div>

              {/* How We Use Data */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  4. How We Use Your Data
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  We use your data solely to provide and improve our services. Your information is stored securely and is not sold, rented, or shared with third parties for marketing purposes.
                </p>
              </div>

              {/* Data Security */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  5. Data Security
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  6. Your Rights
                </h2>
                <ul
                  className="text-sm leading-relaxed space-y-2 list-disc list-inside"
                  style={{ color: '#a0a0a0' }}
                >
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of non-essential communications</li>
                  <li>Export your data</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  7. Cookies
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  We use cookies and similar technologies to enhance your experience, analyze usage, and assist with our marketing efforts. You can manage your cookie preferences through your browser settings.
                </p>
              </div>

              {/* Changes */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  8. Changes to This Policy
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  We may update this privacy policy from time to time. We will notify users of significant changes via email or by posting a notice on our platform.
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: '#f2f2f2' }}
                >
                  9. Contact Us
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#a0a0a0' }}
                >
                  If you have questions about this privacy policy or your data, please contact us at pritishshashwat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}