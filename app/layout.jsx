import './globals.css';
import { Noto_Naskh_Arabic } from 'next/font/google';

const notoArabic = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata = {
  title: '????? | Salam',
  description: '???? ????? ????? ?? ??? ??????? ?? ?????? ??? ??????',
  metadataBase: new URL('https://agentic-bce831c5.vercel.app'),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={notoArabic.className}>
      <body>{children}</body>
    </html>
  );
}
