import React , {Component} from 'react';
import {FormGroup, FormControl,InputGroup, Glyphicon} from 'react-bootstrap';

export default class Gallery extends React.Component{
    render(){
        return (
            <div>
            {
                this.props.items.map(item => {
                    let {title} = item.volumeInfo
                    return (
                        <div>{title}</div>
                    );
                })
            }</div>

        );
    }
}