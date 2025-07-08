// import MaskGroup from '../../../assets/Banner/BannerHome.png'

function BannerHome() {
  return (
    <div className='w-full  max-h-[813px] relative'>
      <img className='min-w-full max-h-[813px]' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/Banner/BannerHome.png?updatedAt=1752005325622"} alt="MaskGroup BannerHome" />
      <SmallScreenCard />
      <BigScreenCard />
    </div>
  )
}
function BigScreenCard() {
  return <div className='max-md:hidden p-6    w-xl h-2xl bg-InventivePokey-300 absolute right-4 top-8'>
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
}
function SmallScreenCard() {
  return <div className='min-md:hidden max-md:h-44 p-2  w-sm bg-InventivePokey-300 absolute right-2 top-12'>
    <div className='text-zinc-950! text-[14px] line  ont-poppins-medium font-bold'>
      New Arrival
    </div>
    <div className='text-InventivePokey-200! font-poppins-bold text-2xl! '>
      Discover Our New Collection
    </div>
    <div className='text-zinc-950 text-sm! '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
    </div>
    <button className='cursor-pointer  typeHover bg-InventivePokey-200 w-32 py-2  mt-4 text-WhiteShadow-100'>
      Buy Now
    </button>
  </div>
}
export default BannerHome
