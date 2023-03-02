import Navbar from './component/navbar/Navbar';
import './App.css';
import Intro from './component/navbar/intro/intro';
import Services from './component/services/Services';
import Achivement from './component/achivements/Achivements';
import Works from './component/works/works';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import { useContext } from 'react';
import { themeContext } from './context/context';

function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="App" style={{background: darkmode? 'black' :'', color: darkmode? 'white' :''}}>
     <Navbar/>
     <Intro/>
     <Services/>
     <Achivement/>
     <Works/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
