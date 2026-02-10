import "./index.css";
import {Link} from "react-router-dom";

const Navbar = (props) => {
     const {searchInput,setSearchInput} = props
     


  return (
    <>
     <div>
         <nav className="navbar">
             <h1 className="logo">🎬MovieHub</h1>
        <ul className="nav-links">
                <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/favmovies">FavMovies</Link></li>
             <li><Link to="/recentmovies">RecentMovies</Link></li>
      </ul>


    </nav>

    </div>
   
    </>
   
  );
};

export default Navbar;
