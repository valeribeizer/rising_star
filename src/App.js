import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Member from './components/Member';
import  Prices from './components/Prices';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutUs />
      <Prices />
      <Member />
      <Footer />
    </div>
  );
}

export default App;
