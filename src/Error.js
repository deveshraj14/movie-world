import React from 'react'
import { UseGlobalContext } from './context';

const Error = (currmov) => {
  const {movie}= UseGlobalContext();
  const { imdbID } = currmov;
  return (
    <div key={imdbID} to={`movie/${imdbID}`}>
     <h2>your movie id is {imdbID}</h2> 
    </div>
  );
}

export default Error;
