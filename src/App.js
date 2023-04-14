
import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
   <>
   <div className="container">
   <Home/>
   <About/>
   <Portfolio/>
   <Contacts/>

   </div>
   </>
  );
}

export default App;
