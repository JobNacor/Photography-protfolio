import "./Home.css"
import React from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"; 
import Containers from "./components/Containers/Containers";

function IndexPage() {
  return (
    <div>
      <Navbar /> 
      <Hero />
    </div>
  );
}

export default IndexPage;


