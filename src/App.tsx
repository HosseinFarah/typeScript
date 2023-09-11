import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import {Test} from "./Components/Test";
const App = () => {
  return (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/test" element={<Test name ={"Hossein"} age={41} email ={"h.farah61@gmail.com"} isMarried = {true} courses = {["js","react","Nodejs","php","css","html"]}/>}/>
            <Route path="*" element={<Notfound/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
  );
};

export default App;
