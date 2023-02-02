import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Contactme from './pages/Contactme';



function App() {
  
  return (
     
     <Router>
    <div className="App">
      <Routes>
        <Route path = "/" element= {<Homepage />}/>
        <Route path = "/Contact" element= {<Contactme />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
