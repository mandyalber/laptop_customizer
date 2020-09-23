import React, { Component } from 'react';
import './Total.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class Total extends Component {

    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(Object.keys(this.props.selected).reduce(
                        (acc, curr) => acc + this.props.selected[curr].cost,
                        0
                    ))}
                </div>
            </div>
        )
    }
}