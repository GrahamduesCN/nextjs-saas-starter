# Next.js SaaS Starter

A production-ready Next.js 14 starter for building SaaS applications. Ships with a landing page, dashboard, authentication pages, billing UI, and a clean Tailwind CSS design system.

## What you get

- **Landing page** with hero, features grid, and pricing section
- **Dashboard** with sidebar navigation, stats cards, and activity feed
- **Authentication pages** — login and register with form validation ready
- **Billing page** — plan display and payment method UI
- **Settings page** — account management
- **Analytics page** — placeholder ready for your analytics provider
- **API route** — example health check endpoint
- **Dark mode** — built-in with Tailwind CSS `class` strategy
- **Responsive** — works on mobile, tablet, and desktop

## What this is NOT

This starter provides the **UI layer** — pages, layouts, components. It does NOT include:

- A database (add Prisma, Drizzle, or your ORM of choice)
- Working auth (wire up NextAuth.js, Clerk, or Lucia)
- Live payment processing (add Stripe keys and webhook handler)
- A CMS or admin panel

These are intentionally left for you to choose your own stack.

## Quick Start

```bash
# Clone
git clone https://github.com/GrahamduesCN/nextjs-saas-starter.git my-saas
cd my-saas

# Install
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Tailwind + custom styles
│   ├── login/page.tsx          # Sign in
│   ├── register/page.tsx       # Sign up
│   ├── dashboard/
│   │   ├── layout.tsx          # Sidebar + main wrapper
│   │   ├── page.tsx            # Overview with stats
│   │   ├── analytics/page.tsx  # Analytics placeholder
│   │   ├── settings/page.tsx   # Account settings
│   │   └── billing/page.tsx    # Subscription management
│   └── api/hello/route.ts      # Example API
├── lib/
│   └── utils.ts                # cn(), formatCurrency(), formatDate()
└── components/                 # Add your shared components here
```

## Customization

Edit `tailwind.config.js` to change the brand color:

```js
theme: {
  extend: {
    colors: {
      brand: {
        600: '#YOUR_COLOR', // Primary button color
      },
    },
  },
},
```

## Adding Auth

Wire up your preferred auth provider:

- [NextAuth.js](https://next-auth.js.org/)
- [Clerk](https://clerk.com/)
- [Lucia](https://lucia-auth.com/)

The login and register pages are standard forms — just add your auth logic.

## Adding Payments

1. Sign up for [Stripe](https://stripe.com)
2. Add your keys to `.env.local`
3. Create a checkout API route and webhook handler

## License

MIT

---

## Related Projects

| Project | Description |
|---------|-------------|
| [ai-agent-starter](https://github.com/GrahamduesCN/ai-agent-starter) | Multi-provider AI agent framework |
| [dev-cli-kit](https://github.com/GrahamduesCN/dev-cli-kit) | Developer CLI toolkit |
| [ai-chat-saas](https://github.com/GrahamduesCN/ai-chat-saas) | AI chat app built on this starter ($19 template) |

Built with Next.js 14, React 18, Tailwind CSS, and TypeScript.Built with Next.js 14, React 18, Tailwind CSS, and TypeScript.
