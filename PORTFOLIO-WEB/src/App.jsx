import Navbar from "./Components/Navbar";
import Parallax from "./Components/Parallax";
import Hero from "./Pages/Hero";

const App = () => {
  return <div>
    <section id="homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="services"><Parallax heading="What I do" gradient="#0c0c1d" /></section>
    <section>Services</section>
    <section id="services"><Parallax heading="What I did" gradient="#505064" /></section>
    <section id="about">About</section>
    <section id="skills">skills</section>
  </div>;
};

export default App;
