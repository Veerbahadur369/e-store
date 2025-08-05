import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaTruck,
  FaUndoAlt,
  FaClock,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { set } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [store, setStore] = useState(()=>{
    const storedData = localStorage.getItem("cart");
    return storedData ? JSON.parse(storedData) : [];
  });
  const arrayRate = [1, 2, 3, 4, 5];
  const { id } = useParams();
      const cartData =[]

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return (
      <div className="text-center mt-20 text-lg">
        <Loader />
      </div>
    );
  }

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const createdAt = new Date(product.meta?.createdAt).toLocaleDateString();
  const updatedAt = new Date(product.meta?.updatedAt).toLocaleDateString();

  
   const handleAddToCart = ()=>{
    if(store.some((item) => item.id === product.id) ){
      toast.error("Product already added to cart",{theme:'colored',autoClose:1000}) 
      return;
    }
       const updatedProduct = [...store, product];
         setStore(updatedProduct);
      localStorage.setItem("cart", JSON.stringify(updatedProduct)) 
      toast.success("Product added to cart",{theme:'colored',autoClose:1000})
    
     
   }


   console.log(store)
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 p-8 relative">
          <Link
            className="absolute top-4 left-4 z-20"
            to={"/mainlayout/products"}
          >
            <FaArrowAltCircleLeft className="text-3xl text-gray-600 hover:text-gray-800 transition cursor-pointer " />
          </Link>
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => {
                    setProduct({ ...product, thumbnail: img });
                  }}
                  className="w-20 h-20 rounded-lg object-cover border hover:border-blue-500 transition"
                />
              ))}
              <img src={product.meta.qrCode} alt="" className="w-20 h-20" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-blue-600 font-medium">{product.brand}</p>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {arrayRate.map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-600 ml-2">
                {product.rating.toFixed(1)} / 5.0
              </span>
            </div>

            {/* Pricing */}
            <div className="text-2xl font-bold text-green-600">
              ${product.price}
              <del className="ml-3 text-sm text-gray-400 ">
                ${originalPrice}
              </del>
              <span className="ml-3 text-sm text-red-600">
                -{product.discountPercentage}%
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-green-700 text-sm font-semibold">
                    In Stock: {product.stock} items
                  </span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-500" />
                  <span className="text-red-700 text-sm font-semibold">
                    Out of Stock
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              {product.description}
            </p>

            {/* Meta Information */}
            {product.meta && (
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-1 text-gray-700">
                  Use Before
                </h4>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span>Created at: {createdAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-green-500" />
                    <span>Updated at: {updatedAt}</span>
                  </div>
                  <div className="mt-1">
                    <span className="font-medium text-gray-700">Reviews:</span>
                    <summary>
                      <details className="flex flex-wrap gap-2 mt-1">
                        {product.reviews?.map((keyword, idx) => (
                          <div>
                            <div
                              key={idx}
                              className="bg-gray-100 p-4 rounded-md shadow-sm"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-800">
                                  {keyword.reviewerName}
                                </span>
                                <span className="text-yellow-600">
                                  Rating: {keyword.rating}⭐
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mt-1">
                                {keyword.comment}
                              </p>
                              <p className="text-xs text-gray-500 mt-1 text-right">
                                {Date(keyword.date)
                                  .toLocaleString()
                                  .slice(3, 24)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </details>
                    </summary>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
            <ToastContainer />
        {/* Shipping & Return Info */}
        <div className="border-t p-8 bg-blue-50 grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <FaTruck className="text-3xl text-blue-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Free Shipping
              </h4>
              <p className="text-sm text-gray-600">
                3–7 business days across India.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUndoAlt className="text-3xl text-blue-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Easy Returns
              </h4>
              <p className="text-sm text-gray-600">
                Return within 10 days, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
