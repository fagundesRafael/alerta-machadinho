export default function AdBanner({ format }) {
    // Formatos: 'horizontal', 'square'
    const hClass = "w-full h-24 mx-auto my-8 bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400 text-xs";
    const sClass = "w-full aspect-square bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400 text-xs mb-6";
  
    return (
      <div className={format === 'square' ? sClass : hClass}>
        <span className="uppercase tracking-widest">Publicidade</span>
      </div>
    );
}