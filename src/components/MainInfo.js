import Image from 'next/image';

const MainInfo = () => {
  const featuredNews = {
    title: "Crise Hídrica no Norte: Rio Machado atinge nível crítico histórico",
    summary: "Defesa Civil alerta para riscos de desabastecimento em diversas comunidades ribeirinhas. Prefeitura anuncia medidas de emergência.",
    category: "Rondônia",
    image: "https://picsum.photos/800/600?random=1",
    slug: "crise-hidrica-machado"
  };

  const sideNews = [
    { 
      id: 2, 
      title: "Operação policial apreende madeira ilegal na zona rural", 
      category: "Policial", 
      color: "bg-red-700", // Tom mais escuro/sério
      image: "https://picsum.photos/400/300?random=2" 
    },
    { 
      id: 3, 
      title: "Escolas municipais recebem novos equipamentos de informática", 
      category: "Educação", 
      color: "bg-blue-700", // Tom mais escuro/sério
      image: "https://picsum.photos/400/300?random=3" 
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto">
      {/* Grid Container: 1 coluna no mobile, 3 no desktop (lg) */}
      {/* Altura definida no desktop para forçar alinhamento proporcional */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[500px]">
        
        {/* --- Coluna Esquerda (Destaque - ocupa 2/3) --- */}
        <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-lg shadow-md h-[300px] lg:h-full">
          <Image
            src={featuredNews.image}
            alt={featuredNews.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Overlay gradiente para leitura do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 lg:p-8">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-green-700 rounded-sm w-fit uppercase tracking-wide">
              {featuredNews.category}
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 leading-tight group-hover:underline decoration-2 underline-offset-4">
              {featuredNews.title}
            </h2>
            <p className="text-zinc-200 text-sm lg:text-base line-clamp-2 lg:line-clamp-3 max-w-2xl">
              {featuredNews.summary}
            </p>
          </div>
        </div>

        {/* --- Coluna Direita (Lista Lateral - ocupa 1/3) --- */}
        <div className="flex flex-col gap-4 h-full">
          {sideNews.map((news) => (
            <div key={news.id} className="relative flex-1 group cursor-pointer overflow-hidden rounded-lg shadow-md min-h-[200px]">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className={`inline-block px-2 py-1 mb-2 text-[10px] font-bold text-white rounded-sm w-fit uppercase tracking-wide ${news.color}`}>
                  {news.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-zinc-200">
                  {news.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MainInfo;