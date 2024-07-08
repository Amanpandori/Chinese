
import './App.css';
import Contact from './components/Contact/Contact.js'
import Home from './components/Home/Home.js'
import Navbar from './components/Navbar/Navbar.js'
import Process from './components/Process/Process.js'
import Notebook from './components/NoteBook/Notebook.js'
import Project from './components/Project/Project.js'
import About from './components/About/About.js';

function App() {
  return (
    <>
        <About/>
        <Contact/>
        <Navbar/>
        <Home/>
        <Process/>
        <Project/>
        <Notebook/>
    </>
  );
}

export default App;
