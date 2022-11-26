import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Signup from "./Components/Signup";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Login />
      <Signup />
      <Search />
      
    </div>
  );
}

export default App;