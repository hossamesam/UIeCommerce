import Logos from "../../assets/Logo/Meubel_House_Logos-05.svg";
import Alert from "../../assets/HeaderIcons/mdi_account-alert-outline.svg";
import Search from "../../assets/HeaderIcons/akar-icons_search.svg";
import Heart from "../../assets/HeaderIcons/akar-icons_heart.svg";
import ShoppingCart from "../../assets/HeaderIcons/ant-design_shopping-cart-outlined.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='h-[100px] flex items-center justify-center gap-2 bg-WhiteShadow-100 '>
      <ul className='grid gap-16 grid-cols-[150px_1fr_auto] max-md:grid-cols-[150px_1fr] max-md:p-2 w-full justify-between  px-16'>
        <li className='flex items-center gap-2 text-BlackShadow-100 font-montserrat-bold text-[20px]'>
          <img src={Logos} alt="Meubel House Logo" />
          <div className='font-montserrat-bold '>Furniro</div>
        </li>
        <HeaderRouts />
        <HeaderIcons />
        <LeftIcons />
      </ul>

    </div>
  )
}
function HeaderRouts() {
  return <li className='flex min-sm:gap-10 w-full justify-center max-md:justify-end items-center '>
    <NavLink
      to="/"
      end
      className="relative text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 px-2"
    >
      {({ isActive }) => (
        <>
          Home
          {isActive && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
    <NavLink
      to="/shop"
      className="relative text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 px-2"
    >
      {({ isActive }) => (
        <>
          Shop
          {isActive && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
    <NavLink
      to="/about"
      className="relative text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 px-2"
    >
      {({ isActive }) => (
        <>
          About
          {isActive && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
    <NavLink
      to="/contact"
      className="relative text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 px-2"
    >
      {({ isActive }) => (
        <>
          Contact
          {isActive && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
  </li>
}
function HeaderIcons() {
  return <li className=' flex w-[150px] min-xl:w-[250px] gap-4 justify-between max-md:hidden '>
    <button >
      <img className='text-BlackShadow-100 font-poppins  text-[16px] text-Black-100' src={Alert} alt="icon Alert" />
    </button>
    <button className='text-BlackShadow-100 font-poppins text-[16px] text-Black-100'>
      <img src={Search} alt="icon Search" />
    </button>
    <button className='text-BlackShadow-100 font-poppins text-[16px] text-Black-100'>
      <img src={Heart} alt="icon Heart" />
    </button>
    <button className='text-BlackShadow-100 font-poppins text-[16px] text-Black-100'>
      <img src={ShoppingCart} alt="icon ShoppingCart" />
    </button>
  </li>
}
function LeftIcons() {
  return (

    <li className='fixed  rounded-full  flex flex-col bg-zinc-200 left-4 top-1/3 z-50  gap-6 justify-between min-md:hidden '>
      <button >
        <img className='hover:bg-InventivePokey-300 p-1 cursor-pointer rounded-full w-full scale-90' src={Alert} alt="icon Alert" />
      </button>
      <button className='text-BlackShadow-100 p-1 font-poppins text-[12px] text-Black-100 '>
        <img className='hover:bg-InventivePokey-300  p-1  cursor-pointer rounded-full w-full scale-115' src={Search} alt="icon Search" />
      </button>
      <button className='text-BlackShadow-100  font-poppins text-[12px] text-Black-100 '>
        <img className='hover:bg-InventivePokey-300 p-1 cursor-pointer rounded-full w-full scale-90' src={Heart} alt="icon Heart" />
      </button>
      <button className='text-BlackShadow-100  font-poppins text-[12px] text-Black-100'>
        <img className='hover:bg-InventivePokey-300 p-1 cursor-pointer rounded-full w-full scale-90' src={ShoppingCart} alt="icon ShoppingCart" />
      </button>
    </li>

  )
}

export default Header
