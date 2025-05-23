import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: '@trungnam-dev',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${montserrat.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
