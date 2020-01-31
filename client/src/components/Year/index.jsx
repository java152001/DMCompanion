import React, { Component } from "react";
import './year.css'

class Year extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: 0
        }
    }

    componentDidMount() {
        this.setState({
            year: this.props.year
        })
    }

    componentDidUpdate() {
        let newYear = this.props.year;
        if(newYear !== this.state.year) {
            this.setState({
                year: newYear
            })
        }
    }

    render() {

        return (
            <div className = "year">
                <button
                    onClick = {() => this.props.yearChange(this.state.year - 1)}
                > - </button>
                <span className = "currentYear">{this.state.year}</span>
                <button className = "yearIncrement"
                    onClick = {() => this.props.yearChange(this.state.year + 1)}
                > + </button>
            </div>
        )
    }
}

export default Year;