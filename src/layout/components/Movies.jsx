import Movie from './Movie';

function Movies(props){
    return(
        <div className="movies">
            {props.arr? props.arr.map(m=>
                <Movie key={m.imdbID} {...m} />
            ):<h4>Nothing found</h4>}
        </div>
    )
}

export default Movies;