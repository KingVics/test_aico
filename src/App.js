import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

//Components
import Nav from "./components/nav"
import Footer from "./components/footer";
import Scroll from "./components/scroll"
import Dropdown from './components/Dropdown';

//Pages
import Home from "./pages/Home/home"
import Counsel from "./pages/counsel"
import Partners from "./pages/partners"
import Trainees from "./pages/trainees"
import Contact from "./pages/contactus"
import About from "./pages/aboutus"
import Profile from "./pages/Profile/profile"
import PracticeAreaLitigation from "./pages/practiceArea"


//Data
import { PracticePath } from "./data/practiceAreaHome";
import { Routes } from "./routes";
import './App.css';
import News from "./pages/News";
import NotFound from "./pages/notFound";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(true)
  const [activeP, setActiveP] = useState(false)
  const  [formData, setFormData] = useState({event: "news"});
  const newPath = PracticePath.map((item) => item.path)
  const newRoutes = Routes.map((item) => item.path)

  console.log(newRoutes);


  const backToTop =() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
  }

  const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
      fabr: {
          backgroundColor: "blue"
      }
  }));

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
      
      const handleClick = (event) => {
          const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
      
          if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      };
    
  return (
      <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
      </div>
      </Zoom>
  );
  }

 
  const toggle = () => setIsOpen(!isOpen)
  const showPublication = () => {
    setActiveP(true)
    setActive(false)
  }
  const showNew = () => {
    setActive(true)
    setActiveP(false)
  }

  if(!newRoutes) {
    return <NotFound/>
  }

  return (
    <Router>
      <Nav toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <Scroll>
        <Switch>
          <Route exact path={newRoutes[0]} component={() => <Home />}/>
          <Route exact path={newRoutes[1]} component={() => <Counsel />}/>
          <Route exact path={newRoutes[2]} component={() => <Partners />}/>
          <Route exact path={newRoutes[3]} component={() => <Trainees />}/>
          <Route exact path={newRoutes[4]} component={() => <Contact />}/>
          <Route exact path={newRoutes[5]} component={() => <About />}/>
          <Route exact path={newRoutes[6]} component={() => <Profile />}/>
          <Route exact path={newPath} component={PracticeAreaLitigation } />
          <Route exact path={newRoutes[7]} component={() => <News active={active} activeP={activeP} showPublication={showPublication} showNew={showNew} setFormData={setFormData} formData={formData}/>  } />
          <Redirect from="/home" to="/" />
          <Route  component={NotFound} />  
        </Switch>
      </Scroll>
      <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top"  onClick={backToTop} className="fabr">
          <KeyboardArrowUpIcon />
          </Fab>
      </ScrollTop> 
        
        
      
      
      <Footer />
    </Router>
  );
}

export default App;
