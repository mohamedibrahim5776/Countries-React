import './App.css';
import Explore from './componant/Explore/Explore';
import Faq from './componant/FAQ/Faq';
import About from './componant/About/About';
import Footer from './componant/Footer/Footer';
import Home from './componant/home/home';
import Navs from './componant/Navs/Nav';
import Reviews from './componant/Reviews/Reviews';

function App() {
  return (
    <>
    <Navs />
    <Home />
    <About />
    <Explore />
    <Reviews />
    <Faq />
    <Footer />
    </>
  );
}

export default App;
