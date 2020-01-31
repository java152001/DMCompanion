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
                <span className = "label">Year</span>
                <div className = "arrow dec"
                    onClick = {() => this.props.yearChange(this.state.year - 1)}
                ><i class="fas fa-caret-left"></i></div>
                <span className = "currentYear">{this.state.year}</span>
                <div className = "arrow inc"
                    onClick = {() => this.props.yearChange(this.state.year + 1)}
                ><i class="fas fa-caret-right"></i></div>
            </div>
        )
    }
}

export default Year;