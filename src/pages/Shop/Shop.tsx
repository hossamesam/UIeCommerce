import BannerShop from '../../componant/Banners/BannerShop/BannerShop'
import Card from '../../componant/Card/Card'
import DataOfCards from '../../Data/DataOfCards.json'
import { RiSoundModuleLine } from 'react-icons/ri'

import Filtering from "../../assets/FilterSliderIcons/system-uicons_filtering.svg";
import Bi_view from "../../assets/FilterSliderIcons/bi_view-list.svg";
import Ci_grid from "../../assets/FilterSliderIcons/ci_grid-big-round.svg";

function Shop() {
    return (
        <div className='w-full h-full '>
            <BannerShop />
            <Filters />
            <div className='grid max-lg:grid-cols-2  max-xl:grid-cols-3 min-xl:grid-cols-4 max-2xl:grid-cols-5 gap-4 max-sm:grid-cols-1 p-8 items-center justify-items-center  min-2xl:mx-36 '>
                {DataOfCards.map((item, index) => (
                    <Card key={index} img={item.img} title={item.title} details={item.details} price={item.price} discount={item.discount} New={item.new} />
                ))
                }
            </div>
        </div>
    )
}
function Filters() {
    return (
        <div className='bg-PlaceboSnow-400 max-md:h-[150px] max-md:flex-col max-md:justify-center max-md:gap-6  h-[100px] w-full flex justify-between items-center px-12 '>
            <ul className='flex gap-4 text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 '>
                <li>
                    <button className='flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100 scale-120' src={Filtering} alt="icon Alert" />
                        <span>Filter</span>
                    </button>
                </li>
                <li>
                    <button className='flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100' src={Bi_view} alt="icon Alert" />
                    </button>
                </li>
                <li>

                    <button className='flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100 scale-120' src={Ci_grid} alt="icon Alert" />
                    </button>
                </li>

                <li className='flex flex-row gap-2 px-4  border-l-2'>
                    <div className="min-w-6 font-poppins-thin">Showing 1–16 of 32 results</div>
                </li>
            </ul>
            <ul className='flex  gap-3 text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 '>
                <li className='flex flex-row justify-center items-center  '>
                    <span className="text-Black-100 text-sm">Show</span>
                    <input
                        type="number"
                        value={16}
                        className="w-12 h-8 border border-KettlemanGrey-100 rounded text-center mx-2 bg-white"
                        readOnly
                    />
                </li>
                <li className='flex flex-row justify-center items-center gap-2  '>
                    <span className="text-Black-100 text-sm">Sort by</span>
                    <select className="w-32 h-8 border border-KettlemanGrey-100 rounded px-2 bg-white text-KettlemanGrey-200">
                        <option>Default</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                    </select>
                </li>

            </ul>
        </div>

    )
}
export default Shop
