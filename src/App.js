import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Travel from "./components/travel"
import Navbar from './components/navbar';
import './index.css';

export default function App() {
  return (
        <>
        <Navbar />
        
        <div className="App">
          <Routes>
            <Route path="/Personal-Adventure" element={<Homepage />}/>
            <Route path="/" element={<Homepage />}/>
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