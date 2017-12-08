import React from 'react';
import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';
require('../index.css');
import Gallery from './Gallery.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query : '',
      items : []

    };
    this.search=this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
   
  }
  handleKeyPress(event){
    if(event.key ==='Enter')
    this.search();

  }
 
  search(){
    let query = this.state.query;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(BASE_URL, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items : items
      })

    })
    console.log("clicked on search  button" , this.state.query);
  }
  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return (
     <div className="Global">
     <h2>Book Explorer!</h2>
     <FormGroup>
     <InputGroup>
     <FormControl type="text" placeholder="Search for a book" onChange={this.handleChange}
     onKeyPress={this.handleKeyPress}/>
     <InputGroup.Addon onClick={this.search}>
     <Glyphicon glyph="search"></Glyphicon>
     </InputGroup.Addon>
     </InputGroup>
     
     
     </FormGroup>
     <Gallery items={this.state.items} />
     </div>
      );
  }
}
