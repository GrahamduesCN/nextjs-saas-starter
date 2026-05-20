import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Nav */}
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
          <span className="text-xl font-bold text-brand-600">NextSaaS</span>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-sm bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Build your SaaS
            <br />
            <span className="text-brand-600">in days, not months</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            NextSaaS gives you authentication, payments, and a polished UI out of the box.
            Fork it, tweak it, ship it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors text-lg"
            >
              Start Free
            </Link>
            <Link
              href="https://github.com/GrahamduesCN/nextjs-saas-starter"
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-lg"
            >
              View on GitHub
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
            Everything you need
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
            Simple pricing
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricing.map((p, i) => (
              <div
                key={p.name}
                className={`p-8 rounded-xl border-2 ${
                  i === 1
                    ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{p.price}</span>
                  <span className="text-slate-500">/mo</span>
                </p>
                <ul className="mt-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="text-brand-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-6 block text-center py-2 rounded-lg font-medium transition-colors ${
                    i === 1
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>Built with Next.js 14 · Open source under MIT</p>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: '🔐',
    title: 'Authentication',
    desc: 'Login, register, and password reset flows ready to wire up to NextAuth.js, Clerk, or your own provider.',
  },
  {
    icon: '💳',
    title: 'Payments',
    desc: 'Stripe-ready checkout and billing pages. Add your keys and start accepting payments.',
  },
  {
    icon: '📊',
    title: 'Dashboard',
    desc: 'A clean, responsive dashboard layout with sidebar navigation and stats cards.',
  },
  {
    icon: '🎨',
    title: 'Tailwind CSS',
    desc: 'Utility-first CSS with dark mode support. Customize the brand colors in tailwind.config.js.',
  },
  {
    icon: '⚡',
    title: 'App Router',
    desc: 'Built on Next.js 14 App Router with React Server Components, layouts, and streaming.',
  },
  {
    icon: '🚀',
    title: 'Deploy anywhere',
    desc: 'Deploy to Vercel with one click, or self-host on any Node.js server.',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$0',
    features: ['1 project', 'Community support', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domain'],
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: ['Everything in Pro', 'SSO', 'Dedicated support', 'Custom SLA'],
  },
];
