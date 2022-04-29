import React, {useState} from "react"
import { Routes, Route} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


//Components
import Nav from "./components/nav"
import Footer from "./components/footer";
//import Scroll from "./components/scroll"
import Dropdown from './components/Dropdown';
import ErrorBoundary from "./components/ErrorBoundary";

//Pages
import Home from "./pages/Home/home"
import Counsel from "./pages/counsel"
import Partners from "./pages/partners"
import Contact from "./pages/Contact/ContactUs"
import About from "./pages/About/Aboutus"
import Profile from "./pages/Profile/profile"
import PracticeAreaLitigation from "./pages/practiceArea"
import Publication from "./pages/Publication"



//Data
import './App.css';
import News from "./pages/News";
import NotFound from "./pages/notFound";
// import Publication from "./pages/Publication";

import {Helmet} from "react-helmet";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(true)
  const [activeP, setActiveP] = useState(false)
  const  [formData, setFormData] = useState({event: "news"});
  

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


  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Abdullahi Ibrahim & Co..</title>
          <meta name="description" content="The official website of Abdullahi Ibrahim & Co (AICO). At  Abdullahi Ibrahim & Co, we pride ourselves in our deep understanding of the law and experience in key industry sectors." />
          <meta name="keywords" content="AICO Abdullahi Ibrahim & Co Abdullahi Ibrahim and Co aico" />
          <meta name="author" content="Abdullahi Ibrahim and Co AICO" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google-site-verification" content="IZon5cxoz9IdfEChfGWgNvxOTsgSvd2HQYAET6raxFw" />
      </Helmet>
      <Nav toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      {/* <Scroll> */}
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/counsel" element={<Counsel/>} />
            <Route path="/partners" element={<Partners/>} />
            {/* <Route exact path={newRoutes[2]} component={() => <Trainees />}/> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="" element={<PracticeAreaLitigation /> }>
              <Route path="/litigation" element={<PracticeAreaLitigation /> } />
              <Route path="/aviation" element={<PracticeAreaLitigation /> } />
              <Route path="/labour_law" element={<PracticeAreaLitigation /> } />
              <Route path="/insurance" element={<PracticeAreaLitigation /> } />
              <Route path="/foreign_investments" element={<PracticeAreaLitigation /> } />
              <Route path="/intellectualproperty" element={<PracticeAreaLitigation /> } />
              <Route path="/taxation" element={<PracticeAreaLitigation /> } />
              <Route path="/telecommunication_law" element={<PracticeAreaLitigation /> } />
            </Route>
            <Route path="/events" element={<News active={active} activeP={activeP} showPublication={showPublication} showNew={showNew} setFormData={setFormData} formData={formData}/>  } /> 
            <Route path="/events/publication/:id" element={<Publication/>} />
            <Route  path="*" element={<NotFound />} />   
          </Routes>
        </ErrorBoundary>
      {/* </Scroll> */}
      <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top"  onClick={backToTop} className="fabr">
          <KeyboardArrowUpIcon />
          </Fab>
      </ScrollTop> 
        
        
      
      
      <Footer />
    </>
  );
}

export default App;

