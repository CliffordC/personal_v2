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
import Photograph from './components/Photograph';
import Contact from './components/Contact';

import Image from './media/sunnykick.JPG';

const AppBarStyles = {
  basics: {
   //backgroundColor: '#FAF9F6',
    backgroundColor: 'white',
    color: "black",
    borderRadius: 10,
    dropshadow: 0,
  },
  text : {
    color : "black",
  },
  toolbar : {
    
  }
}
const generalStyles = {
  text : {
    fontFamily: 'Anonymous Pro, monospace',
  },
}

const ScreenStyles = {
  background : {
    backgroundImage : `url${Image}`,
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1
  },

}

const App = () => {

  return (
    <Container>
      <div style={generalStyles.text}>
      <Router>
        {/* <div>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/about">About</Link>
          <Link style={padding} to="/photograph">Photographs</Link>
          <Link style={padding} to="/contact">Contact</Link>
        </div> */}
        <AppBar position="relative" style={AppBarStyles.basics}>
        <Toolbar style={AppBarStyles.toolbar}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
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

        <div>
          <i>Clifford 2021</i>
        </div>
      </Router>
      </div>
    </Container>
  )
}

export default App;
