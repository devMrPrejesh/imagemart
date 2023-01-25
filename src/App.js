import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from './components/collection';
import Home from './components/home'

function App() {
  
  const collections = [
    {
      "id": 1,
      "collectionName": "new collection",
      "dir": "dfg",
      "imageCount": 30
    },
    {
      "id": 2,
      "collectionName": "new collection 2",
      "dir": "frtgh",
      "imageCount": 30
    },
    {
      "id": 3,
      "collectionName": "new collection 3",
      "dir": "fgh",
      "imageCount": 30
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/collection/:id" element={<Collection collections={collections} />} />
          <Route exact path="/" element={<Home collections={collections} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
