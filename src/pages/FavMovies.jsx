import MovieItem from "../components/moveilist/MovieItem.jsx";
import "./Favmovies.css";

const favMovies = [
  {
    id: 101,
    name: "Top Gun: Maverick",
    posterUrl: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    rating: 8.3,
    genre: "Action",
  },
  {
    id: 102,
    name: "Oppenheimer",
    posterUrl: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    rating: 8.6,
    genre: "Drama",
  },
  {
    id: 103,
    name: "Spider-Man: No Way Home",
    posterUrl: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.2,
    genre: "Action",
  },
  {
    id: 104,
    name: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 7.0,
    genre: "Comedy",
  },
  {
    id: 105,
    name: "Joker",
    posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: 8.4,
    genre: "Thriller",
  },
  {
    id: 106,
    name: "Parasite",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: 8.5,
    genre: "Thriller",
  },
  {
    id: 107,
    name: "The Batman",
    posterUrl: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 7.9,
    genre: "Action",
  },
  {
    id: 108,
    name: "La La Land",
    posterUrl: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    rating: 8.0,
    genre: "Romance",
  },
  {
    id: 109,
    name: "The Conjuring",
    posterUrl: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    rating: 7.5,
    genre: "Horror",
  },
  {
    id: 110,
    name: "Whiplash",
    posterUrl: "https://image.tmdb.org/t/p/w500/6uSPcdGNA2A6vJmCagXkvnutegs.jpg",
    rating: 8.5,
    genre: "Drama",
  },
  {
    id: 111,
    name: "Dune: Part One",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 8.0,
    genre: "Sci-Fi",
  },
  {
    id: 112,
    name: "Doctor Strange",
    posterUrl: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    rating: 7.5,
    genre: "Fantasy",
  },
];

const FavMovies = ({ searchInput }) => {

  const searchResult = favMovies.filter((eachItem) =>
    eachItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    eachItem.genre.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h1 className="heading">Favourite Movies</h1>

      <ul className="movies-list">
        {searchResult.map((eachMovie) => (
          <MovieItem movie={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    </div>
  );
};

export default FavMovies;
