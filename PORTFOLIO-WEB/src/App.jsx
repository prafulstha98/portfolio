import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";

const App = () => {
  return <div>
    <section id="homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="about">About</section>
    <section id="skills">skills</section>
  </div>;
};

export default App;
