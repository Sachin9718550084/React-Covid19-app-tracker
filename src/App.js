
import './App.css';
import React from 'react';
import Header from "./components/header";
import Details from "./components/Details";

function App() {
 
  return (
    <div className="App">
      <Header />
      <div className="dash-wrap">
        <div className="container">
         <div className="v-box">
            <Details />
           </div>
       </div>
      </div>
    </div>
  );
}

export default App;
