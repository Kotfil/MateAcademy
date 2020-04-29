import React,{Component} from "react";
import './TaskFooterDraft.css';

export class TaskFooterDraft extends Component {

    state = {
        dist: false
    }




    render = (props) => {

        let completeTask = this.props.filterValue === "Complete" ? "filter-value" : "";
        let cancelTask = this.props.filterValue === "Cancel" ? "filter-value" : "";
        let viewTask = this.props.filterValue === "View" ? "filter-value" : "";




        return (
        <div className={"Filippe"}>
            <button className={completeTask}
                    onClick={2}>Complete</button>

            <button className={cancelTask}
                    onClick={this.cancelTask}>Cancel</button>

            <button className={viewTask}
                    onClick={this.viewTask}>View</button>
        </div>
    )
}

};