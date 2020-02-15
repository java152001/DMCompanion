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
            hpMax: this.props.hpMax,
            participantNumber: this.props.participantNumber
        })
    }

    componentDidUpdate() {
        const newProps = this.props;
        let newStats = newProps.participantNumber;
        let oldStats = this.state.participantNumber;
        // console.log(oldStats);

        if (newStats !== oldStats) {
            this.setState({
                hpCurrent: newProps.hpCurrent,
                hpMax: newProps.hpMax,
                participantNumber: newStats
            })
        }
    }

    checkDeath = (hp) => {
        if (hp <= 0 ) {
            return true
        }
    }

    checkMax = (hp) => {
        if (hp >= this.props.hpMax) {
            return true
        }
    }

    decOne = () => {
        let hpNow = this.state.hpCurrent;
        hpNow--;
        if (this.checkDeath(hpNow)) {
            this.setState({
                hpCurrent: 0
            })
        }
        else {
            this.setState({
                hpCurrent: hpNow
            })
        }
    }

    decFive = () => {
        let hpNow = this.state.hpCurrent;
        hpNow = hpNow - 5;
        if (this.checkDeath(hpNow)) {
            this.setState({
                hpCurrent: 0
            })
        }
        else {
            this.setState({
                hpCurrent: hpNow
            })
        }
    }

    addOne = () => {
        let hpNow = this.state.hpCurrent;
        hpNow++;
        if (this.checkMax(hpNow)) {
            this.setState({
                hpCurrent: this.props.hpMax
            })
        }
        else {
            this.setState({
                hpCurrent: hpNow
            })
        }
    }

    addFive = () => {
        let hpNow = this.state.hpCurrent;
        hpNow = hpNow + 5;
        if (this.checkMax(hpNow)) {
            this.setState({
                hpCurrent: this.props.hpMax
            })
        }
        else {
            this.setState({
                hpCurrent: hpNow
            })
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
                        onClick = {this.decOne}
                        style={{ backgroundImage: `url("images/down-arrow.png")` }}
                        >
                            1
                    </div>
                    <div 
                        className="decFive"
                        onClick = {this.decFive}
                        style={{ backgroundImage: `url("images/down-arrow.png")` }}
                        >
                            5
                    </div>
                    <h2 className="hpText">{this.state.hpCurrent} / <span className="hpMax">{this.state.hpMax}</span></h2>
                    <div 
                        className="addOne"
                        onClick = {this.addOne}
                        style={{ backgroundImage: `url("images/up-arrow.png")` }}
                        >
                            1
                    </div>
                    <div 
                        className="addFive"
                        onClick = {this.addFive}
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