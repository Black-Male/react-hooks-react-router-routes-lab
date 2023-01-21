import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((z,index)=>{
      return(
        <div key={index}>
          <h2>Title:{z.title}</h2>
          <p>Time:{z.time}</p>
          <p>Genres:</p>
          <ul>
            {z.genres.map((y,newIndex)=>{
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
  ;
}

export default Movies;
