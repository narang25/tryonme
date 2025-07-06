import Footer from '../components/Footer';
import PairWithSuggestions from '../components/PairWithSuggestions';



export default function PairWithPage() {
     const topStyle = 'White Tank';
 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-50 to-rose-100 p-8">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Outfit Pairing Suggestions 👖✨
      </h1>
      <p className="text-gray-700 mb-8">
        We've styled your look! Here's the best denim combo to go with your uploaded top.
      </p>
    </div>

    <PairWithSuggestions topStyle="Button-down Shirt" />

    <div className="mt-8 text-center text-sm text-gray-500">
      You can change your top style suggestion logic to match your product category or user selection.
    </div>
  </div>
);

}
