import React, { Component } from "react";
import './initCard.css';

class InitCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showRollChange : false,
            updateRollNumber : this.props.roll,
            showDamage : false,
            showHealing : false,
            newDamageNumber : 0,
            newHealNumber : 0
        }

        this.showUpdateRoll = this.showUpdateRoll.bind(this);
        this.handleUpdateRollChange = this.handleUpdateRollChange.bind(this);
        this.showHealing = this.showHealing.bind(this);
        this.showDamage = this.showDamage.bind(this);
        this.handleHealUpdate = this.handleHealUpdate.bind(this);
        this.handleDamageUpdate = this.handleDamageUpdate.bind(this);
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
        if (newStats !== oldStats) {
            this.setState({
                hpCurrent: newProps.hpCurrent
            })
        }

        if (newStats.participantNumber !== this.state.participantNumber) {
            this.setState({
                participantNumber: newStats.participantNumber
            })
        }
    }

    showHealing() {
        let currentHealingState = this.state.showHealing;
        this.setState({ 
            showHealing : !currentHealingState
        })
    }

    showDamage() {let 
        currentDamageState = this.state.showDamage;
        this.setState({ 
            showDamage : !currentDamageState
        })
    }

    showUpdateRoll() {
        const currentShowRollState = this.state.showRollChange;
        this.setState({
            showRollChange: !currentShowRollState
        }) 
    }

    handleUpdateRollChange(e) {
        this.setState({
            updateRollNumber: parseInt(e.target.value)
        })
    }

    handleHealUpdate(e) {
        this.setState({
            newHealNumber : parseInt(e.target.value)
        })
    }

    handleDamageUpdate(e) {
        this.setState({
            newDamageNumber : parseInt(e.target.value)
        })
    }

    render() {
        return(
            <div className={this.props.alignment === "good" ? "initCard good" : "initCard evil"} data-key={this.props.number}>
                <div className="name-cont">
                    <h2 className = "name">{this.props.name}</h2>
                </div>
                <div className="hpRollCont">
                    <div 
                        className="damage"
                        style={{ backgroundImage: 'url("images/damage.png")' }}
                        onClick = { this.showDamage }
                        >
                    </div>
                    <h2 className="hpText">{this.state.hpCurrent} / <span className="hpMax">{this.props.hpMax}</span></h2>
                    <div 
                        className="healing"
                        style={{ backgroundImage: 'url("images/healing.png")' }}
                        onClick = { this.showHealing }
                        >
                    </div>
                    <div className="roll-cont">
                        <h2 className="roll">{this.props.roll}</h2>
                        <div 
                            className = "updateRollBtn"
                            onClick = { this.showUpdateRoll }
                            >
                                +
                        </div>
                        <div 
                            className = {this.state.showRollChange ? "updateRollField show" : "updateRollField" }
                            >
                                <input
                                    className = "updateRollInput"
                                    type = 'text'
                                    defaultValue = { this.props.roll }
                                    onChange = { this.handleUpdateRollChange }
                                />
                                <button 
                                    className="submit"
                                    onClick = {() => { this.props.updateRoll(this.props.id, this.state.updateRollNumber); this.showUpdateRoll(); }}
                                    >
                                        Submit
                                </button>
                        </div>
                    </div>
                    <div className = { this.state.showHealing ? "healingInput show" : "healingInput"}>
                        <span>Healing Received</span>
                        <input 
                            className = "updateInput"
                            type = "number"
                            placeholder = "Amount"
                            onChange = { this.handleHealUpdate }
                        />
                        <button
                            className = "healingBtn"
                            onClick = {() => { this.props.handleHeal(this.props.id, this.state.newHealNumber) }}
                        >
                            Heal
                        </button>
                    </div>
                    <div className = { this.state.showDamage ? "damageInput show" : "damageInput"}>
                    <span>Damage Taken</span>
                        <input 
                            className = "updateInput"
                            type = "number"
                            placeholder = "Amount"
                            onChange = { this.handleDamageUpdate }
                        />
                        <button
                            className = "damageBtn"
                            onClick = {() => { this.props.handleDamage(this.props.id, this.state.newDamageNumber) }}
                        >
                            Hit
                        </button>
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