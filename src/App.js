import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
