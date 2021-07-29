import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
