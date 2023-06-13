import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import NavBar from './nav-bar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cofees" element={ <CoffeeList /> } />
      </Routes>
    </>
  );
}

export default App;
