import MovieItem from "../components/moveilist/MovieItem.jsx";
import "./Favmovies.css";

const Movie = [
  // 🔥 Action
  {
    id: 1,
    name: "John Wick",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    rating: 7.4,
    genre: "Action",
  },
  {
    id: 2,
    name: "Mad Max: Fury Road",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    rating: 8.1,
    genre: "Action",
  },
  {
    id: 3,
    name: "Gladiator",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    rating: 8.5,
    genre: "Action",
  },
  {
    id: 4,
    name: "The Dark Knight",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    genre: "Action",
  },
  {
    id: 5,
    name: "Avengers: Endgame",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    rating: 8.4,
    genre: "Action",
  },

  // 🎭 Drama
  {
    id: 6,
    name: "Forrest Gump",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    rating: 8.8,
    genre: "Drama",
  },
  {
    id: 7,
    name: "The Shawshank Redemption",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 9.3,
    genre: "Drama",
  },
  {
    id: 8,
    name: "Fight Club",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    rating: 8.8,
    genre: "Drama",
  },
  {
    id: 9,
    name: "The Pursuit of Happyness",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    rating: 8.0,
    genre: "Drama",
  },
  {
    id: 10,
    name: "A Beautiful Mind",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
    rating: 8.2,
    genre: "Drama",
  },

  // 😂 Comedy
  {
    id: 11,
    name: "The Hangover",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    rating: 7.7,
    genre: "Comedy",
  },
  {
    id: 12,
    name: "Superbad",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    rating: 7.6,
    genre: "Comedy",
  },
  {
    id: 13,
    name: "Home Alone",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    rating: 7.7,
    genre: "Comedy",
  },
  {
    id: 14,
    name: "3 Idiots",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    rating: 8.4,
    genre: "Comedy",
  },
  {
    id: 15,
    name: "Jumanji: Welcome to the Jungle",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    rating: 6.9,
    genre: "Comedy",
  },

  // 🚀 Sci-Fi
  {
    id: 16,
    name: "Inception",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    id: 17,
    name: "Interstellar",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    genre: "Sci-Fi",
  },
  {
    id: 18,
    name: "The Matrix",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    genre: "Sci-Fi",
  },
  {
    id: 19,
    name: "Avatar",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    rating: 7.8,
    genre: "Sci-Fi",
  },
  {
    id: 20,
    name: "Dune",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 8.0,
    genre: "Sci-Fi",
  },
];

const Movies = (props) => {
  const { searchInput } = props;
  const searchResult = Movie.filter((eachItem) => 
  eachItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    eachItem.genre.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div>
      <h1 className="heading">Movies</h1>

      <ul className="movies-list">
        {searchResult.map((eachMovie) => (
          <MovieItem movie={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
