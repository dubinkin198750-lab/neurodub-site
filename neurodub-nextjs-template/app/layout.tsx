import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neurodub — AI-алгоритмы для автоматизации бизнеса',
  description:
    'Разработка и внедрение AI-алгоритмов, workflow на n8n и автоматизация бизнес-процессов для компаний в России.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Neurodub',
    description:
      'AI-автоматизация бизнес-процессов, разработка алгоритмов и внедрение workflow на n8n.',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
