import React, { Component } from "react";
import './initCard.css';

class InitCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className="initCard" data-key={this.props.number}>
                <div className="name-cont">
                    <h2 className = "name">{this.props.name}</h2>
                </div>
                <div className="roll-cont">
                    <h2 className="roll">{this.props.roll}</h2>
                </div>
                <button 
                    className="deleteBtn"
                    onClick = {() => this.props.delete(this.props.number)}    
                >
                    -
                </button>
            </div>
        )
    }

}

export default InitCard;