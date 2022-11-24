import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import Take from "./Components/Take";
import Show from "./Components/Show";
import Oops from "./Components/Oops";
// import Login from "./Components/Login";
// import Logup from "./Components/Logup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/take" element={<Take />} />
        <Route path='*' element={<Oops />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/logup' element={<Logup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

