import React, { Component } from 'react';
import './Summary.css';
import Total from '../Total/Total'
import SummaryOptions from '../SummaryOptions/SummaryOptions';

export default class Summary extends Component {

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOptions selected={this.props.selected}/>
                <Total selected={this.props.selected}/>                
            </section>
        )
    }
}