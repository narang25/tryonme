// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-500 mt-10">
      Made with ❤️ by <span className="font-semibold text-indigo-600">Vanshika Taya</span> & <span className="font-semibold text-pink-600">Nikhil Narang</span> © {new Date().getFullYear()}
    </footer>
  );
}
