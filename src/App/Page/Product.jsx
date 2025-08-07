import React, { useEffect, useState } from "react";
import { FaFilter, FaStar } from "react-icons/fa";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaX } from "react-icons/fa6";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [brands, setBrands] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]);
  const [showFilter,setShowFilter] =useState(true);
  const handlePageClick = (data) => {
    setSkip(data.selected * 24);
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=24&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setOriginalProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, [skip]);

  const categories = [...new Set(products.map((product) => product.category))];
  const allBrands =[...new Set(products.map((product) => product.brand))];
 
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrands(event.target.value);
  }
  useEffect(() => {
    if (category === "") {
      setProducts(originalProducts);
      setMinPrice(0);
      setMaxPrice(50000);
      setBrands("");
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }


  }, [category]);

  useEffect(() => {
    if (brands === "") {
      setProducts(originalProducts);
      setMinPrice(0);
      setCategory("")
      setMaxPrice(50000);
    } else {
      const filteredProducts = products.filter(
        (product) => product.brand === brands
      );
      setProducts(filteredProducts);
    }
  }, [brands]);

  useEffect(() => {
    let filtered = [...originalProducts];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if(brands){
      filtered = filtered.filter((product) => product.brand === brands);
    }
    if(minPrice){
      filtered = filtered.filter((product) => product.price >= minPrice);
    }
    if(maxPrice){
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    setProducts(filtered);
  }, [minPrice,maxPrice ,category, originalProducts]);

  return (
    <div className="pt-16 select-none" onDoubleClick={()=>setShowFilter(!showFilter)}>
      <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 py-10 px-4 md:px-12 bg-clip-text">
        <h1 className="text-6xl text-center relative z-1 w-2xl bg-gradient-to-r from-purple-400 to-blue-600  font-bold  mb-10  font-[cursive] text-transparent bg-clip-text">
          Buy more get more
        </h1>

        {/* all filters are start */}
        <div className="flex justify-start">{ showFilter? <div onClick={()=>setShowFilter(!showFilter)} className="text-3xl cursor-pointer text-left font-bold border-2 border-[#2e2c2c] h-12 w-32 pt-2 rounded-2xl hover:border-blue-500 hover:text-blue-500 text-[#2d2e31]  mb-10 flex justify-center "><h1>Filters </h1><FaFilter  className="text-3xl w-fit  text-right   font-bold  mb-10  "/></div>: <FaX onClick={()=>setShowFilter(!showFilter)} className="text-3xl text-right   font-bold  mb-10  "/>}</div>
        
        {!showFilter && <div className="flex justify-center flex-col absolute z-23 bg-gradient-to-r from-purple-200 to-blue-500 py-10 px-4 md:px-12 rounded-3xl left-3 gap-12 items-center mb-6">
          <div className="mb-4">
            <select
              value={category}
              onChange={handleCategoryChange}
              name="category"
              id="category"
              className="block w-48 bg-[#5b5656]  text-white py-2 px-4 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={""}> All categories</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* all brands option start */}
           <div className="mb-4">
            <select
              value={brands}
              onChange={handleBrandChange}
              name="category"
              id="category"
              className="block w-48 bg-[#5b5656]  text-white py-2 px-4 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={""}> All Brands</option>
              {allBrands?.map((brand,i) => (
                <option key={i} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          {/* all brands option end */}

          <div>
            <input
              className="w-48 accent-purple-400 focus:accent-green-600"
              type="range"
              min={1}
              max={60}
              value={minPrice}
              onInput={(e) => setMinPrice(e.target.value)}
            />
            <h1>Min price :${minPrice}</h1>
          </div>
          <div>
            <input type="range" min={100} max={50000}
               className="w-48 accent-purple-400 focus:accent-green-600"
            value={maxPrice}
            onInput={(e) => setMaxPrice(e.target.value)}
            />
            <h1>Max price :{maxPrice}</h1>
          </div>
        </div>}
        {/* all filters are end */}

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
                    view more details
                  </button>
                </div>
              </Link>{" "}
            </div>
          ))}
        </div>
      </div>
      {/* i am going to use react-paginate Using pagination to load more products */}
      <div>
        {showFilter && (
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
         )}
      </div>
    </div>
  );
};

export default Product;
