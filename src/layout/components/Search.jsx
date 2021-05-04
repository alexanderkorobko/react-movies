import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
    this.state={
        search: '',
        type: 'all'
    }
}

handleKey=(event)=>{
    if(event.key==="Enter"){
        this.props.search(this.state.search, this.state.type);
    }
};

handleFilter=(event)=>{
    this.setState(()=>({type: event.target.dataset.type}), ()=>this.props.search(this.state.search, this.state.type));
}

    render(){
        return(
            
            <div className="input-field col s12">
            
            <input  value={this.state.search}  type="text" class="validate" onChange={(e)=>this.setState({search: e.target.value})} onKeyDown={this.handleKey}/> 
            <a class="waves-effect waves-light btn" 
            onClick={()=>this.props.search(this.state.search, this.state.type)}>

{/* onClick={()=>this.props.search(this.state.search)}> */}
            
            Search
            </a>

            <div>
        <label>
        <input name="type" type="radio"  data-type="all" onChange={this.handleFilter} checked={this.state.type==='all'} />
        <span>All</span>
      </label>

      <label>
        <input name="type" type="radio"  data-type="movie" onChange={this.handleFilter} checked={this.state.type==='movie'} />
        <span>Movies only</span>
      </label>

      <label>
        <input name="type" type="radio"   data-type="series" onChange={this.handleFilter} checked={this.state.type==='series'} />
        <span>Series only</span>
      </label>
      </div>
    

          </div>
        )
    }
}

export default Search