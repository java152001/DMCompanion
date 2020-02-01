import React, { Component } from 'react';
import InitCard from "../../components/InitCard";
import "./initiative.css";

export default class Initiativetracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newName: '',
            newRoll: 0,
            participants: [
                {
                    name: "Javanator",
                    roll: 12
                },
                {
                    name: "Sassywaifu",
                    roll: 14
                },
                {
                    name: "Goblin Ringleader",
                    roll: 7
                },
                {
                    name: "Goblin Henchman",
                    roll: 9
                }
            ]
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRoll = this.handleChangeRoll.bind(this);
        this.addButton = this.addButton.bind(this);
        this.removeBtn = this.removeBtn.bind(this);
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

    addButton() {
        const participantList = this.state.participants;

        participantList.push({name: this.state.newName, roll: this.state.newRoll});

        this.setState({
            participants: participantList
        })
    }

    removeBtn(i) {
        const participantList = this.state.participants;

        participantList.splice(i, 1);

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
                    <button 
                        className="addBtn"
                        onClick = {this.addButton}
                    >
                        +
                    </button>
                </div>
                <div className="main-cont">
                    {this.state.participants
                    .sort((a, b) => b.roll - a.roll)
                    .map((participant, i) => (
                        <InitCard
                            name = {participant.name}
                            roll = {participant.roll}
                            key = {i}
                            number = {i}
                            delete = {this.removeBtn}
                        />
                    ))}
                </div>
            </div>
        )
    }

}