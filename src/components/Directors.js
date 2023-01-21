import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((z,index)=>{
        return(
          <div key={index}>
            <h2>Name:{z.name}</h2>
            <p>Movies:</p>
            <ul>
              {z.movies.map((y,newIndex)=>{
                return(
                  <li key={newIndex}>{y}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors;
