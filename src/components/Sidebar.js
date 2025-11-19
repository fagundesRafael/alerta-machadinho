import { CloudSun, DollarSign } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="space-y-8">
        {/* Weather Widget */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-primary animate-fade-in">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CloudSun className="text-primary" /> Clima Agora
            </h3>
            <div className="text-center">
                <div className="text-5xl mb-2">⛅</div>
                <div className="text-3xl font-bold text-gray-800">31°C</div>
                <div className="text-gray-600 font-medium">Machadinho D'Oeste</div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <div>Umidade: <strong>65%</strong></div>
                    <div>Vento: <strong>12km/h</strong></div>
                </div>
            </div>
        </div>

        {/* Dollar Widget */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 animate-fade-in delay-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="text-green-600" /> Mercado
            </h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600 text-sm">USD Compra</span>
                    <span className="font-bold text-green-700">R$ 5,12</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">USD Venda</span>
                    <span className="font-bold text-red-600">R$ 5,18</span>
                </div>
                <div className="text-xs text-center text-gray-400 mt-2">Atualizado há 15 min</div>
            </div>
        </div>

        {/* Vertical Ad */}
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center text-gray-400 text-sm font-bold border-2 border-dashed border-gray-300">
            PUBLICIDADE VERTICAL
        </div>
    </div>
  );
}