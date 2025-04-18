import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import About from './About';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>

      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
