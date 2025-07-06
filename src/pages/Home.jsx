import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadArea from '../components/UploadArea';
import GenerateButton from '../components/GenerateButton';
import HeroHeader from '../components/HeroHeader';
import Footer from '../components/Footer';

export default function Home() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!photo) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/result'); // Navigates to the Result Page
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-fuchsia-200 via-sky-100 to-emerald-100">
      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-12 md:p-16">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white border-opacity-30">
          <HeroHeader />

          <div className="mt-8">
            <UploadArea fileInputRef={fileInputRef} setPhoto={setPhoto} />
          </div>

          {photo && (
            <div className="mt-6 text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="Preview"
                className="max-w-xs rounded-2xl border-4 border-indigo-300 shadow-xl mx-auto hover:rotate-1 hover:scale-105 transition duration-300"
              />
            </div>
          )}

          {/* Try It On Button */}
          <GenerateButton photo={photo} loading={loading} onClick={handleGenerate} />

          {/* New Button to Navigate to Product Link Page */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/product')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition"
            >
              Enter Product Link 🔗
            </button>
          </div>
        </div>

        <Footer />
      </main>

      {/* Right Sidebar */}
      <aside className="hidden md:flex w-[22rem] bg-gradient-to-b from-indigo-100 to-fuchsia-100 border-l border-indigo-200 p-8 flex-col justify-center items-center text-center shadow-inner">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-showing-a-thumb-up-like-sign-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--logo-work-thumbs-male-character-pack-professionals-illustrations-8102407.png"
          alt="Try-On Me Logo"
          className="w-50 h-50 shadow-lg mb-6 border-4 border-pink-300"
        />
        <h2 className="text-3xl font-bold text-indigo-700">Try-On Me</h2>
        <p className="text-md text-gray-600 mt-2">
          Your AI stylist — try new outfits with just one photo 🎨
        </p>
      </aside>
    </div>
  );
}
