import React, { Component } from 'react'
import Hand from "./Hand"


class Arm extends Component {
    render() {
        return (
            <div>
                <h1>Im the Arm</h1>
                <div className="names">
                    <ul>

                    </ul>
                    <ul>
                        
                    </ul>
                </div>
                <Hand insertName={this.props.insertName} names={this.props.names}/>
            </div>
        )
    }
}

export default Arm
