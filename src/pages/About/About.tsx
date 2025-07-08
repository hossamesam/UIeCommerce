import Banner from '../../componant/Banners/Banner/Banner'
import Policy from '../../componant/Policy/Policy'
import Thumbnail from '../../assets/About/Thumbnail.svg'
import Reactjs from '../../assets/About/Reactjs.png'
import Figma from '../../assets/About/Figma.png'
import Github from '../../assets/About/Github.png'
import gif1 from '../../assets/gifs/Animation1.gif'

function About() {
    return (
        <div>
            <Banner title='about' />
            <div className='grid grid-cols-5 h-full'>

                <div className='col-span-2 flex flex-col items-center font-poppins-bold text-3xl!'>
                    <h1>This project from figma</h1>
                    <h1> UI/UX </h1>
                    <a className='relative' href="https://www.figma.com/design/0KR6ELIdXT8VqGPPgrQADc/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page--Community-?node-id=0-1&t=EuyfDLRD0f0yGoTQ-1">
                        <img className='rounded-3xl scale-90' src={Thumbnail} alt="Thumbnail" />
                        <img className='rounded-full w-14 h-14  absolute -top-2 right-1' src={Figma} alt="Thumbnail" />
                    </a>
                </div>
                <div className=' col-span-1 flex flex-col items-center justify-center h-full'>
                    <h1 className='font-poppins-bold text-3xl!'>to</h1>
                    <img className='scale-140' src={gif1} alt="" />
                </div>
                <div className='col-span-2 text-center flex flex-col items-center font-poppins-bold text-3xl!'>
                    <h1> react project with tailwind css</h1>
                    <a className='relative' href="https://github.com/hossamesam/UIeCommerce">
                        <img className='rounded-3xl scale-90' src={Reactjs} alt="Thumbnail" />
                        <img className='rounded-full w-14 h-14 object-contain  bg-zinc-300 absolute -top-2 right-1' src={Github} alt="Thumbnail" />
                    </a>

                </div>
            </div>
            <div>

            </div>
            <Policy />

        </div>
    )
}

export default About
