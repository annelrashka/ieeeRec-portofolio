import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./components/navbar.js";
import Homepage from "./pages/homepage/homepage";
import Aboutme from "./pages/aboutme/aboutme";
import Myreason from "./pages/myreason/myreason";
import Footer from "./components/footer.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

function App() {
  return (
    <Router> 
      <>
        <Navbar/>
        <AnimatePresence>
          <Switch>
            <Route path='/ieeeRec-portofolio' exact component={Homepage}/>
            <Route path='/aboutme'  component={Aboutme}/>
            <Route path='/myreason' component={Myreason}/>
          </Switch>
        </AnimatePresence>
        <Footer/>
      </>
    </Router>

    );
}

export default App;
