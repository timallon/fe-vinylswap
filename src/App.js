import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Login />
      <Search />
      
    </div>
  );
}

export default App;