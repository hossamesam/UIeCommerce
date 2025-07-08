import { useState } from 'react'
import Image101 from '../../assets/image 101.png'
import Image100 from '../../assets/image 100.png'
import Image106 from '../../assets/image 106.png'
import Card from '../../componant/Card/Card'

import Rectangle1 from '../../assets/slider/Rectangle 24.png'
import Rectangle2 from '../../assets/slider/Rectangle 25.png'
import Rectangle3 from '../../assets/slider/Rectangle 26.png'


import Img1 from '../../assets/shop/image 1.png'
import Img2 from '../../assets/shop/image 2.png'
import Img3 from '../../assets/shop/image 3.png'
import Img4 from '../../assets/shop/image 4.png'
import Img5 from '../../assets/shop/image 5.png'
import Img6 from '../../assets/shop/image 6.png'
import Images from '../../assets/shop/Images.png'

import { VscArrowRight } from 'react-icons/vsc'
import BannerHome from '../../componant/Banners/BannerHome/BannerHome'

const DataCards = [
    {
        title: "Syltherine",
        details: "Stylish cafe chair",
        price: "Rp 2.500.000",
        img: Img1
    },
    {
        title: "Lolito",
        details: "Luxury big sofa",
        price: "Rp 7.000.000",
        img: Img2
    },
    {
        title: "Respira",
        details: "Outdoor bar table and stool",
        price: "Rp 500.000",
        img: Img3,
        discount: "50"
    },
    {
        title: "Grifo",
        details: "Night lamp",
        price: "Rp 1.500.000",
        img: Img4,
        new: true
    },
    {
        title: "Muggo",
        details: "Small mug",
        price: "Rp 150.000",
        img: Img1,
        discount: "30"

    },
    {
        title: "Pingky",
        details: "Cute bed set",
        price: "Rp 7.000.000",
        img: Img6,
        new: true

    }
]

function Home() {
    return (
        <div>
            <BannerHome />

            <div className='flex justify-center items-center flex-col text-black p-8'>
                <h1 className='text-bold text-2xl'>Browse The Range</h1>
                <h1 className='text-bold text-xl font-KettlemanGrey-300 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </div>

            <div className='max-xl:hidden flex gap-4 w-full justify-center'>
                <img className='rounded-3xl w-[381px] h-[480px] ' src={Image101} alt="img1" />
                <img className='rounded-3xl w-[381px] h-[480px] ' src={Image100} alt="img2" />
                <img className='rounded-3xl w-[381px] h-[480px] ' src={Image106} alt="img3" />
            </div>
            <div className='min-xl:hidden flex gap-4  w-full justify-center'>
                <img className='rounded-3xl w-[190.5px]  h-[240px]' src={Image101} alt="img1" />
                <img className='rounded-3xl w-[190.5px] h-[240px]' src={Image100} alt="img2" />
                <img className='rounded-3xl w-[190.5px] h-[240px]' src={Image106} alt="img3" />
            </div>
            <div className='text-center text-2xl font-bold text-black p-8'>
                Our Products
            </div>
            <div className='grid max-lg:grid-cols-2 max-xl:grid-cols-3 min-xl:grid-cols-4   gap-4  max-sm:grid-cols-1 p-8 items-center justify-items-center  min-2xl:mx-36'>
                {DataCards.map((item, index) => (
                    <Card key={index} img={item.img} title={item.title} details={item.details} price={item.price} discount={item.discount} New={item.new} />
                ))
                }
            </div>
            <button className='mx-auto mt-4 mb-12 w-1/4 cursor-pointer  text-InventivePokey-200  border-2 typeHover h-[50px] flex justify-center items-center text-[20px] font-bold'>Show More</button>
            <Carousel />

            <div className='text-center text-xl  text-black p-8'>Share your setup with</div>
            <img className='min-xl:h-[721px] w-full' src={Images} />
        </div>
    )
}
export default Home


export function Carousel() {
    const slideImages = [
        { img: Rectangle1 },
        { img: Rectangle2 },
        { img: Rectangle3 },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const getSlides = () => {
        return [
            slideImages[activeIndex],
            slideImages[(activeIndex + 1) % slideImages.length],
            slideImages[(activeIndex + 2) % slideImages.length],
        ];
    };

    return (
        <div>
            <div className='flex h-[620px] w-full bg-InventivePokey-300 relative overflow-hidden'>
                <div className='h-full w-2/5 p-8 items-center justify-center flex flex-col'>
                    <h1 className='font-poppins-bold text-4xl! text-black py-5'>50+ Beautiful rooms inspiration</h1>
                    <h3 className=' text-black '>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h3>
                    <button className='mx-auto my-4 px-4 cursor-pointer  text-InventivePokey-200  border-2 typeHover h-[50px] flex justify-center items-center text-[20px] font-bold'>Explore More</button>
                </div>
                <div className='w-3/5 h-4/5  self-center  relative overflow-hidden'>
                    {getSlides().map((slide, index) => (
                        <div>
                            <img
                                key={index}
                                className={`
                                transition-all duration-500
                                ${index === 0
                                        ? 'w-2/5 h-full z-10 max-md:w-full'
                                        : 'w-2/5 h-4/5 z-0'
                                    }
                                object-cover
                            `}
                                style={{
                                    position: 'absolute',
                                    left: `${index * 40}%`,
                                    opacity: 1,
                                }}
                                src={slide.img}
                            />
                            {index === 0 && (
                                <div className='p-3 absolute z-50 bottom-8 left-2 w-44 h-[100px] bg-WhiteShadow-100/50'>
                                    <h3 className='flex '>
                                        <span>01</span>
                                        &nbsp;
                                        ـــــ
                                        &nbsp;
                                        <span> Bed Room</span>
                                    </h3>
                                    <h3 className='text-2xl font-bold'>Inner Peace</h3>
                                    <button className='absolute bottom-0 -right-12 flex items-center justify-center size-[48px] bg-InventivePokey-200
                                    cursor-pointer focus:outline-none
                                    '>
                                        <VscArrowRight className='size-[28px] max-xl:size-[14px]' />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-4">
                    {slideImages.map((_, idx) =>
                        idx === activeIndex ? (
                            <button
                                key={idx}
                                className="relative   w-7 h-7 flex items-center justify-center focus:outline-none"
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <span className="absolute  inset-0 rounded-full border-2 border-InventivePokey-200 bg-PlaceboSnow-400"></span>
                                <span className="w-4 h-4  rounded-full bg-InventivePokey-200 z-10"></span>
                            </button>
                        ) : (
                            <button
                                key={idx}
                                className="w-7 cursor-pointer h-7 flex items-center justify-center focus:outline-none"
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <span className="w-4 h-4 rounded-full bg-[#D8D8D8]"></span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}