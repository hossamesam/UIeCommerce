import Logos from "../../assets/Meubel_House_Logos-05.png";
import Alert from "../../assets/mdi_account-alert-outline.svg";
import Search from "../../assets/akar-icons_search.svg";
import Heart from "../../assets/akar-icons_heart.svg";
import ShoppingCart from "../../assets/ant-design_shopping-cart-outlined.svg";

function Header() {
  return (
    <div className='h-[100px] flex items-center justify-center gap-2 bg-WhiteShadow-100 '>
      <ul className='grid gap-16 grid-cols-[150px_1fr_auto] max-md:grid-cols-[150px_1fr] max-md:p-2 w-full justify-between  px-16'>

        <li className='flex items-center gap-2 text-BlackShadow-100 font-montserrat-bold text-[20px]'>
          <img src={Logos} alt="Meubel House Logo" />
          <div className='font-montserrat-bold '>Furniro</div>
        </li>

        <li className='flex gap-10 w-full justify-center max-md:justify-end items-center '>
          <button className='text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100'>Home</button>
          <button className='text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100'>Shop</button>
          <button className='text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100'>About</button>
          <button className='text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100'>Contact</button>
        </li>

        <li className=' flex w-[150px] gap-4 justify-between max-md:hidden '>
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
      </ul>

    </div>
  )
}

export default Header
