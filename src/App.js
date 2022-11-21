import "./index.css";
import { BrowserRouter, BrowserRouter as Router, Link, Route,   Switch } from "react-router-dom";
import Home from "./Component/Home";
import React from "react";
import Header from "./Header";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <>

    <Header />
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route  path="" component={Home}/>


  <Route exact path="/home" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/contact" component={Contact}/>
  <Route exact path="/gallery" component={Gallery}/>

  </Switch>  
  
     </>
  );
};

export default App;
