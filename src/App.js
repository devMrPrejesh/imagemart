import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from './components/collection';
import Home from './components/home';
import collections from './test.json';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/collection/:name" element={<Collection collections={collections} />} />
          <Route exact path="/" element={<Home collections={collections} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
