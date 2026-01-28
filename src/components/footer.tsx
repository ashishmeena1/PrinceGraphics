import { Printer } from "lucide-react"

function Footer() {
  return (

      <footer className="bg-gray-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                  <Printer className="h-6 w-6 text-orange-600" />
                  <span className="text-xl font-bold text-white">PrinceGraphics</span>
              </div>
              <p>&copy; 2024 PrinceGraphics. All rights reserved.</p>
          </div>
      </footer>
  )
}

export default Footer
