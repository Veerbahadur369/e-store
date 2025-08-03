import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [originalProducts, setOriginalProducts] = useState([]);
  const handlePageClick = (data) => {
    setSkip(data.selected * 24);
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=24&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setOriginalProducts(data.products);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  }, [skip]);

  const categories = [...new Set(products.map((product) => product.category))];
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
  useEffect(() => {
    if (category === "") {
      setProducts(originalProducts);
      setMinPrice(0);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );

      setProducts(filteredProducts);
    }
  }, [category]);

  useEffect(() => {
    let filtered = [...originalProducts];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    filtered = filtered.filter((product) => product.price >= minPrice);

    setProducts(filtered);
  }, [minPrice, category, originalProducts]);

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 py-10 px-4 md:px-12 bg-clip-text">
        <h1 className="text-6xl text-center w-2xl bg-gradient-to-r from-purple-400 to-blue-600  font-bold  mb-10  font-[cursive] text-transparent bg-clip-text">
          Product Filters
        </h1>
        <div className="flex justify-center gap-12 items-center mb-6">
          <div className="mb-4">
            <select
              value={category}
              onChange={handleCategoryChange}
              name="category"
              id="category"
              className="block text-gray-700 py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={""}> All categories</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="range"
              min={1}
              max={60}
              value={minPrice}
              onInput={(e) => setMinPrice(e.target.value)}
            />
            <h1>Min price :${minPrice}</h1>
          </div>
          <div>
            <input type="range" min={100} max={10000} />
            <h1>Min price :</h1>
          </div>
        </div>

        {loader && <Loader />}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to={`details/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-52 "
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-green-600">
                      ${product.price}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500">
                      <FaStar />
                      {product.rating}
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition">
                    Add to Cart
                  </button>
                </div>
              </Link>{" "}
            </div>
          ))}
        </div>
      </div>
      {/* i am going to use react-paginate Using pagination to load more products */}
      <div>
        {/* {category === "" && ( */}
        <ReactPaginate
          className="flex gap-2 mt-6 mb-6 select-none hover:text-blue-600  justify-center cursor-pointer"
          previousLabel={"<--"}
          nextLabel={"-->"}
          breakLabel={"..."}
          pageCount={9}
          marginPagesDisplayed={4}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="inline-flex -space-x-px rounded-md shadow"
          pageClassName="px-4 rounded-lg py-2 text-md font-medium text-gray-900 ring-1  ring-inset ring-gray-400 hover:text-blue-500 hover:bg-gray-400"
          activeClassName="z-10 bg-blue-600 rounded-lg text-white"
          previousClassName="px-2 py-2 rounded-lg text-black-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          nextClassName="px-2 py-2 text-black-400 rounded-lg ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          disabledClassName="opacity-50"
        />
        {/* )} */}
      </div>
    </div>
  );
};

export default Product;
