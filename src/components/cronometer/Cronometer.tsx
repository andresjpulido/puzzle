import React, { Component } from 'react';
import './Cronometer.css';

type CronometerState = {
    time: string
}

export default class Cronometer extends Component <CronometerState>{
  
    // eslint-disable-next-line
    constructor(props: CronometerState) {
        super(props)
      }

    render(){
        return (
            <div className="cronometer" id="cronometer" >
                {this.props.time} 
            </div>
        )
    }

} 