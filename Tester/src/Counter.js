import React from "react";

 class Counter extends React.Component {
    render() {
        let wrap = {
            fontSize: 20,
            fontWeight: 20,

        };
        return(
            <div style={wrap}>
                {this.props.display}
                {this.props.addCount}
            </div>
        );
    }

}
export default Counter;