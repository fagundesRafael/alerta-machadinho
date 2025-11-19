import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Alerta Machadinho | Notícias de Machadinho D\'Oeste e Região',
  description: 'O principal portal de notícias de Machadinho D\'Oeste.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen pb-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}