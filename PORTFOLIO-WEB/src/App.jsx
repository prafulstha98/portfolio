import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Parallax from "./Components/Parallax";
import TagComponent from "./Components/TagComponent";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import planets from './assets/planets.png'
import sun from './assets/sun.png'


const App = () => {
  return <div >
    <Cursor />
    <section id="homepage">
      <TagComponent title="Home" />
      <Navbar />
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="skills">
      <TagComponent title='skills' />
      <Skills />
    </section>

    <section id="services">
      <Parallax
        heading="What I do"
        gradient="#0c0c1d"
        bg={planets}
      />

    </section>

    <section >
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

    <section id="contacts">
      <Contacts />
    </section>
    <Footer />
  </div>;
};

export default App;
