import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="router-dom/" element={ <Home/> } />
        <Route path="router-dom/about" element={ <About/> } />
        <Route path="router-dom/contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App;
