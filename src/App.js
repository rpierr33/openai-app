import './App.css';

//import components 
import Home from './components/Home'
import Prompt from './components/Prompt'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <Router>
      <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/prompt" element={<Prompt/>} />
      </Routes>
    

     
    </div>
   </Router>
  );
}

export default App;
