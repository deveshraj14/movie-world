
// import React from 'react';
// import { UseGlobalContext } from './context';
// import { NavLink } from 'react-router-dom';

// const Movies = () => {
//   const { movie } = UseGlobalContext();

//   return (
//     <>
//     <section className='movie-page'>
//       <div className="grid grid-4-col">
//       {movie.map((currmov) => {
//         const {imdbID , Title , Poster} = currmov;
        
  
//           return<NavLink to = {`movie/$({imdbID}`}>
//         <div className="card">
//           <div className="card-info">
//             <h2>{Title}</h2>
//             <img src={Poster} alt={imdbID}/>
//           </div>
//         </div>
//         </NavLink>
// })}
//       </div>
//       </section>
//     </>
//   );
// };

// export default Movies;





import React from 'react';
import { UseGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = UseGlobalContext();

  return (
    <section className='movie-page'>
      <div className="grid grid-4-col">
        {movie.map((currmov) => {
          const { imdbID, Title, Poster } = currmov;
          const moviename=Title.substring(0,15);
          return (
            <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                  <h2>{moviename.length>=15?`${moviename}...`:moviename}</h2>
                  <img src={Poster} alt={Title} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;

