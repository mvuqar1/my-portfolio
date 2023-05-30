
import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
   <>
   <Navbar/>
   <div className="container">
   <About/>
   <Portfolio/>
   <Contacts/>

   </div>
   </>
  );
}

export default App;
