import MovieItem from "../components/moveilist/MovieItem.jsx";
import "./Favmovies.css";

const recentMovies = [
  { id: 1, name: "Neon Shadows", posterUrl: "https://picsum.photos/300/450?random=11", rating: 8.2, genre: "Sci-Fi" },
  { id: 2, name: "Laugh Protocol", posterUrl: "https://picsum.photos/300/450?random=12", rating: 7.5, genre: "Comedy" },
  { id: 3, name: "Crimson Chase", posterUrl: "https://picsum.photos/300/450?random=13", rating: 8.0, genre: "Action" },
  { id: 4, name: "The Silent Clue", posterUrl: "https://picsum.photos/300/450?random=14", rating: 8.6, genre: "Thriller" },
  { id: 5, name: "Fragments of Us", posterUrl: "https://picsum.photos/300/450?random=15", rating: 7.9, genre: "Drama" },
  { id: 6, name: "Orbit Breakers", posterUrl: "https://picsum.photos/300/450?random=16", rating: 8.3, genre: "Sci-Fi" },
  { id: 7, name: "Office Mayhem", posterUrl: "https://picsum.photos/300/450?random=17", rating: 7.2, genre: "Comedy" },
  { id: 8, name: "Velocity Strike", posterUrl: "https://picsum.photos/300/450?random=18", rating: 8.1, genre: "Action" },
  { id: 9, name: "Locked Room", posterUrl: "https://picsum.photos/300/450?random=19", rating: 8.4, genre: "Thriller" },
  { id: 10, name: "Echoes of Yesterday", posterUrl: "https://picsum.photos/300/450?random=20", rating: 8.0, genre: "Drama" },
  { id: 11, name: "Quantum Drift", posterUrl: "https://picsum.photos/300/450?random=21", rating: 8.5, genre: "Sci-Fi" },
  { id: 12, name: "LOL Factory", posterUrl: "https://picsum.photos/300/450?random=22", rating: 7.3, genre: "Comedy" },
  { id: 13, name: "Iron Pursuit", posterUrl: "https://picsum.photos/300/450?random=23", rating: 8.2, genre: "Action" },
  { id: 14, name: "Mind Maze", posterUrl: "https://picsum.photos/300/450?random=24", rating: 8.7, genre: "Thriller" },
  { id: 15, name: "Broken Strings", posterUrl: "https://picsum.photos/300/450?random=25", rating: 7.8, genre: "Drama" },
  { id: 16, name: "Galactic Run", posterUrl: "https://picsum.photos/300/450?random=26", rating: 8.1, genre: "Sci-Fi" },
  { id: 17, name: "Comic Relief", posterUrl: "https://picsum.photos/300/450?random=27", rating: 7.6, genre: "Comedy" },
  { id: 18, name: "Rapid Force", posterUrl: "https://picsum.photos/300/450?random=28", rating: 8.3, genre: "Action" },
  { id: 19, name: "Night Cipher", posterUrl: "https://picsum.photos/300/450?random=29", rating: 8.6, genre: "Thriller" },
  { id: 20, name: "Last Letter", posterUrl: "https://picsum.photos/300/450?random=30", rating: 8.0, genre: "Drama" }
];

const RecentMovies = ({ searchInput }) => {

  const searchResult = recentMovies.filter((eachItem) =>
    eachItem.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    eachItem.genre.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h1 className="heading">Recently Watched Movies</h1>

      <ul className="movies-list">
        {searchResult.map((eachMovie) => (
          <MovieItem movie={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    </div>
  );
};

export default RecentMovies;
