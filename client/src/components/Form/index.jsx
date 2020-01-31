import React, { Component } from "react";
import './form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            year: '',
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

    componentDidMount() {
        this.setState({
            year: this.props.year,
            month: this.props.month,
            day: this.props.day,
            showForm: this.props.showForm
        })
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

        if(newProps.showForm !== this.state.showForm) {
            this.setState({
                showForm: newProps.showForm
            })
        }

    }

    render() {

        return (
            <div className = {this.state.showForm ? 'entryForm show' : 'entryForm'}>
                <form onSubmit={this.submitHandler}>
                    <div className = "entryYear">
                        {this.state.year}
                    </div>
                    <div className = "entryMonth">
                        {this.state.month}
                    </div>
                    <div className = "entryDay">
                        {this.state.day}
                    </div>
                    <textarea
                        type="text"
                        value={this.state.entry}
                        onChange={ event => this.setState({ entry: event.target.value })}
                        placeholder="Type your new entry"
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