
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
