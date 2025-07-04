import BannerShop from '../../componant/Banners/Banner/Banner'
import Card from '../../componant/Card/Card'
import DataOfCards from '../../Data/DataOfCards.json'

import Filtering from "../../assets/FilterSliderIcons/system-uicons_filtering.svg";
import Bi_view from "../../assets/FilterSliderIcons/bi_view-list.svg";
import Ci_grid from "../../assets/FilterSliderIcons/ci_grid-big-round.svg";


import {useState } from 'react';
import Policy from '../../componant/Policy/Policy';


function Shop() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12); // اجعلها state
    const totalItems = DataOfCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // const countOfcards = useRef<HTMLInputElement>(null);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Number(e.target.value) || 1);
        setItemsPerPage(value);
        setCurrentPage(1); // ارجع لأول صفحة عند تغيير العدد
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = DataOfCards.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='w-full h-full '>
            <BannerShop />
            <Filters
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
            />
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
function Filters({
    
    itemsPerPage,
    onItemsPerPageChange
}: {
    countOfcards?: React.RefObject<HTMLInputElement | null>,
    itemsPerPage: number,
    onItemsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div className='bg-PlaceboSnow-400 max-md:h-[150px] max-md:flex-col max-md:justify-center max-md:gap-6  h-[100px] w-full flex justify-between items-center px-12 '>
            <ul className='flex gap-4 text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 '>
                <li>
                    <button className='cursor-pointer flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100 scale-120' src={Filtering} alt="icon Alert" />
                        <span>Filter</span>
                    </button>
                </li>
                <li>
                    <button className='cursor-pointer flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100' src={Bi_view} alt="icon Alert" />
                    </button>
                </li>
                <li>

                    <button className='cursor-pointer flex flex-row justify-center items-center  gap-2 px-2'>
                        <img className='min-w-6 text-BlackShadow-100 font-poppins  text-[16px] text-Black-100 scale-120' src={Ci_grid} alt="icon Alert" />
                    </button>
                </li>

                <li className='flex flex-row gap-2 px-4  border-l-2'>
                    <div className="min-w-6 font-poppins-thin">Showing 1–{itemsPerPage} of 32 results</div>
                </li>
            </ul>
            <ul className='flex  gap-3 text-BlackShadow-100 font-poppins text-[16px] font-bold text-Black-100 '>
                <li className='flex gap-2 flex-row justify-center items-center  '>
                    <span className="text-Black-100 text-sm">Show</span>
                    {/* <input
                        type="number"
                        value={itemsPerPage}
                        min={1}
                        ref={countOfcards}
                        onChange={onItemsPerPageChange}
                        className="w-12 h-8 border border-KettlemanGrey-100 rounded text-center mx-2 bg-white"
                    /> */}
                    <select
                        className="cursor-pointer w-32 h-8 border border-KettlemanGrey-100 rounded px-2 bg-white text-KettlemanGrey-200"
                        value={itemsPerPage}
                        onChange={e => onItemsPerPageChange({
                            target: { value: e.target.value }
                        } as React.ChangeEvent<HTMLInputElement>)}
                    >
                        <option value={16}>Default 12</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </li>
                <li className='flex flex-row justify-center items-center gap-2  '>
                    <span className=" text-Black-100 text-sm">Sort by</span>
                    <select className="cursor-pointer w-32 h-8 border border-KettlemanGrey-100 rounded px-2 bg-white text-KettlemanGrey-200">
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
