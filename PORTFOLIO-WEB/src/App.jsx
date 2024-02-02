import Navbar from "./Components/Navbar";
import Parallax from "./Components/Parallax";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import planets from './assets/planets.png'
import sun from './assets/sun.png'


const App = () => {
  return <div>
    <section id="homepage">
      <Navbar />
      <Hero />
    </section>

    <section id="services">
      <Parallax
        heading="What I do"
        gradient="#0c0c1d"
        bg={planets}
      />

    </section>

    <section>
      <Services />
    </section>

    <section id="services">
      <Parallax
        heading="What I did"
        gradient="#505064"
        bg={sun}
      />
    </section>
    <section id="about">About</section>

    <section id="projects">
      <Projects />
    </section>
    <section id="skills">skills</section>
  </div>;
};

export default App;
