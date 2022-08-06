import { Routes, Route } from "react-router-dom";
import About from "./about";
import Login from "./RegisterLogin";
// import Home from "./";


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path = "/"      element = {<Home>}  /> */}
        <Route path = "/about" element= {<About/>} />
        <Route path = "/login" element= {<Login/>} />
      </Routes>


    </div>
  );
}

export default App;
