import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
//Components
import Nav from "./components/nav"
import Footer from "./components/footer";

//Pages
import Home from "./pages/home"
import Counsel from "./pages/counsel"
import Partners from "./pages/partners"
import Trainees from "./pages/trainees"
import Contact from "./pages/contactus"
import About from "./pages/aboutus"


import './App.css';





function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <>
          <main>
            <Route exact path="/" component={() => <Home />}/>
            <Route exact path="/counsel" component={() => <Counsel />}/>
            <Route exact path="/partners" component={() => <Partners />}/>
            <Route exact path="/trainees" component={() => <Trainees />}/>
            <Route exact path="/contact" component={() => <Contact />}/>
            <Route exact path="/about" component={() => <About />}/>

          </main>
        </>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
