

function Navbar() {
    return (
        <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">Prince<span className="text-green-500">Graphics</span></span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a>
                        <a href="#our-work" className="text-gray-300 hover:text-orange-500 transition-colors">Work</a>
                        <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</a>
                        <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a>
                        <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
