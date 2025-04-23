import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Collections from './Collections';
import Bracelets from './Collections/Bracelets';
import Earrings from './Collections/Earrings';
import Necklace from './Collections/Necklace';
import Rings from './Collections/Rings';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element ={ <Contact/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/bracelets" element={<Bracelets/>}/>
        <Route path="/earrings" element={<Earrings/>}/>
        <Route path="/necklaces" element={<Necklace/>}/>
        <Route path="/rings" element={<Rings/>}/>
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
