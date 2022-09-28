import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <h1>Colors!</h1>
      <Switch>
        <Route exact path="/rgb" component={Home} />
      </Switch>
    </>
  );
}

export default App;
