import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./components/navbar.js";
import Homepage from "./pages/homepage/homepage";
import Aboutme from "./pages/aboutme/aboutme";
import Myreason from "./pages/myreason";
import Footer from "./components/footer.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/aboutme'  component={Aboutme}/>
          <Route path='/myreason' component={Myreason}/>
        </Switch>
        <Footer/>
      </>
    </Router>

    );
}

export default App;
