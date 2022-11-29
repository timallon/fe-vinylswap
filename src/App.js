import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import Upload from "./Components/Upload";
import Record from "./Components/Record";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/record" element={ <Record /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/records/upload" element={ <Upload /> } />
      </Routes>
      
    </div>
  );
}

export default App;