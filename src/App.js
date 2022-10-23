import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AreaGuide from "./pages/AreaGuide";
import Blog from "./pages/Blog";
import Buy from "./pages/Buy";
import HomePage from "./pages/HomePage";
import Rent from "./pages/Rent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
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
