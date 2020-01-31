import React, { Component } from "react";
import './entry.css';

class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props
        }
    }

    render() {

        return (
            <div className = "entry">
                <div className = "date">
                    <span className = "year">{this.props.year}</span>
                    <span className = "month">{this.props.month}</span>
                    <span className = "day">{this.props.day}</span>
                </div>
                <div className = "event">
                    <p className="event">{this.props.event}</p>
                </div>
            </div>
        )
    }
}

export default Entry;