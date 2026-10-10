import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import ClassStructure from "./components/ClassStructure";
import MembersGrid from "./components/MembersGrid";
import Gallery from "./components/Gallery";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SocialMedia />
      <ClassStructure />
      <MembersGrid />
      <Gallery />
      {/* <Achievements /> */}
      <Footer />
    </div>
  );
}