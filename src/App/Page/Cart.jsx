import { useState } from "react";
function Cart() {
  const localaData = JSON.parse(localStorage.getItem("cart"));
  const [cartData, setCartData] = useState(localaData);
  console.log(cartData)
 
  return (
    <div className="h-fit mx-12 pt-20 mb-3 ">
      <div className="border-2 h-full mb-3 rounded-2xl shadow-2xl shadow-gray-400 border-gray-400 ">
        <div className="flex justify-between rounded-t-2xl bg-orange-400">
          <h1 className="flex-1 text-center text-2xl text-white">Product</h1>
          <h1 className="flex-1 text-center text-2xl text-white">Quantity</h1>
          <h1 className="flex-1 text-center text-2xl text-white"> Price</h1>
          <h1 className="flex-1 text-center text-2xl text-white"> Buy</h1>
          <h1 className="flex-1 text-center text-2xl text-white"></h1>
        </div>
        {/* product randering here */}
        <div className="pl-10 pb-3">
          {cartData.length==0 ? (
            <h1 className="flex-1 h-[30vh] pt-14 text-center text-2xl">
              No product found
            </h1>
          ) : (
            cartData?.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1 text-center text-2xl">
                  <img
                    src={item.thumbnail}
                    alt={item.id}
                    className="w-20 h-20 text-left"
                  />
                  <p className="text-sm text-left w-32 text-wrap">
                    {" "}
                    {item.title}
                  </p>
                </div>
                <div className="flex-1 text-left text-2xl">
                  {/* product quantity start */}
                  <input
                    type="number"
                    placeholder="1"
                    className="w-16  rounded-md outline-none border-2 bg-gray-500 text-white pl-1 text-center  "
                  />
                  {/* product quantity end */}
                </div>
                <div className="flex-1 text-center  text-2xl">{item.price}</div>
                <div className="flex-1 text-center">
                  <button className="w-fit px-3 py-1 rounded-md mr-4 text-left text-2xl text-white  bg-orange-400 hover:bg-amber-500">
                  Buy
                </button>
                </div>
                <div className="flex-1 text-center">
                  <button
                   className="bg-red-600 w-fit px-3 py-1 rounded-md mr-4 text-left text-2xl hover:bg-red-700 hover:shadow-2xl text-white"
                    onClick={(e) => {
                    const filteredData =  localaData?.filter((remove) => remove.id !== item.id);
                    setCartData(filteredData);
                    localStorage.setItem("cart", JSON.stringify(filteredData));
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

         
          {/*  */}
        </div>
        
      </div>

       
    </div>
  );
}

export default Cart;
