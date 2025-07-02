import React from 'react'

function Footer() {
    return (
        <footer className='h-[505px] text-Black-100 bg-SilverSmoke-100    p-10'>
            <div className='grid grid-cols-4 '>
                <div className='flex flex-col  gap-5'>
                    <h3 className="text-bold text-2xl font-poppins">
                        Funiro.
                    </h3>
                    <p className='text-SilverSmoke-700'>
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>
                <div className='flex flex-col text-bold text-xl font-poppins  gap-5'>
                    <h3 className='text-SilverSmoke-700 '> Links</h3>
                    <a href="/#">Home</a>
                    <a href="/#">Shop</a>
                    <a href="/#">About</a>
                    <a href="/#">Contact</a>
                </div>
                <div className='flex flex-col text-bold text-xl font-poppins  gap-5'>
                    <h3 className='text-SilverSmoke-700 '>Help</h3>
                    <a className='' href="/#">Payment Options</a>
                    <a href="/#">Returns</a>
                    <a href="/#">Privacy Policies</a>
                </div>
                <div className='flex flex-col  gap-5'>
                    <h3 className='text-SilverSmoke-700'>Newsletter</h3>
                    <form className='flex  gap-5 max-md:flex-col'>
                        <input className='placeholder:text-[12px] w-36 border-b-2 ' type="text" placeholder='Enter Your Email Address' />
                        <button className='text-[12px] border-b-2 '>SUBSCRIBE</button>
                    </form>

                </div>
            </div>
        </footer>
    )
}

export default Footer
