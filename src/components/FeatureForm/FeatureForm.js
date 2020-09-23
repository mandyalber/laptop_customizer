import React, { Component } from 'react';
import Options from '../Options/Options'
import './FeatureForm.css';

export default class FeatureForm extends Component {

    render() {

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Options 
                    features={this.props.features}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}