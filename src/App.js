import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Countries from "./Pages/Countries";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
