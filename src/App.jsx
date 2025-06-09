import reactLogo from "./assets/react.svg";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import About from "./component/about/about";
import Project from "./component/project/project";
import Contact from "./component/contact/contact";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
     
    </>
  );
}

export default App;
