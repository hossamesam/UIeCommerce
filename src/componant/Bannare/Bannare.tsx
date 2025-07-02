import React from 'react'
import MaskGroup from '../../assets/scandinavian-interior-mockup-wall-decal-background 1 (2).png'

function Bannare() {
    return (
        <div className='w-full max-h-[813px] relative'>
            <img className='min-w-full max-h-[813px]' src={MaskGroup} alt="MaskGroup Bannare" />
            <div className='max-md:hidden p-6  w-xl h-2xl bg-InventivePokey-300 absolute right-4 top-8'>
                <div className='text-zinc-950! text-[14px] line  ont-poppins-medium font-bold'>
                    New Arrival
                </div>
                <div className='text-InventivePokey-200! font-poppins-bold '>
                    Discover Our New Collection
                </div>
                <div className='text-zinc-950'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </div>
                <button className='cursor-pointer  typeHover bg-InventivePokey-200 w-32 p-4  my-6 text-WhiteShadow-100'>
                    Buy Now
                </button>
            </div>
            <div className='min-md:hidden p-2 h-sm w-sm bg-InventivePokey-300 absolute right-2 top-12'>
                <div className='text-zinc-950! text-[14px] line  ont-poppins-medium font-bold'>
                    New Arrival
                </div>
                <div className='text-InventivePokey-200! font-poppins-bold text-2xl! '>
                    Discover Our New Collection
                </div>
                <div className='text-zinc-950 text-sm! '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </div>
                <button className='cursor-pointer  typeHover bg-InventivePokey-200 w-32 p-4  my-6 text-WhiteShadow-100'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Bannare
