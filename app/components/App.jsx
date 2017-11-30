import React from 'react';
import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';
require('../index.css');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query : ''

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
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch('${BASE_URL}${this.state.query}', {method:"GET"})
    .then(response =>  response.json())
    .then(json => console.log(json))
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
     </div>
      );
  }
}