import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="bg-ink text-paper font-sans min-h-screen">
            <Navbar />
            <Hero />
            <Testimonials />
            <Works />
            <Statement />
            <Footer />
        </main>
    );
}

export default App;
