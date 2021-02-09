import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/dashboard/Signup';
import Signin from './components/dashboard/Signin';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Dashboard/>
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/Signin">
          <Signin/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
