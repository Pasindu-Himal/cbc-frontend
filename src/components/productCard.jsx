import { Link } from "react-router-dom";

export default function ProductCard({product}){

    // props
    // const product = props.product

  return (
    <Link to={"/overview/"+product.productId} className="w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="h-[200px] bg-gray-100 flex items-center justify-center">
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.name}
          className="object-contain h-full p-2"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between h-[200px]">
        {/* Header: Name and Availability */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              product.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {product.isAvailable ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Description (just trimmed with max height) */}
        <div className="text-sm text-gray-600 mb-3 overflow-hidden max-h-[40px]">
          {product.description.length > 100
            ? product.description.substring(0, 97) + "..."
            : product.description}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          {product.labelledPrice !== product.price && (
            <p className="text-sm line-through text-gray-400">
              ${product.labelledPrice.toFixed(2)}
            </p>
          )}
          <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
        </div>

        {/* Action Button */}
        <button
          disabled={!product.isAvailable}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-all ${
            product.isAvailable
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.isAvailable ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </Link>
  );
}
