import './App.css';
import { Route, Routes } from "react-router-dom"

// Routes
import Home from './pages/home';
import People from "./pages/people"
import About from './pages/about';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<People />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        
    </div>
  );
}

export default App;
