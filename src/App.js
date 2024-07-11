
import './App.css';
import Contact from './components/Contact/Contact.js'
import Home from './components/Home/Home.js'
import Navbar from './components/Navbar/Navbar.js'
import Process from './components/Process/Process.js'
import Notebook from './components/NoteBook/Notebook.js'
import Project from './components/Project/Project.js'
import About from './components/About/About.js';
import {BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
    <Routes>
    <Route path='/' element={ <Home/>}></Route>
      <Route path='/about' element={ <About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/process' element={ <Process/>}></Route>
      <Route path='/project' element={ <Project/>}></Route>
      <Route path='/notebook' element={ <Notebook/>}></Route>

    </Routes>
    </BrowserRouter>
        
       
        {/* <Project/>
        <Notebook/> */}
    </>
  );
}

export default App;
