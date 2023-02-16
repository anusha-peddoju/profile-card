import React from "react";
import Info from "./components/info";
import About from "./components/about";
import Skill from "./components/skill";
import Footer from "./components/footer";

export default function App()
{
  return(
    <div className="card">
      <Info/>
      <div className="container">
        <About/>
        <Skill/>
      </div>
      <Footer/>
    </div>
  );
}