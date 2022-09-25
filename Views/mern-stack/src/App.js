import Navbar from "./Components/partials/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Components/Login';
import Register from "./Components/Register";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
