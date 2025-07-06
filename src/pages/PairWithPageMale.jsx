import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PairWithSuggestionsMale from '../components/PairWithSuggestionsMale';
import Footer from '../components/Footer';

export default function PairWithPageMale() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-cyan-100 p-8 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/result')}
        className="absolute top-6 left-6 bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
        title="Back to Result Page"
      >
        <ArrowLeft className="w-5 h-5 text-indigo-700" />
      </button>

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Best Pairing Suggestions for You 👖
        </h2>

        {/* You can change topStyle to dynamic value later */}
        <PairWithSuggestionsMale topStyle="Hoodie" />

        <div className="mt-6 text-center text-gray-500">
          These looks are curated based on casual male fashion trends. Adjust styles as per mood or occasion!
        </div>
      </div>

      <Footer />
    </div>
  );
}
