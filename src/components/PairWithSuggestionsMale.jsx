const maleSuggestionsData = {
  'Basic Tee': {
    text: 'Pair it with Straight Fit jeans and white sneakers for a clean, casual look.',
    image: 'https://cdn.shopify.com/s/files/1/0260/8824/3286/files/image6_345148ca-56b7-413e-9feb-8615d6dace8a.jpg?v=1723548010',
  },
  'Button-up Shirt': {
    text: 'Go with straight-cut jeans and loafers for a semi-formal vibe.',
    image: 'https://showoffff.in/cdn/shop/files/JE-S146_Grey_5_8c9283cb-f91f-42e9-912a-c2b43b3e75c1.jpg?v=1735643354&width=1080',
  },
  'Hoodie': {
    text: 'Match with Wide Leg jeans and sneakers for a cool street look.',
    image: 'https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J30J326748_BEH_alternate3?$b2c_updp_m_mainImage_1920$',
  },
  'Polo Shirt': {
    text: 'Best paired with dark jeans and clean sneakers or loafers for a polished casual style.',
    image: 'https://cdn.shopify.com/s/files/1/0162/2116/files/5_polo_shirt_outfits_for_men_5.jpg?v=1548242411',
  },
  'Denim Jacket': {
    text: 'Layer over a white tee and wear with black jeans for a rugged masculine edge.',
    image: 'https://americantall.com/cdn/shop/products/American-Tall-Men-LJS-Denim-Jacket-MediumBlue-full_1445x.jpg?v=1641829209',
  },
  'Sweatshirt': {
    text: 'Pair with jogger jeans and chunky sneakers for a laid-back weekend outfit.',
    image: 'https://image.uniqlo.com/UQ/ST3/ph/imagesother/Feature-Pages/2023_LocalSweat/Men-1.jpg',
  },
};

export default function PairWithSuggestionsMale({ topStyle = 'Basic Tee' }) {
  const { text, image } = maleSuggestionsData[topStyle] || {
    text: 'You can never go wrong with classic blue jeans and a white tee!',
    image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800',
  };

  return (
    <div className="bg-white/90 border border-blue-200 p-6 rounded-3xl shadow-md max-w-3xl mx-auto mb-10">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">👖 Best Match for "{topStyle}"</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <img
          src={image}
          alt={topStyle}
          className="rounded-xl w-full h-64 object-contain shadow-md border border-gray-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg';
          }}
        />
      </div>
    </div>
  );
}
