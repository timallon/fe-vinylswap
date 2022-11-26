import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/" element={ <Navbar /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
      
    </div>
  );
}

export default App;