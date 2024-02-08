import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import Parallax from "./Components/Parallax";
import Contacts from "./Pages/Contacts";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import planets from './assets/planets.png'
import sun from './assets/sun.png'


const App = () => {
  return <div>
    <Cursor />
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
    <Projects />

    {/* <section id="about">About</section> */}

    <section id="skills">skills</section>
    <section id="contacts">
      <Contacts />
    </section>
  </div>;
};

export default App;
