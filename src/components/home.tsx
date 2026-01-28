import { ArrowRight, MousePointerClick } from 'lucide-react'


function Home() {

   

    return (
        <section id="home" className="">
            <div className="max-w-7xl mx-auto md:h-screen flex items-center justify-center relative gap-2">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 m-4 mt-14">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Bringing Your Brand to <span className="text-orange-500">Life</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Professional printing and signage solutions that make your business shine. From LED light boards to custom shop signage, we deliver quality that speaks volumes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#services" className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-semibold">
                                View Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-500 hover:text-gray-900 transition-colors text-lg font-semibold">
                                Contact Us
                            </a>
                            <a href='#our-work' className='inline-flex items-center  justify-center bg-blue-600 text-white  px-8 py-3 hover:bg-orange-700 transition-colors text-lg font-semibold'>
                                work
                                <MousePointerClick/>
                            </a>
                        </div>
                    </div>
                    <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 gap-2 '>
                        <img src="./heroimg.jpeg" alt="a image" className='h-[400px] rounded-3xl' /> 
                        <img src="./image_28.jpeg" alt="a image" className='h-[400px]  rounded-2xl' /> 
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
