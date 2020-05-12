import React,{Component} from 'react';
import './../App.css';

export default class ButtonInc extends Component {
    render (){

        return(
            <div className="buttonInc">
                <div>
                    {/*<span>{this.props.count}</span>*/}
                </div>

                {/*<button onClick={() => {alert(this.props.count)}}>Inc</button>*/}
            </div>
        );
    }
}