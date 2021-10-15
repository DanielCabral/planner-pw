import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/home';
import Login from './pages/login';
import Planners from './pages/planners';
import PlannerModel from './pages/PlannerModel';


function App() {
  return (
      <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/planners" component={Planners} />
            <Route exact path="/new-planner" component={PlannerModel} />
        </Switch>
  );
}

export default App;
