import React, {Component} from 'react';

export class onStatusTires extends Component {
    render = () => {

let tiresElements = this.props.tires.map(tire => <onStatusTire tire={tire}
                                                               onTireStatusChanged={this.props.onTireStatusChanged} )
        return (

        );
    }
}