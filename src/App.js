import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Browse from "./Pages/Browse";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Upload from "./Pages/Upload";
import Record from "./Components/Record";
import IsPrivate from "./Components/IsPrivate";
import Collection from "./Pages/Collection";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/records/:recordId" element={ <IsPrivate><Record /></IsPrivate> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/records/browse" element={ <IsPrivate><Browse /></IsPrivate> } />
        <Route path="/records/upload" element={ <IsPrivate><Upload /></IsPrivate> } />
        <Route path="records/collection" element={ <IsPrivate><Collection /></IsPrivate> } />
      </Routes>
      
    </div>
  );
}

export default App;