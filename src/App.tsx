import Header from "./components/Header/Header.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Education from "./components/Education/Education.tsx";
import "./App.css";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
