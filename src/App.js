import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import {
  Container,
  Button,
  AppBar,
  Toolbar
} from '@material-ui/core'//Page imports 
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work'
import Photograph from './components/Photograph';
import Contact from './components/Contact';

import Image from './media/orange.jpg';
import './App.css'

const AppBarStyles = {
  basics: {
   //backgroundColor: '#FAF9F6',
    //backgroundImage : `url${Image}`,
    opacity: '50',
    backgroundColor: 'transparent',
    color: "#4d675d",
    borderRadius: 10,
    //dropshadow: 0,
  },
  text : {
    color : "#4d675d",
  },
  toolbar : {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: "center",
    width: '100%',
    marginLeft: '0',
  }
}
const generalStyles = {
  basics: {
    margin: '0',
    fontFamily: 'Anonymous Pro, monospace',
  },

}

const ScreenStyles = {
  background : {
    margin : '0',
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1
  },

}

const App = () => {

  return (
    <div style={ScreenStyles.background}>
    <Container maxWidth={false}>
      <div style={generalStyles.basics}>
      <Router>
        {/* <div>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/about">About</Link>
          <Link style={padding} to="/photograph">Photographs</Link>
          <Link style={padding} to="/contact">Contact</Link>
        </div> */}
        <AppBar position="fixed" style={AppBarStyles.basics}>
        <Toolbar style={AppBarStyles.toolbar}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/work">
            Work
          </Button> 
          <Button color="inherit" component={Link} to="/photograph">
            Photographs
          </Button>   
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>   
        </Toolbar>
      </AppBar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/photograph">
            <Photograph />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
      </div>
    </Container>
    </div>
  )
}

export default App;
