import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';
import Sidebar from '@/components/Sidebar';
import NewsTicker from '@/components/NewsTicker';

export default async function NewsPage({ params }) {
  const { slug } = params;
  
  // Mock para não quebrar sem DB
  const post = {
    title: "Governo anuncia grande pacote de obras para infraestrutura local",
    category: "Política",
    author: "Redação",
    createdAt: new Date(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    imageUrl: "https://picsum.photos/800/400",
    imageCredit: "Foto: Assessoria",
    views: 340
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
        <NewsTicker />
        
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Artigo Principal */}
                <article className="lg:col-span-8 bg-white p-8 rounded-xl shadow-lg">
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold uppercase">
                                {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 border-b pb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div>
                                <p className="font-bold text-gray-800">Por {post.author}</p>
                                <p>Jornalista</p>
                            </div>
                            <div className="ml-auto flex gap-4">
                                <span>👁️ {post.views} views</span>
                            </div>
                        </div>
                    </header>

                    <div className="mb-8">
                        <img src={post.imageUrl} className="w-full rounded-lg shadow-md" alt={post.title} />
                        <p className="text-xs text-gray-500 mt-2 italic">{post.imageCredit}</p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                        <p>{post.content}</p>
                        <p>Mais parágrafos de conteúdo simulado para demonstrar a tipografia agradável de leitura...</p>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-24">
                        <Sidebar />
                    </div>
                </aside>
            </div>
        </div>
    </div>
  );
}