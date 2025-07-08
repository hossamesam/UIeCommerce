import Banner from '../../componant/Banners/Banner/Banner'
import Policy from '../../componant/Policy/Policy'
// import Thumbnail from '../../assets/About/Thumbnail.svg'
// import Reactjs from '../../assets/About/Reactjs.png'
// import Figma from '../../assets/About/Figma.png'
// import Github from '../../assets/About/Github.png'
import gif1 from '../../assets/gifs/Animation1.gif'

function About() {
    return (
        <div>
            <Banner title='about' />
            <div className='grid grid-cols-5 h-full'>
                <div className='col-span-2 flex flex-col items-center font-poppins-bold text-3xl!'>
                    <h1>This project from figma</h1>
                    <h1> UI/UX </h1>
                    <a className='relative' target="_blank" href="https://www.figma.com/design/0KR6ELIdXT8VqGPPgrQADc/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page--Community-?node-id=0-1&t=EuyfDLRD0f0yGoTQ-1">
              <img loading="lazy" className='rounded-3xl scale-90' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Thumbnail.svg?updatedAt=1752005385206"} alt="https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Thumbnail.svg?updatedAt=1752005385206" />
              <img loading="lazy" className='rounded-full w-14 h-14  absolute -top-2 right-1' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Figma.png?updatedAt=1752005249478"} alt="https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Figma.png?updatedAt=1752005249478" />
                    </a>
                </div>
                <div className=' col-span-1 flex flex-col items-center justify-center h-full'>
                    <h1 className='font-poppins-bold text-3xl!'>to</h1>
                    <img className='scale-140' src={gif1} alt="" />
                </div>
                <div className='col-span-2 text-center flex flex-col items-center font-poppins-bold text-3xl!'>
                    <h1> react project with tailwind css</h1>
                    <a className='relative' target="_blank" href="https://github.com/hossamesam/UIeCommerce" >
              <img loading="lazy" className='rounded-3xl scale-90' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Reactjs.png?updatedAt=1752005256240"} alt="https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Reactjs.png?updatedAt=1752005256240" />
              <img loading="lazy" className='rounded-full w-14 h-14 object-contain  bg-zinc-300 absolute -top-2 right-1' src={"https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Github.png?updatedAt=1752005267176"} alt="https://ik.imagekit.io/Hossam7w3cncwb9/assets/About/Github.png?updatedAt=1752005267176" />
                    </a>
                </div>
            </div>
            <section className="bg-gray-50 py-12 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                        Project Highlights
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold  mb-2">Responsive Design</h3>
                            <p className="text-gray-600">
                                Fully optimized for all screen sizes using Tailwind CSS utility-first classes.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold  mb-2">System Design Oriented</h3>
                            <p className="text-gray-600">
                                The project follows modern system design principles with a clear, scalable folder structure and well-separated concerns — ready for backend integration and long-term maintainability.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold   mb-2">TypeScript Integration</h3>
                            <p className="text-gray-600">
                                Type-safe components and props to reduce runtime errors and improve developer experience.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold   mb-2">ESLint Setup</h3>
                            <p className="text-gray-600">
                                Code quality ensured with strict ESLint rules customized for React and TypeScript.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold   mb-2">Vite Development</h3>
                            <p className="text-gray-600">
                                Fast, modern build tool for blazing-fast local development and optimized bundling.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold   mb-2">From Figma to Code</h3>
                            <p className="text-gray-600">
                                UI/UX converted directly from Figma designs into live responsive pages with pixel perfection.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold   mb-2">Deployment Ready</h3>
                            <p className="text-gray-600">
                                Fully structured and ready for deployment to platforms like Vercel, Netlify, or GitHub Pages.
                            </p>
                        </div>

                    </div>
                </div>
            </section>



            <Policy />

        </div>
    )
}

export default About
