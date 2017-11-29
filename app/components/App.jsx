import React from 'react';
import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query : ''

    };
    this.search=this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
   
  }

  search(){
    console.log("clicked on search  button" , this.state.query);
  }
  handleChange(event){
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return (
     <div>
     <h2>Book Explorer!</h2>
     <FormGroup>
     <InputGroup>
     <FormControl type="text" placeholder="Search for a book" onChange={this.handleChange}/>
     <InputGroup.Addon onClick={this.search}>
     <Glyphicon glyph="search"></Glyphicon>
     </InputGroup.Addon>
     </InputGroup>
     
     
     </FormGroup>
     </div>
      );
  }
}