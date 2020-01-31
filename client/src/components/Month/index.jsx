import React, { Component } from "react";
import Day from "../Day";
import './month.css'

class Month extends Component {

    render() {

        let days =  [];
        for(var i = 1; i < 31; i++) {
            days.push(
                <Day 
                    day={i} 
                    month={this.props.name} 
                    changeDate={this.props.changeDate}
                    updateEventData = {this.props.updateEventData}
                />
            )
        }

        return (
            <div className = "month">
                <h2 className = "title">{this.props.name}</h2>
                <h4 className = "commonTitle">{this.props.commonName}</h4>
                <div className = "dayCont">{days}</div>
            </div>
        )
    }
}

export default Month;