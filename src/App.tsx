
import { Navbar, Home, Services, Footer, Contact, About } from "./components";
import Work from "./components/work";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Home />
      <Work/>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
