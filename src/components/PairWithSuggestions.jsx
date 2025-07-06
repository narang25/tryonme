const suggestionsData = {
  'White Tank': {
    text: 'Pair it with straight or skinny jeans and brown boots for a crisp, summer-ready look.',
    image: 'https://cdn.lookastic.com/looks/denim-shirt-tank-skinny-jeans-large-31844.jpg',
  },
  'Button-down Shirt': {
    text: 'Tuck it loosely into wide-leg jeans and add platform boots or a crossbody bag.',
    image: 'https://yesmissy.com/wp-content/uploads/2022/09/wide-leg-jeans-outfit-for-fall-with-celine-belt-tote-bag-sandals-SHEIN-yesmissy.jpeg',
  },
  'Graphic Tee': {
    text: 'Match with mom jeans and white sneakers for a relaxed street-style vibe.',
    image: 'https://www.cleomadison.com/wp-content/uploads/2021/08/mom-jeans-graphic-tee-outfit.jpg',
  },
  'Floral Blouse': {
    text: 'Tuck into high-rise straight-leg jeans. Add heels or loafers for a chic finish.',
    image: 'https://www.jeansandateacup.com/wp-content/uploads/2022/08/Sezane-Floral-Blouse-Pants.jpg',
  },
  'Off‑shoulder Top': {
    text: 'Balance your silhouette with wide-leg jeans and espadrilles or wedges.',
    image: 'https://i0.wp.com/i.pinimg.com/736x/f3/80/74/f3807459f76c44eed1878f5fb4dcaffc.jpg?w=1260&ssl=1',
  },
  'Oversized Sweater': {
    text: 'Wear with flared or bootcut jeans and heeled boots for an elevated cozy fit.',
    image: 'https://www.instyle.com/thmb/ni_AGCsI0-Kln0nzGfzEDvE-0ow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bootcut3-59721db7f61c44b9a562bcc901b1496d.jpg',
  },
};

export default function PairWithSuggestions({ topStyle = 'White Tank' }) {
  const { text, image } = suggestionsData[topStyle] || {
    text: 'Try pairing with classic straight-leg jeans and white sneakers!',
    image: 'https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800',
  };

  return (
    <div className="bg-white/90 border border-indigo-200 p-6 rounded-3xl shadow-md max-w-3xl mx-auto mb-10">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">👖 Best Match for "{topStyle}"</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="w-full h-64 bg-gray-50 border border-gray-300 rounded-xl flex items-center justify-center">
          <img
            src={image}
            alt={topStyle}
            className="max-h-60 w-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
