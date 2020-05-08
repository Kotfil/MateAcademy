import React, {Component} from 'react';
import './App.css';

export class onAddTires extends Component {
    render = (props) => {
        let onAllTires = this.props.filterTires === "All" ? "filterTires-active" : " ";
        let onCompleteTires = this.props.filterTires === "Complete" ? "filterTires-active" : " ";
        let onActiveTires = this.props.filterTires === "Active" ? "filterTires-active" : " ";

        return (
            <div className="tires-Button">
                <button onClick={ () => {this.props.onAddTires("All")}}  className={onAllTires}>All</button>
                <button onClick={ () => {this.props.onAddTires("Completed")}}  className={onCompleteTires}>Complete</button>
                <button onClick={ () => {this.props.onAddTires("Active")}}  className={onActiveTires}>Active</button>
            </div>
            );
        }
    }
