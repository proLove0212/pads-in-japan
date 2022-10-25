import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";
import AreaGuide from "./pages/AreaGuide";
import Blog from "./pages/Blog";
import Buy from "./pages/Buy";
import HomePage from "./pages/HomePage";
import Rent from "./pages/Rent";


function App() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen);
}


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/rent" element={<Rent/>}></Route>
        <Route path="/area-guide" element={<AreaGuide/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
