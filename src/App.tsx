import { Printer, Lightbulb, Store, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
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

  const features = [
    "Fast turnaround time",
    "Professional design assistance",
    "Quality materials",
    "Competitive pricing",
    "Installation services",
    "Custom solutions"
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">PrinceGraphics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </div>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bringing Your Brand to <span className="text-orange-600">Life</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional printing and signage solutions that make your business shine. From LED light boards to custom shop signage, we deliver quality that speaks volumes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-semibold">
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors text-lg font-semibold">
                  Contact Us
                </a>
              </div>
            </div>
        
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive printing and signage solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Printing Equipment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose PrinceGraphics?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in the printing and signage industry, we pride ourselves on delivering exceptional quality and service. Our team combines creativity with technical expertise to bring your vision to life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-600">
                <p className="text-gray-700 italic">
                  "Your brand deserves to stand out. Let us help you make a lasting impression with quality signage and printing solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to start your project? Contact us today for a free quote
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 7225875938</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@princegraphics.com</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Indore,Madhya Pradesh</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="tel:+15551234567" className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors text-lg font-semibold">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Printer className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-white">PrinceGraphics</span>
          </div>
          <p>&copy; 2024 PrinceGraphics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
