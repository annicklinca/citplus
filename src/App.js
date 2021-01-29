import logo from './logo.svg';
import './App.css';
import Navbar from './components/dashboard/Navbar';
import NavLeft from './components/dashboard/NavLeft';
import Dashboard from './components/dashboard/Dashboard';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nav">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
