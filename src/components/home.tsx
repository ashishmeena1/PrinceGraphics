import { ArrowRight, MousePointerClick } from 'lucide-react'


function Home() {

    return (
        <section id="home" className="pt-28 pb-16">
            <div className="pg-container">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm text-gray-200">
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                            Printing • Signage • Branding
                        </div>
                        <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                            Premium signage that makes your brand <span className="text-orange-500">impossible to miss</span>
                        </h1>
                        <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed">
                            From LED light boards to custom shop signage and digital prints—we design, print, and deliver with reliable turnaround and clean finishing.
                        </p>

                        <div className="mt-9 flex flex-col sm:flex-row gap-4">
                            <a href="#services" className="pg-btn-primary px-8 py-3.5 text-base md:text-lg">
                                View Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="#contact" className="pg-btn-outline px-8 py-3.5 text-base md:text-lg">
                                Get a Quote
                            </a>
                            <a
                                href="#our-work"
                                className="pg-btn px-8 py-3.5 text-base md:text-lg border border-gray-800 bg-gray-900/50 text-white hover:bg-gray-900"
                            >
                                View Work
                                <MousePointerClick className="ml-2 h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
                            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-4">
                                <div className="text-xl font-bold text-white">Fast</div>
                                <div className="text-sm text-gray-300">Turnaround</div>
                            </div>
                            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-4">
                                <div className="text-xl font-bold text-white">Clean</div>
                                <div className="text-sm text-gray-300">Finishing</div>
                            </div>
                            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-4">
                                <div className="text-xl font-bold text-white">Custom</div>
                                <div className="text-sm text-gray-300">Designs</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%)] blur-2xl" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Use heroimg2 (exclude heroimg.* as requested) */}
                            <img
                                src="/heroimg2.jpeg"
                                alt="PrinceGraphics work sample"
                                className="h-[320px] sm:h-[440px] w-full object-cover rounded-3xl border border-gray-800 shadow-xl"
                                loading="eager"
                            />
                            <img
                                src="/heroimg.jpeg"
                                alt="PrinceGraphics work sample"
                                className="h-[320px] sm:h-[440px] w-full object-cover rounded-3xl border border-gray-800 shadow-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
