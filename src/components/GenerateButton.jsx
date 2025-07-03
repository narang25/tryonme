import { Loader2 } from 'lucide-react';

export default function GenerateButton({ photo, loading, onClick }) {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={onClick}
        disabled={!photo || loading}
        className={`px-8 py-3 rounded-xl text-white font-semibold text-lg transition-all shadow-lg 
        ${!photo || loading
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
          }`}
      >
        {loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Loader2 className="animate-spin" size={20} />
            Applying Outfit...
          </div>
        ) : (
          '🪄 Try It On'
        )}
      </button>
    </div>
  );
}
