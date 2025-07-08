import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductLinkForm from '../components/ProductLinkForm';
import PhotoReminder from '../components/PhotoReminder';
import Footer from '../components/Footer';

export default function ProductLinkPage() {
  const [link, setLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!link) return alert('Please paste a product link!');
    localStorage.setItem('productLink', link);
    navigate('/result');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-emerald-100 via-blue-100 to-pink-100">
      <main className="flex flex-col items-center p-8">
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-200 mt-10">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
            Paste Clothing Product Link
          </h2>

          <ProductLinkForm link={link} setLink={setLink} onSubmit={handleSubmit} />
          <PhotoReminder />
        </div>
      </main>

      <Footer />
    </div>
  );
}
