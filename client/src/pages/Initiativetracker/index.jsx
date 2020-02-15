import React, { Component } from 'react';
import InitCont from "../../components/InitCont";
import "./initiative.css";

export default class Initiativetracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newName: '',
            newRoll: 0,
            newHP: 0,
            participants: [
                {
                    name: "Javanator",
                    hpMax: 23,
                    hpCurrent: 20,
                    roll: 12,
                    alignment: "good"
                },
                {
                    name: "Sassywaifu",
                    hpMax: 19,
                    hpCurrent: 19,
                    roll: 14,
                    alignment: "good"
                },
                {
                    name: "Goblin Ringleader",
                    hpMax: 12,
                    hpCurrent: 12,
                    roll: 7,
                    alignment: "evil"
                },
                {
                    name: "Goblin Henchman",
                    hpMax: 7,
                    hpCurrent: 5,
                    roll: 9,
                    alignment: "evil"
                }
            ]
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRoll = this.handleChangeRoll.bind(this);
        this.handleChangeHP = this.handleChangeHP.bind(this);
        this.addButton = this.addButton.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            newName: e.target.value
        })
    }

    handleChangeRoll(e) {
        this.setState({
            newRoll: e.target.value
        })
    }

    handleChangeHP(e) {
        this.setState({
            newHP: e.target.value
        })
    }

    addButton() {
        const participantList = this.state.participants;

        participantList.push({name: this.state.newName, roll: parseInt(this.state.newRoll), hpMax: parseInt(this.state.newHP), hpCurrent: parseInt(this.state.newHP)});

        this.setState({
            participants: participantList
        })
    }

    render() {
        return (
            <div className="intTracker">
                <div className="newEntry">
                    <input
                        type="text"
                        placeholder = "name"
                        onChange = {this.handleChangeName}
                    />
                    <input 
                        type="number"
                        placeholder = "roll"
                        onChange = {this.handleChangeRoll}
                    />
                    <input
                        type="number"
                        placeholder = "Max HP"
                        onChange = {this.handleChangeHP}
                    />
                    <div 
                        className="addBtn"
                        onClick = {this.addButton}
                    >
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
                <div className="main-cont">
                    <InitCont
                        participants = {this.state.participants}
                    />
                </div>
            </div>
        )
    }

}