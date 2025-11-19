import NewsTicker from '@/components/NewsTicker';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import MainInfo from '@/components/MainInfo';

const categories = [
  { name: 'Policial', icon: '🚨', color: 'hover:text-red-600' },
  { name: 'Educação', icon: '📚', color: 'hover:text-blue-600' },
  { name: 'Cultura', icon: '🎭', color: 'hover:text-purple-600' },
  { name: 'Política', icon: '🏛️', color: 'hover:text-gray-600' },
  { name: 'Esportes', icon: '⚽', color: 'hover:text-green-600' },
  { name: 'Rondônia', icon: '🌳', color: 'hover:text-green-800' },
  { name: 'Brasil', icon: '🇧🇷', color: 'hover:text-yellow-600' },
  { name: 'Mundo', icon: '🌍', color: 'hover:text-indigo-600' },
];

export default function Home() {
  return (
    <div className="bg-gray-50 mt-2 min-h-screen">
      <NewsTicker />
      
      {/* Ad Horizontal */}
      <div className="max-w-7xl mx-auto px-4">
         <div className="w-full h-28 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
            PUBLICIDADE HORIZONTAL (TOPO)
         </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
        
        {/* Hero Section */}
        
            
            <div className="mt-2">
          <MainInfo />
        </div>
        

        {/* Categories Badges */}
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 my-6 border-l-4 border-primary pl-4">Navegue por Categoria</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.map(cat => (
                    <Link href={`/${cat.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} key={cat.name} className={`bg-white p-4 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform ${cat.color}`}>
                        <div className="text-3xl mb-2">{cat.icon}</div>
                        <div className="font-bold text-gray-700">{cat.name}</div>
                    </Link>
                ))}
            </div>
        </section>

        {/* Main Feed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News Feed */}
            <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Últimas Notícias</h2>
                    <span className="h-1 flex-1 bg-gray-200 ml-4 rounded"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1,2,3,4,5,6].map((i) => (
                        <article key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                            <div className="relative h-48">
                                <img src={`https://picsum.photos/500/300?random=${i+10}`} className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold">Geral</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                                    Título da notícia genérica {i} para preenchimento de layout moderno
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    Um breve resumo da notícia que descreve os acontecimentos principais para atrair a leitura completa do artigo.
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                                    <span>Há {i} horas</span>
                                    <span className="text-primary font-bold cursor-pointer">Ler mais →</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-24">
                    <Sidebar />
                </div>
            </aside>
        </div>

      </main>
    </div>
  );
}