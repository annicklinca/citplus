import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Timetable from './components/dashboard/Timetable';
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
        <Route path="/timetable">
          <Timetable/>
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/">
          <Signin/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
