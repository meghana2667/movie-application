import { useState } from "react";
import "./App.css";
import Navbar from "./components/moveilist/Navbar";
import Movies from "./pages/Movies";
import FavMovies from "./pages/FavMovies";
import RecentMovies from "./pages/RecentlyWatchedMovies";
import { Routes, Route} from "react-router-dom";

const App = () => {
    const [searchInput,setSearchInput]= useState("")
    

  return (

<>
  <Navbar/>
      <div className="search-container">
        <input type = "text"
        placeholder="🔍 Search movies..."
        className="search-input"
         value={searchInput}
        onChange={(event)=>{
        setSearchInput(event.target.value)}}
        />
        </div>
        
      <Routes>
         <Route path="/" element={<Movies searchInput = {searchInput}/>} />
        <Route path="/movies" element={<Movies searchInput = {searchInput}/>} />
        <Route path="/favmovies" element={<FavMovies searchInput = {searchInput}/>} />
         <Route path="/recentmovies" element={<RecentMovies searchInput = {searchInput}/>} />
      </Routes>
</>
    

  );
};

export default App;
