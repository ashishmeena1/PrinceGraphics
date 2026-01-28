import { Printer } from "lucide-react"

function Footer() {
    return (

        <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
            <div className="pg-container text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <Printer className="h-6 w-6 text-orange-600" />
                    <span className="text-xl font-bold text-white">PrinceGraphics</span>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} PrinceGraphics. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
