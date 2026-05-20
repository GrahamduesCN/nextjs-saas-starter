import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextSaaS — Build Faster',
  description: 'Production-ready Next.js SaaS starter with authentication, payments, and AI integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
