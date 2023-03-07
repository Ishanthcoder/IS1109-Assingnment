import React from 'react';
import 'bulma/css/bulma.min.css';
import Home from "./screens/Home";
import About from "./screens/About";
import NavBar from "./common/navbar";

function App() {
  return (
    <>
    <NavBar />
    <Home/>
    <About/>
    
    </>
  );
}

export default App;
