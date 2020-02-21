import React, { Component } from "react";
import './initCard.css';

class InitCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            hpCurrent: this.props.hpCurrent,
            id : this.props.id,
            participantNumber: this.props.participantNumber
        })
    }

    componentDidUpdate() {
        const newProps = this.props;
        let newStats = newProps.hpCurrent;
        let oldStats = this.state.hpCurrent;
        // console.log(oldStats);
        if (newStats !== oldStats) {
            this.setState({
                hpCurrent: newProps.hpCurrent
            })
        }

        if (newStats.participantNumber !== this.state.participantNumber) {
            this.setState({
                participantNumber: newStats.participantNumber
            })
            console.log("participant Render")
        }
    }

    render() {
        return(
            <div className={this.props.alignment === "good" ? "initCard good" : "initCard evil"} data-key={this.props.number}>
                <div className="name-cont">
                    <h2 className = "name">{this.props.name}</h2>
                </div>
                <div className="hpRollCont">
                    <div 
                        className="decOne"
                        onClick = {() => this.props.decOne(this.props.id)}
                        style={{ backgroundImage: `url("images/down-arrow.png")` }}
                        >
                            1
                    </div>
                    <div 
                        className="decFive"
                        onClick = {() => this.props.decFive(this.props.id)}
                        style={{ backgroundImage: `url("images/down-arrow.png")` }}
                        >
                            5
                    </div>
                    <h2 className="hpText">{this.state.hpCurrent} / <span className="hpMax">{this.props.hpMax}</span></h2>
                    <div 
                        className="addOne"
                        onClick = {() => this.props.addOne(this.props.id)}
                        style={{ backgroundImage: `url("images/up-arrow.png")` }}
                        >
                            1
                    </div>
                    <div 
                        className="addFive"
                        onClick = {() => this.props.addFive(this.props.id)}
                        style={{ backgroundImage: `url("images/up-arrow.png")` }}
                        >
                            5
                    </div>
                    <div className="roll-cont">
                        <h2 className="roll">{this.props.roll}</h2>
                    </div>
                </div>
                <div 
                    className="deleteBtn"
                    onClick = {() => this.props.delete(this.props.number)}    
                >
                    <i className="fas fa-skull"></i>
                </div>
            </div>
        )
    }

}

export default InitCard;