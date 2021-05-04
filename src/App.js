import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import React from 'react';

class App extends React.Component {
  constructor(){
  super();

  this.state={
    movies: [],
    loading: true
  };

  this.handleSearch=this.handleSearch.bind(this);
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=c4a77bcd&s=matrix').then(response=>response.json()).then(data=>{this.setState({movies: data.Search, loading: false});
  });
  }

  handleSearch(query, type){
    this.setState({loading: true})
    let route=`http://www.omdbapi.com/?apikey=c4a77bcd&s=${query}`;
    if(type!=='all'){
      route+='&type='+type;
    }
 
    fetch(route).then(response=>response.json()).then(data=>{this.setState({movies: data.Search, loading: false});
  });

    // fetch(adres).then(response=>response.json()).then(data=>{this.setState({movies: data.Search}); })
  };

  render(){
  return (
    <>
      <Header />
      <Main arr={this.state.movies} search={this.handleSearch} loading={this.state.loading}/>
      <Footer />
    </>
  );
}
}

export default App;
