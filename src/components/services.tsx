import { CheckCircle, Lightbulb, Printer, Store } from "lucide-react";


function Services() {
    const services = [
        {
            icon: Lightbulb,
            title: "LED Light Boards",
            description: "Eye-catching illuminated signage for your business. Energy-efficient LED technology with custom designs."
        },
        {
            icon: Store,
            title: "Shop Name Boards",
            description: "Professional name boards that make your store stand out. Available in various materials and finishes."
        },
        {
            icon: Printer,
            title: "Digital Printing",
            description: "High-quality printing services for banners, posters, flyers, and promotional materials."
        },
        {
            icon: CheckCircle,
            title: "Vinyl Lettering",
            description: "Durable vinyl graphics for windows, vehicles, and walls. Weather-resistant and long-lasting."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive printing and signage solutions tailored to your business needs
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-gray-700">
                            <div className="bg-orange-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                <service.icon className="h-8 w-8 text-orange-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
