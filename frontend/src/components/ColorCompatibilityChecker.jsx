export default function ColorCompatibilityChecker({ productColor = '', userTone = 'Neutral' }) {
  const undertoneColors = {
    Cool: ['Emerald green', 'Sapphire blue', 'Amethyst purple', 'Lavender', 'Baby blue', 'Gray', 'Navy'],
    Warm: ['Warm browns', 'Terracotta', 'Amber', 'Coral', 'Burnt orange', 'Camel', 'Mustard yellow'],
    Neutral: ['Black', 'White', 'Gray', 'Dusty rose', 'Blush pink', 'Olive green'],
  };

  const match = undertoneColors[userTone]?.some(
    (color) => color.toLowerCase() === productColor.toLowerCase()
  );

  const getSuggestion = () => {
    const list = undertoneColors[userTone];
    return list && list.length > 0 ? list[0] : 'a better-suited color';
  };

  return (
    <div className="mt-4 p-4 rounded-lg shadow bg-white/90 border-l-4 border-indigo-400 text-sm text-gray-800">
      {match ? (
        <p>
          ✅ <strong>{productColor}</strong> suits your <strong>{userTone}</strong> undertone!  However, avoid overly soft tones like beige or pastel yellow, as they may underplay the boldness of your look.
        </p>
      ) : (
        <p>
           Try something like <strong>{getSuggestion()}</strong> instead for a better look.
        </p>
      )}
    </div>
  );
}
