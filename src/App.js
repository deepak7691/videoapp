import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import "./index.css"
import Home from './components/Home';
import Video from './components/Video';

function App() {
  return (
    <>
    <div className="shadow-lg w-full h-16 flex justify-center items-center text-lg" >
     <Header/>
    </div>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="video" element={<Video/>} />
  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
