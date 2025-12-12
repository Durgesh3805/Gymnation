
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      {/* Content Spacer to allow scrolling if needed later */}
      <div className="h-[20vh] bg-black"></div> 
    </main>
  );
}
