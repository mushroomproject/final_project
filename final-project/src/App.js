import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='farmer' element={<About/>}/>
          <Route path='about' element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
