import './App.css';
import Home from './pages/home';
import People from "./pages/people"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<People />}/>
        </Routes>
        
    </div>
  );
}

export default App;
