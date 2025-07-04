import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
 
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js course dashboard, built with app router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`} >{children}</body>
    </html>
  );
}
