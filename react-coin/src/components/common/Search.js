import React from 'react';
import {API_URL} from '../../config';
import {handleResponse} from '../../helpers';
import './Search.css';

class Search extends React.Component {
	constructor(){
		super();
		this.state={
			searchQuery:''
		}
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		const searchQuery=e.target.value;
		
		this.setState({searchQuery})
		
		if(!searchQuery){
			return '';
		}
		
		fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
			.then(handleResponse)
			.then(result=>{
				console.log(result);
			})
	}
	
	render(){
		return (
			<div className='Search'>
				<span className='Search-icon'/>
				
				<input 
					className='Search-input'
					type='text'
					placeholder='Currency-name'
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default Search;