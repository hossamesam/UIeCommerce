import MaskGroup from '../../../assets/Banner/BannerShop.png'

function BannerShop() {
    return (
        <div className='w-full filter relative'>
            <img className='min-w-full max-h-[316px] opacity-90' src={MaskGroup} alt="MaskGroup BannerHome" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold'>Shop</div>
        </div>
    )
}

export default BannerShop
