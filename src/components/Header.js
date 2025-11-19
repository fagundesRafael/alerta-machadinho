'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Policial', href: '/policial' },
    { name: 'Educação', href: '/educacao' },
    { name: 'Cultura', href: '/cultura' },
    { name: 'Política', href: '/politica' },
    { name: 'Esportes', href: '/esportes' },
  ];

  const dropdownLinks = [
    { name: 'Rondônia', href: '/rondonia' },
    { name: 'Brasil', href: '/brasil' },
    { name: 'Mundo', href: '/mundo' },
  ];

  return (
    <header className="bg-red-700 shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold group inline-grid place-items-center">
              <span className="col-start-1 row-start-1 transition-opacity duration-500 group-hover:opacity-0">
                ALERTA MDO
              </span>
              <span className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                ALERTA MACHADINHO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group text-white px-2 py-2 text-sm font-medium"
              >
                {link.name}
                {/* A Linha Animada */}
                <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-white transition-all duration-[400ms] ease-in-out group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Dropdown "Mais" */}
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="relative group text-white px-2 py-2 text-sm font-medium flex items-center gap-1">
                Mais <ChevronDown size={14} className={`transition-transform duration-[400ms] ease-in-out ${dropdownOpen ? 'rotate-180' : ''}`} />
                {/* A Linha Animada para o botão */}
                <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-white transition-all duration-[400ms] ease-in-out group-hover:w-full"></span>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-xl py-2 z-20 animate-fade-in">
                  {dropdownLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
             <div className="text-white cursor-pointer hover:text-gray-200 transition-colors">
                <Search />
             </div>
             <Link href="/login" className="text-white text-sm font-bold hover:underline decoration-white underline-offset-4">ENTRAR</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
            <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl p-6" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button onClick={() => setMobileMenuOpen(false)}><X className="text-gray-500" /></button>
                </div>
                <nav className="flex flex-col space-y-2">
                    {[...navLinks, ...dropdownLinks].map(link => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/login" className="mt-4 px-4 py-3 bg-red-700 text-white rounded-lg text-center font-bold hover:bg-red-800 transition-colors">
                        Área do Assinante
                    </Link>
                </nav>
            </div>
        </div>
      )}
    </header>
  );
}