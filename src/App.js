import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path={`/rgb/:red/:green/:blue`} element={<Home />} />
          <Route path={`*`} element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
