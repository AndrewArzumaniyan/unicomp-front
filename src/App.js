import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Compare from './pages/Compare.jsx';
import UniverMarket from './pages/UniverMarket.jsx';
import Error404 from './pages/error(404).jsx';
import Geography from './pages/Geography.jsx';
import Gid from './pages/Gid.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Compare />}/>
        <Route path="/market" element={<UniverMarket />}/>
        <Route path="/geography" element={<Geography />}/>
        <Route path="/gid" element={<Gid />}/>
        <Route path="/not-found" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;