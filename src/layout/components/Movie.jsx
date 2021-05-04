function Movie(props){

    const{
        Title: title,
        Year: year,
        imbdID: id,
        Type: type,
        Poster: poster
    }=props
    return(
    
     <div className="card movie">
    
     <div className="card-image">
       <img src={poster} />
       
       {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a> */}
       
     </div>
     <div className="card-title">
     <span className="card-title">{title}</span>
     </div>
    
   </div>
       
    )
}

export default Movie;