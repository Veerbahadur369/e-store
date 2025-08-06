import { Fragment } from "react";
import { lazy,Suspense } from "react";

import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./App/modules/Auth/Register";
import Login from "./App/modules/Auth/Login";
import Welcomepage from "./App/Page/Welcomepage";
import ImageSlider from "./App/Components/ImageSlider";
// import Product from "./App/Page/Product";
const Product =lazy(()=>import("./App/Page/Product"));
import MainLayout from "./App/modules/Layout/MainLayout";
import About from "./App/Page/About";
import Welcome from "./App/Page/Welcome";
// import ProductDetail from "./App/Page/ProductDetail";
const ProductDetail =lazy(()=>import("./App/Page/ProductDetail"))
import Contact from "./App/Page/Contact";
import ErrorPage from "./App/Page/ErrorPage";
import Profile from "./App/Page/Profile";
import RePieChart from "./App/Components/ReactChart/Profile/RePieChart";
import ReAreaChart from "./App/Components/ReactChart/Profile/ReAreaChart";
// import Cart from "./App/Page/Cart";
const Cart =lazy(()=>import("./App/Page/Cart"))
import Loader from "./App/Components/Loader";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/resister" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainlayout" element={<MainLayout />}>
            <Route index element={<Welcomepage />} />
            <Route path="home" element={<Welcomepage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Suspense fallback={<Loader/>}> <Product /></Suspense>}></Route>
            <Route path="products/details/:id" element={<Suspense fallback={<Loader/>}> <ProductDetail /></Suspense> } />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />

            <Route path="cart" element={<Suspense fallback={<Loader/>}> <Cart/></Suspense>  }/>
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/graph" element={<ReAreaChart/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
