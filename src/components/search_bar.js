import React, {Component} from 'react';

//component that handles the search bar
class SearchBar extends Component {
    
	//This contructor sets the state as the search term
    constructor(props){
    	super(props);

    	this.state = {
    		term: ''
    	};
    }

    //this will render the search bar/input. Upon adding search terms to the input, it will take 
    //that value and use it as a parameter for onInputChange, which will set that query as the new
    //this.state.term. Then it will search that term via youtube's api using the this.prop.onSearchChange
    //which looks toward the videoSearch function in index.js. 

	render() {
		return (
			<div className="search-bar">
			  
              <input
              	value= {this.state.term} 
              	onChange={(event) => this.onInputChange(event.target.value) } 
              />
              
            </div>  
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchChange(term);
	}




}


export default SearchBar;