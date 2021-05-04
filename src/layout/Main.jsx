import Movies from './components/Movies';
import Preloader from './components/Preloader';
import Search from './components/Search';


function Main(props){
    return(
        <main className="content container">
            Helloooo! 
            <Search search={props.search} />
            {(!props.loading)?<Movies arr={props.arr} />:<Preloader />}
            
        </main>
    )
}

// c4a77bcd - API key

export default Main