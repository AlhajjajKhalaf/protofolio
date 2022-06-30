import "./App.css";
import {Button} from 'react-bootstrap';
import Portfolio from "./components/Portofolio";

const App = () => {
  return (
    <div className="App">
      <p>Hello From App</p>
      {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '} */}
      
      

      <Portfolio/>
    </div>
  );
};

export default App;
