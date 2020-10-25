import React, { Component } from 'react';
import './Cronometer.css';

export default class Cronometer extends Component {

    super(props){

    }
 

    render(){
        return (
            <div className="cronometer" id="cronometer">{this.props.time}</div>
        )
    }

} 