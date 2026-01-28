
import { Navbar, Home, Services, Footer, Contact, About } from "./components";
import Work from "./components/work";

function App() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1200px_circle_at_15%_-10%,rgba(249,115,22,0.22),transparent_50%),radial-gradient(900px_circle_at_90%_10%,rgba(59,130,246,0.18),transparent_55%),linear-gradient(to_bottom,#05070f,#03040a)]">
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
