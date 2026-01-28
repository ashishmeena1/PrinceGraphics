import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'


function Contact() {
  return (
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
  )
}

export default Contact
