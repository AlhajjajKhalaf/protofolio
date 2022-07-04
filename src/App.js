import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Button} from 'react-bootstrap';

import  Navbar from "./components/Navbar"
import Home from "./components/Portofolio/Home"
const App = () => {
  return (
    <div className="App">
      {/* <Navbar/> */}
  

      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      
   


    
     


      {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '} */}


    </div>
  );
};

export default App;
