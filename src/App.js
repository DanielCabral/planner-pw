import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Landing from './pages/home';
import Login from './pages/login';
import Planners from './pages/planners';
import PlannerModel from './pages/PlannerModel';
import EditPlanner from './pages/EditPlanner';
import Pricing from './pages/Pricing';


function App() {
  return (
    <>
    <Header />
      <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/planners" component={Planners} />
            <Route exact path="/new-planner" component={PlannerModel} />
            <Route exact path="/edit-planner" component={EditPlanner} />
            <Route exact path="/pricing" component={Pricing} />
        </Switch>
    </>
  );
}

export default App;
