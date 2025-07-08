import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ColorMatchPage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const palettes = {
    Cool: ['Emerald green', 'Sapphire blue', 'Amethyst purple', 'Lavender', 'Baby blue', 'Gray', 'Navy'],
    Warm: ['Warm browns', 'Terracotta', 'Olive green', 'Amber', 'Coral', 'Burnt orange', 'Camel', 'Mustard yellow'],
    Neutral: ['Black', 'Gray', 'White', 'Dusty rose', 'Blush pink', 'Olive green'],
  };

  const toneColors = {
    'Emerald green': '#50c878',
    'Sapphire blue': '#0f52ba',
    'Amethyst purple': '#9966cc',
    'Lavender': '#e6e6fa',
    'Baby blue': '#89cff0',
    'Gray': '#a9a9a9',
    'Navy': '#000080',
    'Warm browns': '#a0522d',
    'Terracotta': '#e2725b',
    'Olive green': '#708238',
    'Amber': '#ffbf00',
    'Coral': '#ff7f50',
    'Burnt orange': '#cc5500',
    'Camel': '#c19a6b',
    'Mustard yellow': '#ffdb58',
    'Black': '#000000',
    'White': '#ffffff',
    'Dusty rose': '#d4a5a5',
    'Blush pink': '#f4c2c2',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 py-12 px-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/result')}
        className="absolute top-6 left-6 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition"
        title="Back to Result Page"
      >
        <ArrowLeft className="w-5 h-5 text-indigo-700" />
      </button>

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">
          Best Colours Based on Your Skintone 🎨
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Enhance your natural glow by wearing colors that suit your undertone.
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition mb-10"
        >
          Know Your Undertone 💡
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(palettes).map((tone) => (
            <div
              key={tone}
              className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
                {tone} Undertone
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {palettes[tone].map((color) => (
                  <div
                    key={color}
                    className="w-24 h-10 rounded-full text-xs text-center text-white flex items-center justify-center shadow"
                    style={{ backgroundColor: toneColors[color] || '#ddd' }}
                    title={color}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Panel */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-indigo-700 mb-4">How to Know Your Undertone</h2>

            {/* Vein Image */}
            <img
              src="https://media.belorens.com/storage/uploads//images/2024/08/2024/08/how-to-determine-my-skin-undertone20240810125329.931335.webp"
              alt="Vein Color Test"
              className="w-full h-48 object-cover rounded-md mb-4 border border-gray-300"
            />

            <ul className="list-disc pl-5 text-gray-700 space-y-3 text-sm">
              <li><strong>Vein Test:</strong> Look at your wrist in natural light.<br />
                - Green veins → Warm undertone<br />
                - Blue/Purple veins → Cool undertone</li>
              <li><strong>Jewelry Test:</strong> Gold suits warm tones, Silver suits cool tones</li>
              <li><strong>Sun Test:</strong> Tan easily → Warm, Burn quickly → Cool</li>
              <li><strong>Neutral:</strong> A mix of both signs usually means a neutral undertone</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
