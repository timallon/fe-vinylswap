import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Upload from "./Pages/Upload";
import Record from "./Pages/Record";
import IsPrivate from "./Components/IsPrivate";
import Collection from "./Pages/Collection";
import EditRecord from "./Pages/EditRecord";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        
        <Route path="/records/:recordId" element={ <IsPrivate><Record /></IsPrivate> } />
        <Route path="/records/:recordId/update" element={ <IsPrivate><EditRecord /></IsPrivate> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/records/" element={ <IsPrivate><Home /></IsPrivate> } />
        <Route path="/records/upload" element={ <IsPrivate><Upload /></IsPrivate> } />
        <Route path="records/collection" element={ <IsPrivate><Collection /></IsPrivate> } />
      </Routes>
      
    </div>
  );
}

export default App;