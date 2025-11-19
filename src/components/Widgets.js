export default function Widgets() {
  // Em produção, buscaria de API real. Aqui simulamos para a UI.
  return (
    <div className="flex gap-4 mb-6 text-sm font-medium text-gray-600 bg-gray-50 p-2 rounded">
      <div className="flex items-center gap-2">
        <span className="text-green-600 font-bold">US$</span>
        <span>Comercial: R$ 5,78</span>
        <span className="text-red-500 text-xs">▼ 0.4%</span>
      </div>
      <div className="w-px bg-gray-300 mx-2"></div>
      <div className="flex items-center gap-2">
        <span>☁️ Machadinho D'Oeste</span>
        <span className="font-bold">32°C</span>
      </div>
    </div>
  );
}