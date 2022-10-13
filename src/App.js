import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={`/rgb/:red/:green/:blue`} component={Home} ></Route>
          <Route path={`*`} component={NotFound} ></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
