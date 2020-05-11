import React, {Component} from 'react';
import './../App.css';
import ButtonReset from "./ButtonReset";
import ButtonInc from "./ButtonInc";
import PanelCount from "./PanelCount";


export default class ContainerCounter extends Component {
    render() {

        return (

            <div className="container">
                <ButtonReset/>
                <ButtonInc/>
            </div>
        );
    }
}

// {countElement}