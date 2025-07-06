export default function ProductLinkForm({ link, setLink, onSubmit }) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste your product link here..."
        className="w-full p-3 rounded-xl border border-indigo-300 shadow"
      />

      <button
        onClick={onSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl shadow transition"
      >
        Submit Link 🚀
      </button>
    </div>
  );
}
