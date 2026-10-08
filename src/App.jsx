import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import WorkDetail from "./pages/WorkDetail";

function Home() {
    return (
        <>
            <Hero />
            <Testimonials />
            <Works />
            <Statement />
        </>
    );
}

function App() {
    return (
        <main className="bg-ink text-paper font-sans min-h-screen">
            <ScrollToHash />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/karya/:slug" element={<WorkDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
