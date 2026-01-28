import { CheckCircle } from "lucide-react";

const features = [
    "Fast turnaround time",
    "Professional design assistance",
    "Quality materials",
    "Competitive pricing",
    "Installation services",
    "Custom solutions"
];

function About() {
    return (
        <section id="about" className="pg-section bg-gray-950">
            <div className="pg-container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Printing Equipment"
                            className="rounded-3xl border border-gray-800 shadow-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="pg-title mb-6">Why Choose PrinceGraphics?</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            With years of experience in the printing and signage industry, we pride ourselves on delivering exceptional quality and service. Our team combines creativity with technical expertise to bring your vision to life.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                            <p className="text-gray-200 italic leading-relaxed">
                                "Your brand deserves to stand out. Let us help you make a lasting impression with quality signage and printing solutions."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
