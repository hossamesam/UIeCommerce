// import MaskGroup from '../../../assets/Banner/BannerShop.png'
// import Logo from '../../../assets/Logo/Meubel_House_Logos-05.svg'

function Banner({ title = "Shop" }:{title?: string}) {
    return (
        <div className='w-full filter relative'>

        <img className='min-w-full max-h-[316px] opacity-60' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/Banner/BannerShop.png?updatedAt=1752005276831"} alt="MaskGroup BannerHome" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold'>
          <img className='flex self-center justify-center items-center  -top-10 w-full scale-75   ' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/Logo/Meubel_House_Logos-05.svg?updatedAt=1752005275444"} alt="MaskGroup BannerHome" />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Banner
