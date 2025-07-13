import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import MyImage from '../assets/my-image.jpg';
import SuggestionCard from '../components/SuggestionCard';
import ColorCompatibilityChecker from '../components/ColorCompatibilityChecker';
import PairRedirectCard from '../components/PairRedirectCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResultPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const userImage = localStorage.getItem('userImage');
  const outfitImage = '/outfit-overlay.png';
  const productLink = localStorage.getItem('productLink');

  const suggestions = [
    {
      title: 'Pair With',
      icon: '👖',
      text: 'Match this top with black jeans or a charcoal skirt for balance.',
    },
    {
      title: 'Occasion Tip',
      icon: '✨',
      text:
        'Perfect for evening coffee dates ☕, smart casual office scenes 🧑‍💻, laid-back dinner outings 🍽️, and Instagram-worthy indoor shoots 📸.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-center">
        <p className="text-xl text-indigo-700 font-semibold mb-4 animate-pulse">
          🪄 Generating your stylish result...
        </p>
        <div className="w-16 h-16 border-4 border-pink-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-blue-50 to-emerald-100 p-8 relative">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
        title="Back to Home"
      >
        <ArrowLeft className="w-5 h-5 text-indigo-700" />
      </button>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Preview Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-indigo-100">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
            Your AI-Styled Look 👗
          </h2>

          <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
            {userImage && (
              <img
                src={userImage}
                alt="User"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
              />
            )}
            <img
              src={MyImage}
              alt="Outfit"
              className="absolute top-0 left-0 w-full h-screen object-cover opacity-90"
            />
          </div>

          {productLink && (
            <div className="mt-4 text-center">
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                View Product
              </a>
            </div>
          )}

          <ColorCompatibilityChecker productColor="Black" userTone="Neutral" />
        </div>

        {/* Suggestions Section */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold text-pink-700 text-center">Stylist Suggestions 💡</h2>

          <div
            onClick={() => navigate('/color-match')}
            className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition-all rounded-xl p-4 shadow-md border border-pink-300"
          >
            <h3 className="text-xl font-bold text-pink-700 mb-2">🎨 Color Match</h3>
            <p className="text-gray-700">Click to get personalized color suggestions based on your Undertone.</p>
          </div>

          <PairRedirectCard />

          <SuggestionCard
            icon="✨"
            title="Occasion Tip"
            text="Perfect for evening coffee dates ☕, smart casual office scenes 🧑‍💻, laid-back dinner outings 🍽️, and Instagram-worthy indoor shoots 📸."
          />
        </div>
      </div>

      {/* About us Button */}
      <div className="text-center mt-10">
        <Link
          to="/about"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition duration-300 font-semibold"
        >
          👩‍🎨 About us
        </Link>
      </div>

      <Footer />
    </div>
  );
}
