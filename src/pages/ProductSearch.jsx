import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import TopBanner from "../components/TopBanner";

const ProductSearch = ({ productsList = [] }) => {
  const products = [
    {
      id: 1,
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 65,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 65,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      title: "Small BookSelf",
      price: 360,
      oldPrice: null,
      rating: 5,
      reviews: 65,
      image: "https://via.placeholder.com/200",
    },
  ];

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  return (
    <>
      <TopBanner></TopBanner>
      <Header></Header>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Search Results for : {query}
          </h2>
          <p className="text-sm text-gray-500">{products.length} items found</p>
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products found
          </div>
        ) : (
          <div
            className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductSearch;
