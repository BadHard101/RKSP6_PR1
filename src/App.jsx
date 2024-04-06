import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Prac1 from "./components/Pages/Prac1/Prac1.jsx";
import Prac2 from "./components/Pages/Prac2/Prac2.jsx";
import Prac3 from "./components/Pages/Prac3/Prac3.jsx";
import Prac4 from "./components/Pages/Prac4/Prac4.jsx";

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/prac1" element={<Prac1/>} />
            <Route path="/prac2" element={<Prac2/>} />
            <Route path="/prac3" element={<Prac3/>} />
            <Route path="/prac4" element={<Prac4/>} />
        </Routes>
    </>
  )
}

export default App
