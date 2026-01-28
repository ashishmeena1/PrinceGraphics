import Marquee from "react-fast-marquee";



function Work() {
    const images = Array.from({ length: 29 }, (_, i) => `/image_${i + 1}.jpeg`);
    console.log(images)
    return (
        <section>
            <div id='our-work' className='w-full flex flex-col items-start gap-8 md:pl-6 justify-center  '>
                <div className='md:text-6xl text-4xl sm:text-center md:ml-14 ml-2'>Our work</div>
                <div className='relative '>

                    <div className=' items-center justify-center flex-wrap gap-2 hidden md:flex'>
                        {images.map((src) => (
                            <img key={src} src={src} alt="" className=" h-[300px] mx-1 border rounded-xl" />
                        ))}
                    </div>

                    <div className='h-full sm:visible md:hidden absolute bg-gradient-to-r from-gray-950 to-[100%] w-20 z-50'></div>
                    <div className="sm:visible md:hidden w-screen">
                        <Marquee speed={50} pauseOnHover={true}>
                            {images.map((src) => (
                                <img key={src} src={src} alt="" className=" h-[300px] mx-1 border rounded-xl" />
                            ))}
                        </Marquee>
                    </div>
                    <div className='h-full sm:visible md:hidden  absolute bg-gradient-to-l from-gray-950 to-[100%] w-20 z-50 top-0 right-0'></div>

                </div>
            </div>
        </section>
    )
}

export default Work
