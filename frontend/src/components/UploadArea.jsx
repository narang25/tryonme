import { CloudUpload } from 'lucide-react';

export default function UploadArea({ setPhoto, fileInputRef }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith('image/')) setPhoto(file);
  };

  return (
    <div
      onClick={() => fileInputRef.current.click()}
      className="cursor-pointer border-dashed border-4 border-blue-400 rounded-xl p-10 bg-white bg-opacity-70 hover:bg-opacity-90 transition-all text-center"
    >
      <CloudUpload size={48} className="mx-auto text-blue-600" />
      <p className="text-xl font-medium text-blue-800 mt-2">Click or drag & drop your photo</p>
      <p className="text-sm text-gray-500 mt-1">(Front-facing image, JPG/PNG)</p>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
}
