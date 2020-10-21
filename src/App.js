import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
    {/* <Dinner></Dinner>*/}
    <Dinner dishName="Chicken Karahi" sweetDish="Kheer"/>
    <hr/>
    <Dinner dishName="Biryani" sweetDish="Jaleebi"/>
    <hr/>
    <Dinner dishName="Nihaari" sweetDish="Gajar Ka Halwa"/>
    </div>
  );
}

export default App;
