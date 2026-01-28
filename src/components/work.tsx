import Marquee from "react-fast-marquee";



function Work() {
    // Use all images in `/public` except `heroimg` (as requested).
    const images = [
        "/image_1.jpeg",
        "/image_2.jpeg",
        "/image_3.jpeg",
        "/image_4.jpeg",
        "/image_5.jpeg",
        "/image_6.jpeg",
        "/image_7.jpeg",
        "/image_8.jpeg",
        "/image_9.jpeg",
        "/image_10.jpeg",
        "/image_11.jpeg",
        "/image_12.jpeg",
        "/image_13.jpeg",
        "/image_14.jpeg",
        "/image_15.jpeg",
        "/image_16.jpeg",
        "/image_17.jpeg",
        "/image_18.jpeg",
        "/image_19.jpeg",
        "/image_20.jpeg",
        "/image_21.jpeg",
        "/image_22.jpeg",
        "/image_23.jpeg",
        "/image_24.jpeg",
        "/image_25.jpeg",
        "/image_26.jpeg",
        "/image_29.jpeg",
    ];

    return (
        <section id="our-work" className="pg-section bg-gray-950">
            <div className="pg-container">
                <div className="mb-10">
                    <h2 className="pg-title">Our Work</h2>
                    <p className="pg-subtitle">A quick look at recent signage and printing projects.</p>
                </div>

                <div className="relative">
                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {images.map((src) => (
                            <img
                                key={src}
                                src={src}
                                alt="PrinceGraphics work sample"
                                className="h-[260px] w-full object-cover rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-colors"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    {/* Mobile marquee */}
                    <div className="md:hidden">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent z-10" />
                        <Marquee speed={45} pauseOnHover={true}>
                            {images.map((src) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt="PrinceGraphics work sample"
                                    className="h-[240px] w-[260px] sm:h-[260px] sm:w-[340px] object-cover mx-2 rounded-2xl border border-gray-800"
                                    loading="lazy"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
