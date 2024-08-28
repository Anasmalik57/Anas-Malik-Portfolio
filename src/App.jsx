
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/sections/Contacts";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="bg-teal-600 dark:bg-slate-950 w-full h-full text-white ">
      <Navbar />
      <body>
        <div>
          <Hero />
          <div id="Wrapper" className="bg-custom-gradient w-full pb-24 clip-custom-polygon " >
            <Skills />
            <Experience />
          </div>
          <Projects />
          <div id="Wrapper">
            <Education />
            <Contacts/>
          </div>
          <Footer/>
        </div>
      </body>
    </div>
  );
}

export default App;
