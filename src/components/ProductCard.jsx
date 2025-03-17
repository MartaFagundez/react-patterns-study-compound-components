import Card from "./Card";

function ProductCard({ name, imageUrl, description, price }) {
  return (
    <Card className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <Card.Body className="p-5">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </Card.Body>
      <Card.Footer className="p-5 border-t flex justify-between items-center">
        <p className="text-lg font-bold text-gray-900">${price}</p>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Add to Cart
        </button>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;