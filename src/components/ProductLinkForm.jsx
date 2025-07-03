export default function ProductLinkForm({ link, setLink, onSubmit }) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="url"
        placeholder="Paste product link here..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <button
        onClick={onSubmit}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Try Outfit
      </button>
    </div>
  );
}
