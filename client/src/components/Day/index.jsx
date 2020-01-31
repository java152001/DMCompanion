import React, { Component } from "react"
import './day.css'
import axios from "axios"

class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: this.props.month,
            day: this.props.day
        }
        this.dateCall = this.dateCall.bind(this);
    }

    dateCall = () => {
        this.props.changeDate(this.state.month, this.state.day);

        axios.get('/api/events/one/' + this.state.month + '&' + this.state.day).then(
            res => this.props.updateEventData(res.data)
        )
    }

    render() {

        return(
            <div className = "day">
                <h5
                    onClick={this.dateCall}
                >
                    {this.props.day}
                </h5>
            </div>
        )

    }

}

export default Day;