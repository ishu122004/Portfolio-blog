import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
   <div className="px-3 sm:px-4 bg-white border rounded-md lg:px-10">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
      <Route path="/blogs" element={<ProtectedRoute><Blogs/></ProtectedRoute>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
      <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}></Route>
    </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;
