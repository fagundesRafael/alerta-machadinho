import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white pt-8 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Sobre */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-bold mb-2 from-primary to-accent bg-clip-text">
              Alerta Machadinho
            </h3>
            <p className="text-white mb-8 leading-relaxed text-lg max-w-md">
              Compromisso com a verdade. O portal de notícias mais completo de Machadinho D'Oeste e região, trazendo informações em tempo real.
            </p>
            <div className="flex space-x-2">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="text-white hover:text-primary transition-colors hover:scale-110 transform">
                        <Icon size={24} />
                    </a>
                ))}
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white border-b-2 border-primary inline-block pb-1">Links Rápidos</h4>
            <ul className="space-y-1.5">
              {['Policial', 'Educação', 'Cultura', 'Política', 'Esportes', 'Rondônia'].map((item) => (
                <li key={item}>
                    <Link href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-white hover:text-primary transition-colors flex items-center group">
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                        {item}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-primary inline-block pb-1">Contate-nos</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-3">
                <Mail className="text-primary mt-1" size={18} />
                <div>
                    <span className="block font-semibold text-white">Redação</span>
                    <span className="text-sm">pauta@alertamachadinho.com.br</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={18} />
                <div>
                    <span className="block font-semibold text-white">WhatsApp</span>
                    <span className="text-sm">(69) 99999-9999</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <div>
                    <span className="block font-semibold text-white">Localização</span>
                    <span className="text-sm">Centro, Machadinho D'Oeste - RO</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-4 text-center text-white text-sm">
            <p>&copy; {new Date().getFullYear()} Alerta Machadinho. Todos os direitos reservados.</p>
            <p>Criado por: Rafael Fagundes</p>
        </div>
      </div>
    </footer>
  );
}