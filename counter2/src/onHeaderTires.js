import React, {Component} from 'react';
import './App.css';

class onHeaderTires extends Component {
    constructor(props) {
        super(props);
        this.newTiresRef = React.createRef();
    }

    onAddTiresClick = () => {
        let newTires = this.newTiresRef.current.value;
        this.newTiresRef.current.value = "";
        this.props.onAddTires(newTires);
    }


    render = () => {
        return (
            <div className="tires-header">
                <h3 className="tires-header-title">Buy tires sold</h3>
                <div className="tires-newTiresForm">
                    <input type="text" placeholder="New tires" ref={this.newTiresRef}/>
                    <button onClick={this.onAddTiresClick}>Add</button>
                    <textarea>123</textarea>

                </div>
            </div>
        );
    }
}

export default onHeaderTires;