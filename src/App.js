import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./home";
import Singlemovie from "./Singlemovie";
import Error from "./Error";
import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<Singlemovie/>}/>
      <Route path="*" element={<Error/>}/>   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
