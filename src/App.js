import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anime from './themes/Anime';
import Actors from './themes/Actors';
import Animals from './themes/Animals';
import KidsShows from './themes/KidsShows';
import Musicians from './themes/Musicians';
import Sidebar from './components/Sidebar';
import Dashboard from './themes/Dashboard';

const App = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/kid's show" element={<KidsShows />} />
        <Route path="/musicians" element={<Musicians />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
);

export default App;
