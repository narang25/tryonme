export default function SuggestionCard({ icon, title, text }) {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg text-indigo-600 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}
