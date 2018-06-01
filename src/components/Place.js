import React, { Component } from 'react';

class Place extends Component {

    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <p>{this.props.type}</p>
            </li>
        );
    }
}

export default Place;