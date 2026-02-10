import "./MovieItem.css";
const MovieItem = (props) => {
    const {movie} = props;
    const {name, posterUrl, rating, genre} = movie;


    return (
        <li className="movie-item">
            <div className = "movie-container">
                <img src = {posterUrl} alt = {name} className="image"/>
                <h1 className="movie-name" >{name}</h1>
                <p className="movie-rating" >Rating: {rating}</p>
                <p className="movie-genre" >Genre: {genre}</p>
            </div>

        </li>     

    )
       
}
export default MovieItem;