import React, { Component } from "react";
import './form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            year: 0,
            month: '',
            day: '',
            entry: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('/api/events', this.state).then(
            res => console.log(res)
        );
    }

    componentDidUpdate() {
        const newProps = this.props;
        let newDate = newProps.month + newProps.day + newProps.year;
        let oldDate = this.state.month + this.state.day + this.state.year;
        if(newDate !== oldDate) {
            this.setState({
                year: newProps.year,
                month: newProps.month,
                day: newProps.day
            })
        }
    }

    render() {

        return (
            <div className = "entryForm">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        value={this.state.month}
                        onChange={ event => this.setState({ month: event.target.value })}
                        placeholder="Month"
                    />
                    <input
                        type="text"
                        value={this.state.day}
                        onChange={ event => this.setState({ day: event.target.value })}
                        placeholder="Day"
                    />
                    <input
                        type="text"
                        value={this.state.entry}
                        onChange={ event => this.setState({ entry: event.target.value })}
                        placeholder="Entry"
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default Form;