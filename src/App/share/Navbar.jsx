import { useState ,useEffect} from 'react';
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './navbar.css'
import logo from '../../assets/logo.png'
import { set } from 'react-hook-form';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [storedLoginStatus, setStoredLoginStatus] = useState(localStorage.getItem('isLoggedIn'));
  const [cartLength, setCartLength] = useState(0);
  const logout=() => setStoredLoginStatus(false);
  const navigate=useNavigate();




  useEffect(() => {
    logout
  } ,[storedLoginStatus])
    const data = JSON.parse(localStorage.getItem("cart"));
   
   useEffect(() => {
     if (data) {
       setCartLength(data?.length);
     }
   },[data])
  return (
    <div className=''>
  <nav className='fixed w-full z-29'>
    <div className="h-16 flex text-xl justify-between items-center px-4 py-2 bg-[#211f1f] text-white">
      <div className="logo">
        <Link to="/mainlayout/home"><img src={logo}alt="" className='h-16'/></Link>
      </div>
      <div className={`hidden sm:block `}>
        <ul className=" flex space-x-4 relative">
          <li><NavLink to="home">Home</NavLink></li>
          <li><NavLink to='products' >Products</NavLink></li>
          <li><NavLink to='about' >About</NavLink></li>
          <li><NavLink to='contact'>Contact</NavLink></li>
           <li>{!storedLoginStatus?<FaSignInAlt onClick={()=>{navigate('/login')}}  className='hover:text-orange-500 absolute top-2 cursor-pointer'/>:<FaSignOutAlt onClick={logout}  className='hover:text-orange-500 absolute top-2 cursor-pointer' />}   </li>
        </ul>
      </div>
      <div className="cart-icon flex items-center">
        <NavLink to="cart" className={'relative'}><FaShoppingCart className='hover:text-orange-500 ' /> {data==0? "": <p className='absolute top-[-20px] right-[-15px] bg-red-600 text-sm rounded-full w-5 h-5 p-1 flex text-white justify-center items-center'>{cartLength}</p>} </NavLink>
        
      { storedLoginStatus ? <NavLink to="profile" className="ml-4 h-10 w-10 bg-gray-400 text-center text-2xl text-white px-2 rounded-full"><h1>{storedLoginStatus}</h1></NavLink> : <NavLink to="/login" className="ml-4 text-white">Login</NavLink> }
      </div>
      <button className="sm:hidden menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaX  className='hover:text-orange-500' /> : <FiMenu className='hover:text-orange-500' />}
      </button>
    </div>

  </nav>
  {isOpen && (
    <div className="mobile-menu sm:hidden mt-1.5 w-fit rounded-2xl transition-all absolute z-30 right-3 duration-1000 delay-1000 bg-gray-800 text-white p-4">
      <ul className="space-y-2">
        <li><NavLink to="/mainlayout/home">Home</NavLink></li>
        <li><NavLink to="/mainlayout/products">Products</NavLink></li>
        <li><NavLink to="/mainlayout/about">About</NavLink></li>
        <li><NavLink to="/mainlayout/contact">Contact</NavLink></li>
        <li onClick={logout}> <FaSignOutAlt/></li>
      </ul>     
    </div>
  )}
  </div>
  );
};

export default Navbar;
