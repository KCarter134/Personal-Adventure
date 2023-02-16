import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FestivalPage from "./components/festivalPage";
import Home from './components/home'
import Travel from "./components/travel"
import Navbar from './components/navbar';
import TravelAPI from './components/travelAPI'
import './index.css';

export default function App() {
  return (
        <>
        <Navbar />
        
        <div className="App">
          <Routes>
            <Route path="/Personal-Adventure" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/FestivalPage" element={<FestivalPage />}/>
            <Route path="/travel" element={<Travel />}/>
          </Routes>
        </div>
        </>

  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();