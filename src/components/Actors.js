import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((z,index)=>{
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
  )
}

export default Actors;
