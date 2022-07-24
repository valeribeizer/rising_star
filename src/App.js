import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Member from './components/Member';
import Prices from './components/Prices';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutUs />
      <Prices />
      <Member />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
