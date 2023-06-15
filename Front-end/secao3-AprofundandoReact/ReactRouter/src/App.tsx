import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import NavBar from './nav-bar';
import { fetchCoordinates } from './services';

type Coordinates = {
  latitude: number,
  longitude: number
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {coordinates && (
        <>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </>
      )}
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cofees" element={ <CoffeeList /> } />
      </Routes>
    </>
  );
}

export default App;
