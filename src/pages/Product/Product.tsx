import { useState } from 'react';
import { FaStar, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Card from '../../componant/Card/Card';
import DataCards from '../../Data/DataOfCards';


const productImages = [
    '/src/assets/shop/img10.jpg',
    '/src/assets/shop/img11.jpg',
    '/src/assets/shop/img12.jpg',
    '/src/assets/shop/img13.jpg',
];

function Product() {
    const [mainImg, setMainImg] = useState(productImages[0]);
    const [size, setSize] = useState('L');
    const [color, setColor] = useState('gold');
    const [qty, setQty] = useState(1);

    return (
        <>
            <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12">
                {/* Images */}
                <div className="flex gap-6 flex-1">
                    <div className="flex flex-col gap-4">
                        {productImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumb-${idx}`}
                                className={`w-16 h-16 object-cover rounded cursor-pointer border ${mainImg === img ? 'border-[#B88E2F]' : 'border-transparent'}`}
                                onClick={() => setMainImg(img)}
                            />
                        ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={mainImg} alt="main" className="w-full h-full object-cover max-w-md rounded-xl bg-PlaceboSnow-400" />
                    </div>
                </div>
                {/* Info */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">Asgaard sofa</h1>
                    <div className="text-[#B88E2F] text-xl font-semibold mb-2">Rs. 250,000.00</div>
                    <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-[#FFC700]" />
                        ))}
                        <span className="text-KettlemanGrey-200 text-sm ml-2">5 Customer Review</span>
                    </div>
                    <p className="text-KettlemanGrey-200 mb-4">
                        Setting the bar on one of the loudest speakers in its class, the Asgaard sofa is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>
                    {/* Size */}
                    <div className="mb-4">
                        <div className="font-semibold mb-2">Size</div>
                        <div className="flex gap-2">
                            {['L', 'XL', 'XS'].map(s => (
                                <button
                                    key={s}
                                    className={`w-10 h-10 rounded border ${size === s ? 'border-[#B88E2F] bg-[#B88E2F] text-white' : 'border-KettlemanGrey-100 bg-white text-black'}`}
                                    onClick={() => setSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Color */}
                    <div className="mb-4">
                        <div className="font-semibold mb-2">Color</div>
                        <div className="flex gap-3">
                            <button
                                className={`w-7 h-7 rounded-full border-2 ${color === 'purple' ? 'border-[#B88E2F]' : 'border-transparent'}`}
                                style={{ background: '#816DFA' }}
                                onClick={() => setColor('purple')}
                            />
                            <button
                                className={`w-7 h-7 rounded-full border-2 ${color === 'black' ? 'border-[#B88E2F]' : 'border-transparent'}`}
                                style={{ background: '#000' }}
                                onClick={() => setColor('black')}
                            />
                            <button
                                className={`w-7 h-7 rounded-full border-2 ${color === 'gold' ? 'border-[#B88E2F]' : 'border-transparent'}`}
                                style={{ background: '#B88E2F' }}
                                onClick={() => setColor('gold')}
                            />
                        </div>
                    </div>
                    {/* Quantity & Actions */}
                    <div className="flex gap-4 mb-6">
                        <div className="flex items-center border rounded">
                            <button
                                className="w-8 h-8 text-xl"
                                onClick={() => setQty(q => Math.max(1, q - 1))}
                            >-</button>
                            <span className="w-8 text-center">{qty}</span>
                            <button
                                className="w-8 h-8 text-xl"
                                onClick={() => setQty(q => q + 1)}
                            >+</button>
                        </div>
                        <button className="px-8 py-2 border rounded font-semibold hover:bg-[#B88E2F] hover:text-white transition">Add To Cart</button>
                        <button className="px-8 py-2 border rounded font-semibold hover:bg-KettlemanGrey-100 hover:text-white transition">Compare</button>
                    </div>
                    <hr className="mb-4" />
                    {/* Details */}
                    <div className="text-KettlemanGrey-200 text-sm mb-2">
                        <div><span className="font-semibold text-black">SKU</span> : SS001</div>
                        <div><span className="font-semibold text-black">Category</span> : Sofas</div>
                        <div><span className="font-semibold text-black">Tags</span> : Sofa, Chair, Home, Shop</div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="font-semibold text-black">Share</span> :
                            <a href="#" className="ml-2 text-black hover:text-[#B88E2F]"><FaFacebookF /></a>
                            <a href="#" className="ml-2 text-black hover:text-[#B88E2F]"><FaInstagram /></a>
                            <a href="#" className="ml-2 text-black hover:text-[#B88E2F]"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            <SectionInformation />
            <CartsProduct />
        </>
    );
}

function CartsProduct() {
    return (
        <section className='text-center text-2xl font-bold text-black p-8'>
            <div>Related Products</div>
            <div className='grid max-lg:grid-cols-2 max-xl:grid-cols-3 min-xl:grid-cols-3 gap-4 max-sm:grid-cols-1 p-8 items-center justify-center justify-items-center min-2xl:mx-36'>
                {DataCards().slice(0, 3).map((item, index) => (
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
        </section>
    )
}
function SectionInformation() {
    const [tab, setTab] = useState('description');

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12">
            <div className="flex gap-8 justify-center border-b border-KettlemanGrey-100 mb-8">
                <button
                    className={`py-2 px-4 text-lg font-semibold transition ${tab === 'description' ? 'border-b-2 border-black text-black' : 'text-KettlemanGrey-200'}`}
                    onClick={() => setTab('description')}
                >
                    Description
                </button>
                <button
                    className={`py-2 px-4 text-lg font-semibold transition ${tab === 'info' ? 'border-b-2 border-black text-black' : 'text-KettlemanGrey-200'}`}
                    onClick={() => setTab('info')}
                >
                    Additional Information
                </button>
                <button
                    className={`py-2 px-4 text-lg font-semibold transition ${tab === 'reviews' ? 'border-b-2 border-black text-black' : 'text-KettlemanGrey-200'}`}
                    onClick={() => setTab('reviews')}
                >
                    Reviews [5]
                </button>
            </div>
            {tab === 'description' && (
                <div>
                    <p className="text-KettlemanGrey-200 mb-6">
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p className="text-KettlemanGrey-200 mb-8">
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <img src='/src/assets/Product/Product1.png' alt="desc1" className="rounded-xl bg-PlaceboSnow-400 w-full md:w-1/2" />
                        <img src='/src/assets/Product/Product2.png ' alt="desc2" className="rounded-xl bg-PlaceboSnow-400 w-full md:w-1/2" />
                    </div>
                </div>
            )}
            {tab === 'info' && (
                <div className="text-KettlemanGrey-200">
                    <p>Material: Wood, Fabric, Metal</p>
                    <p>Dimensions: 200 x 80 x 75 cm</p>
                    <p>Weight: 32 kg</p>
                    <p>Warranty: 2 years</p>
                </div>
            )}
            {tab === 'reviews' && (
                <div className="text-KettlemanGrey-200">
                    <p>Customer reviews will be shown here.</p>
                </div>
            )}
        </div>
    )
}
export default Product;