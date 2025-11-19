import { notFound } from 'next/navigation';
import NewsTicker from '@/components/NewsTicker';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

// Configurações visuais para cada categoria (baseado nos seus HTMLs)
const categoryConfig = {
  policial: { title: 'Policial', color: 'from-primary to-red-700', badge: 'bg-primary', icon: '🚨' },
  educacao: { title: 'Educação', color: 'from-blue-600 to-blue-800', badge: 'bg-blue-600', icon: '📚' },
  cultura: { title: 'Cultura', color: 'from-purple-600 to-purple-800', badge: 'bg-purple-600', icon: '🎭' },
  politica: { title: 'Política', color: 'from-gray-700 to-gray-900', badge: 'bg-gray-700', icon: '🏛️' },
  esportes: { title: 'Esportes', color: 'from-green-600 to-green-800', badge: 'bg-green-600', icon: '⚽' },
  rondonia: { title: 'Rondônia', color: 'from-green-700 to-green-900', badge: 'bg-green-700', icon: '🌳' },
  brasil: { title: 'Brasil', color: 'from-yellow-500 to-yellow-700', badge: 'bg-yellow-600', icon: '🇧🇷' },
  mundo: { title: 'Mundo', color: 'from-indigo-600 to-indigo-800', badge: 'bg-indigo-600', icon: '🌍' },
};

// Simula busca de dados no DB filtrando por categoria
async function getCategoryNews(category) {
  // Aqui você conectaria ao MongoDB: Post.find({ category: category })
  return Array(9).fill(null).map((_, i) => ({
    id: i,
    title: `Notícia Exemplo de ${category} número ${i + 1}`,
    summary: `Resumo demonstrativo para a categoria ${category}. O conteúdo real virá do banco de dados.`,
    image: `https://picsum.photos/600/400?random=${Math.random()}`,
    date: '26/07/2024',
    author: 'Redação'
  }));
}

export async function generateMetadata({ params }) {
  const category = params.category;
  const config = categoryConfig[category];
  if (!config) return { title: 'Página não encontrada' };
  return { title: `${config.title} - Alerta Machadinho` };
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const config = categoryConfig[category];

  if (!config) {
    notFound(); // Retorna 404 se a categoria não existir no config
  }

  const news = await getCategoryNews(config.title);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NewsTicker />
      
      {/* Header da Categoria */}
      <section className={`bg-gradient-to-r ${config.color} text-white py-16 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="text-6xl mb-4">{config.icon}</div>
          <h1 className="text-5xl font-bold mb-4">{config.title}</h1>
          <p className="text-xl opacity-90">As principais notícias sobre {config.title.toLowerCase()} em destaque</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Ad Banner */}
        <div className="mb-12 text-center">
            <div className="bg-gray-200 rounded-lg p-4 h-32 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-500 font-medium">PUBLICIDADE {config.title.toUpperCase()}</span>
            </div>
        </div>

        {/* Conteúdo Principal + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Grid de Notícias */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 pl-4" style={{ borderColor: 'var(--tw-gradient-from)' }}>
                        Últimas Atualizações
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {news.map((item, index) => (
                        <article key={item.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-${index * 100}`}>
                            <div className="relative h-48 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute top-4 right-4">
                                    <span className={`${config.badge} text-white px-2 py-1 rounded text-xs font-bold shadow`}>
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight hover:text-primary cursor-pointer">
                                    <Link href={`/noticia/exemplo`}>{item.title}</Link>
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{item.summary}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                                    <span>Por {item.author}</span>
                                    <Link href={`/noticia/exemplo`} className={`${config.badge} text-white px-3 py-1 rounded-full hover:opacity-80 transition-opacity`}>
                                        Ler mais
                                    </Link>
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