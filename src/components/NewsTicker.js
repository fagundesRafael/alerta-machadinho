import React from 'react';

const NewsTicker = () => {
  const headlines = [
    "Festival de cinema internacional premia produções brasileiras.",
    "Acordo comercial entre Mercosul e União Europeia avança.",
    "Novas regras para aposentadoria entram em vigor na próxima semana.",
    "Previsão do tempo indica chuvas intensas na região Norte.",
    "Mercado financeiro reage positivamente aos novos índices econômicos."
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-6">
      <div className="relative flex items-center w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm overflow-hidden h-12">
        
        {/* Etiqueta Fixa "ÚLTIMAS" */}
        <div className="relative z-20 flex items-center justify-center h-full px-6 bg-[#8B0000] text-white font-bold text-sm uppercase tracking-wider shrink-0">
          Últimas Notícias:
        </div>

        {/* Área de Deslizamento */}
        <div className="relative flex-1 h-full overflow-hidden flex items-center">
          {/* Degradê para suavizar o texto entrando/saindo (opcional, mas elegante) */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-10"></div>

          <div className="animate-marquee flex items-center">
            {/* Duplicamos o conteúdo para criar o loop infinito perfeito */}
            {[...headlines, ...headlines].map((text, index) => (
              <div key={index} className="flex items-center px-4">
                <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium whitespace-nowrap">
                  {text}
                </span>
                {/* Separador Sóbrio */}
                <span className="ml-8 text-zinc-300 dark:text-zinc-700 text-lg">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;