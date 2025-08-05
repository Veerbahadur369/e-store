
function Cart() {
  return (
    <div className="h-screen mx-12 pt-20 mb-3 ">
      <div className="border-2 h-full mb-3 rounded-2xl shadow-2xl shadow-gray-400 border-gray-400 ">
        <div className="flex justify-between rounded-t-2xl bg-orange-400">
          <h1 className="flex-1 text-center text-2xl text-white">Product</h1>
          <h1 className="flex-1 text-center text-2xl text-white">Quantity</h1>
          <h1 className="flex-1 text-center text-2xl text-white"> Price</h1>
        </div>
        {/* product randering here */}
      </div>
    </div>
  );
}

export default Cart;
