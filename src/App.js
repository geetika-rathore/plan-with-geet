import React, { useState } from "react";
import "./App.css";
import data from './data';
import Tours from "./Component/Tours";
const App = () => {
  const [tours,setTours] = useState(data);
  function NotInterestedHandler(id){
     const newTour = tours.filter(tour => tour.id !== id);
     setTours(newTour);  
  }

  if(tours.length === 0){
return(
  <div className="Reset">
    <h2>No Tours Left</h2> 
    <button  className="refresh"  onClick={()=>setTours(data)} >Refresh</button>
  </div>
);
  }
  return (
  <section className="app">
    <center>
    <h2 className="heading">Plan With Geet❤️</h2>
    </center>
    <Tours tours={tours} NotInterestedHandler={NotInterestedHandler} ></Tours>
  </section>
  );
};

export default App;
