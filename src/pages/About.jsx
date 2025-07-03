import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-10">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-indigo-200">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">About Try-On-Me 👚</h1>

        <p className="text-lg text-gray-700 leading-7 mb-6">
          <strong>Try-On-Me</strong> is an AI-powered virtual fashion assistant that allows users to try
          on clothes digitally by uploading their own photo and pasting a product link. It overlays the
          outfit onto the uploaded photo and gives smart fashion suggestions based on color theory and
          styling principles. This tool is especially useful for e-commerce try-ons, outfit visualization,
          and style tips—all from your browser!
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8 mb-4">🛠 Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 leading-7 space-y-2">
          <li><strong>Frontend Framework:</strong> React (with Vite for blazing-fast development)</li>
          <li><strong>Styling:</strong> Tailwind CSS for utility-first responsive design</li>
          <li><strong>Icons:</strong> Lucide React Icons</li>
          <li><strong>Routing:</strong> React Router DOM</li>
          <li><strong>State Persistence:</strong> LocalStorage (for user image and product link)</li>
          <li><strong>Components:</strong> Modular reusable components like `Footer`, `UploadArea`, `PhotoPreviews`, `ProductLinkForm`, etc.</li>
          <li><strong>Image Upload:</strong> Base64 preview with plan to integrate backend processing</li>
          <li><strong>Planned Backend:</strong> Node.js or Flask for image transformation & fashion logic (WIP)</li>
          <li><strong>3D Avatars:</strong> Removed for simplification, but originally explored using OpenMVS/OpenMVG</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mt-10 mb-4">💡 Team</h2>
        <p className="text-gray-700 text-md mb-6">
          This project was lovingly crafted by <strong>Vanshika Taya</strong> and <strong>Nikhil Narang</strong> for the Walmart Sparkathon 2025. ❤️
        </p>

        <div className="text-center text-sm text-gray-600">
          Made with 💖 by Vanshika & Nikhil — 2025
        </div>
      </div>

      <Footer />
    </div>
  );
}
