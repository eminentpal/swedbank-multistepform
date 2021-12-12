
import './App.css';
import Form from './components/Form';
import Success from './components/formpages/Success';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />}  /> 
     <Route path="/form" element={<Form />} />
    <Route path="/success" element={<Success />}  />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
