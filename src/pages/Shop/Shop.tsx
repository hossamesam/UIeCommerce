import BannerShop from '../../componant/Banners/BannerShop/BannerShop'
import Card from '../../componant/Card/Card'
import DataOfCards from '../../Data/DataOfCards.json'

import Filtering from "../../assets/FilterSliderIcons/system-uicons_filtering.svg";
import Bi_view from "../../assets/FilterSliderIcons/bi_view-list.svg";
import Ci_grid from "../../assets/FilterSliderIcons/ci_grid-big-round.svg";

import Group from "../../assets/policy/Group.svg";
import trophy from "../../assets/policy/trophy 1.svg";
import Shipping from "../../assets/policy/Shipping.svg";
import Support from "../../assets/policy/Support.svg";
import { useRef, useState } from 'react';

function Shop() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalItems = DataOfCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const countOfcards = useRef<HTMLInputElement>(null);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = DataOfCards.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='w-full h-full '>
            <BannerShop />
            <Filters  countOfcards={countOfcards}/>
            <div className='grid max-lg:grid-cols-2  max-xl:grid-cols-3 min-xl:grid-cols-4 max-2xl:grid-cols-5 gap-4 max-sm:grid-cols-1 p-8 items-center justify-items-center  min-2xl:mx-36 '>
                {currentItems.map((item, index) => (
                    <Card
                        key={index}
                        img={item.img}
                        title={item.title}
                        details={item.details}
                        price={item.price}
                        discount={item.discount}
                        New={item.new}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <Policy />

        </div>
    )
}
function Filters({ countOfcards }: { countOfcards: React.RefObject<HTMLInputElement> }) {

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
                        defaultValue={12}
                        ref={countOfcards}
                        className="w-12 h-8 border border-KettlemanGrey-100 rounded text-center mx-2 bg-white"

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
function Policy() {
    return (
        <div className="bg-PlaceboSnow-400 w-full flex  justify-center py-4 border border-dashed border-KettlemanGrey-100">
            <div className="grid grid-cols-4 gap-12 px-2 max-md:grid-cols-2 max-md:gap-6">
                <div className="flex items-center gap-3">
                    <img src={trophy} alt="High Quality" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">High Quality</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">crafted from top materials</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Group} alt="Warranty Protection" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">Warranty Protection</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Over 2 years</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Shipping} alt="Free Shipping" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">Free Shipping</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Order over 150 $</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={Support} alt="24 / 7 Support" className="w-8 h-8" />
                    <div>
                        <div className="font-bold text-Black-100 text-[16px]">24 / 7 Support</div>
                        <div className="text-KettlemanGrey-200 text-[13px]">Dedicated support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <div className="flex gap-4 justify-center items-center my-6">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-16 h-12 rounded-lg font-poppins text-lg transition-all
                        ${currentPage === page
                            ? 'bg-[#B88E2F] text-white'
                            : 'bg-PlaceboSnow-400 text-black hover:bg-[#e7dfcf]'}
                    `}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-16 h-12 rounded-lg font-poppins text-lg transition-all
                    ${currentPage === totalPages
                        ? 'bg-PlaceboSnow-400 text-KettlemanGrey-200 cursor-not-allowed'
                        : 'bg-PlaceboSnow-400 text-black hover:bg-[#e7dfcf]'}
                `}
            >
                Next
            </button>
        </div>
    );
}
export default Shop
