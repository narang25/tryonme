import { useNavigate } from 'react-router-dom';

export default function PairRedirectCard() {
  const navigate = useNavigate();

 const handleRedirect = (gender) => {
  const detectedTopStyle = 'Black Shirt over White Tee'; // Replace with your real detection result

  if (gender === 'male') {
    navigate('/pair-with-male', {
      state: { topStyle: detectedTopStyle },
    });
  } else {
    navigate('/pair-with', {
      state: { topStyle: detectedTopStyle },
    });
  }
};


  return (
    <div className="bg-pink-100 border border-pink-300 p-6 rounded-2xl shadow-md text-center">
      <h3 className="text-xl font-bold text-pink-700 mb-4">👖 Choose Your Outfit Type</h3>
      <p className="text-gray-700 mb-6">
        Select the gender preference to get denim pairing suggestions based on your uploaded outfit.
      </p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => handleRedirect('female')}
          className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md"
        >
          👩 Female
        </button>
        <button
          onClick={() => handleRedirect('male')}
          className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md"
        >
          👨 Male
        </button>
      </div>
    </div>
  );
}