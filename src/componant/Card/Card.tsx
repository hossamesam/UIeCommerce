import { AiFillLike } from 'react-icons/ai'
import { FaShareAlt } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function Card({ img, title, details, price, discount, New }: { img: string, title: string, details: string, price: string, discount?: string, New?: boolean }) {
  const navigate = useNavigate();
  return (
    <div className='w-[285px] h-[446px] relative'>
      <div className="group">
        <div className="absolute w-full h-full  hover:cursor-pointer">
        </div>
        <div className='hide hidden group-hover:flex absolute  flex-col justify-center items-center w-full h-full z-50 bg-zinc-100/30 text-Black-100'>
          <button
            onClick={() => { navigate('/shop/Product')}}
            className='w-1/2 cursor-pointer  text-InventivePokey-200 bg-Black-100 typeHover h-[50px] flex justify-center items-center text-[20px] font-bold'>Add to cart</button>
          <ul className='flex gap-3 justify-between items-center text-[18px] font-bold p-4 '>
            <li >
              <button className='flex cursor-pointer typeHover justify-center items-center gap-1'>
                <FaShareAlt /> Share
              </button>
            </li>
            <li >
              <button className='flex cursor-pointer typeHover justify-center items-center gap-1'>
                <FaCodeCompare /> Compare
              </button>
            </li>
            <li >
              <button className='flex cursor-pointer typeHover justify-center items-center gap-1'>
                <AiFillLike /> Like
              </button>
            </li>
          </ul>
        </div>
      </div>
      <img src={img} alt="Product" className='w-full h-[300px] bg-zinc-300'></img>
      <div className='w-full h-[145px] bg-zinc-900 bottom-0 '>
        <div className='flex flex-col justify-between  p-4 '>
          <h3 className='text-white font-bold text-[20px]'>{title}</h3>
          <p className='text-white font-normal text-[16px] '>{details}</p>
        </div>
        <p className='text-white font-bold text-[20px]  px-4'>{price}</p>
      </div>
      {discount && <div className='absolute top-2 right-2 flex justify-center items-center size-[48px] rounded-full bg-red-500'>
          -{discount}%
        </div>
      }
      {New && <div className='absolute top-2 right-2 flex justify-center items-center size-[48px] rounded-full bg-green-500'>
        New
      </div>
      }

    </div>
  )
}

export default Card
