import React from 'react';
import bg from "../../assets/images/bg.png" 

const NoMatch = () => {
  return (
      <div className="container" style={{ background: <img src={{bg}} alt=" Lost in the Space" /> }}>
        <h2>      Oops, We Lost in the Space 🛸  .
       </h2>
      </div>
      
  );
};

export default NoMatch;