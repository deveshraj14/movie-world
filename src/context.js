
import React, { useContext, useEffect, useState } from "react";


const AppContext=React.createContext();
const api_url=`http://www.omdbapi.com/?apikey=9ca13c4a`
// we need to create a provider
const AppProvider=({children})=>{
    const[isloading , setloading] = useState(true)
    const[movie , setmovie] = useState([]);
    const[seterror, setiserror]=useState({show:"false" , msg:""})
    const[query,setquery]=useState("titanic");
    const getmovies=async(url)=>{
        try{
            const res=await fetch(url);
            const dataa=await res.json();
            console.log(dataa);

            if(dataa.Response==="True")
                {
                    setloading(false);
                    setmovie(dataa.Search);
                }
                else{
                    setiserror({
                        show:"true",
                        msg:dataa.error,
                    });
                }
        }
        catch(Error)
        {
            console.log(Error);
        }

    }
     useEffect(()=>{
    let timeout= setTimeout(() => {
            getmovies(`${api_url}&s=${query}`);
        }, 800);
       
        return () => {
            clearTimeout(timeout)}; 
     },
     
    [query]);
    return(
        <AppContext.Provider value={{isloading,seterror,movie,query,setquery}}>{children}</AppContext.Provider>
    );

};
const UseGlobalContext=()=>
    {
        return useContext(AppContext)  
    };

export {AppProvider,AppContext , UseGlobalContext};








// import React, { useContext, useEffect, useState } from "react";

// // Create the context
// const AppContext = React.createContext();

// // API URL
// const api_url = `http://www.omdbapi.com/?apikey=9ca13c4a&s=titanic`;

// // Provider component
// const AppProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState({ show: false, msg: "" });

//   const getMovies = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);

//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovies(data.Search);
//       } else {
//         setError({
//           show: true,
//           msg: data.Error,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       setError({
//         show: true,
//         msg: "Something went wrong!",
//       });
//     }
//   };

//   useEffect(() => {
//     getMovies(api_url);
//   }, []);

//   return (
//     <AppContext.Provider value={{ isLoading, error, movies }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hook to use the AppContext
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider,AppContext, useGlobalContext };
