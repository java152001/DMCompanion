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
            currId: 4,
            newAlignment: "good",
            participants: [
                {
                    name: "Javanator",
                    hpMax: 23,
                    hpCurrent: 20,
                    roll: 12,
                    alignment: "good",
                    id: 1
                },
                {
                    name: "Sassywaifu",
                    hpMax: 19,
                    hpCurrent: 19,
                    roll: 14,
                    alignment: "good",
                    id: 2
                },
                {
                    name: "Goblin Ringleader",
                    hpMax: 12,
                    hpCurrent: 12,
                    roll: 7,
                    alignment: "evil",
                    id: 3
                },
                {
                    name: "Goblin Henchman",
                    hpMax: 7,
                    hpCurrent: 5,
                    roll: 9,
                    alignment: "evil",
                    id: 4
                }
            ]
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRoll = this.handleChangeRoll.bind(this);
        this.handleChangeHP = this.handleChangeHP.bind(this);
        this.handleAlignmentChange = this.handleAlignmentChange.bind(this);
        this.addButton = this.addButton.bind(this);
        this.decOne = this.decOne.bind(this);
        this.decFive = this.decFive.bind(this);
        this.addOne = this.addOne.bind(this);
        this.addFive = this.addFive.bind(this);
        this.checkDeath = this.checkDeath.bind(this);
        this.checkMax = this.checkMax.bind(this);
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

    handleAlignmentChange(e) {
        this.setState({
            newAlignment: e.target.value
        })
    }

    addButton() {
        const participantList = this.state.participants;

        let id = this.state.currId + 1;

        participantList.push({name: this.state.newName, roll: parseInt(this.state.newRoll), hpMax: parseInt(this.state.newHP), hpCurrent: parseInt(this.state.newHP), alignment: this.state.newAlignment, id: id});

        this.setState({
            participants: participantList,
            currId: id
        });
    }

    checkDeath = (hp) => {
        if (hp <= 0 ) {
            return true
        }
    }

    checkMax = (hp, hpMax) => {
        if (hp >= hpMax) {
            return true
        }
    }

    decOne = (id) => {
        let newHp = this.state.participants.map((participant) => {
            if (participant.id === id) {
                let hpNow = participant.hpCurrent;
                hpNow--;
                if (this.checkDeath(hpNow)) {
                    participant.hpCurrent = 0;
                }
                else {
                    participant.hpCurrent = hpNow;
                }
            }
            return participant
        })

        this.setState({
            participants: newHp
        })
    }

    decFive = (id) => {
        let newHp = this.state.participants.map((participant) => {
            if (participant.id === id) {
                let hpNow = participant.hpCurrent;
                hpNow = hpNow - 5;
                if (this.checkDeath(hpNow)) {
                    participant.hpCurrent = 0;
                }
                else {
                    participant.hpCurrent = hpNow;
                }
            }
            return participant
        })

        this.setState({
            participants: newHp
        })
    }

    addOne = (id) => {
        let newHp = this.state.participants.map((participant) => {
            if (participant.id === id) {
                let hpNow = participant.hpCurrent;
                hpNow++;
                if (this.checkMax(hpNow, participant.hpMax)) {
                    participant.hpCurrent = participant.hpMax;
                }
                else {
                    participant.hpCurrent = hpNow;
                }
            }
            return participant
        })

        this.setState({
            participants: newHp
        })
    }

    addFive = (id) => {
        let newHp = this.state.participants.map((participant) => {
            if (participant.id === id) {
                let hpNow = participant.hpCurrent;
                hpNow = hpNow + 5;
                if (this.checkMax(hpNow, participant.hpMax)) {
                    participant.hpCurrent = participant.hpMax;
                }
                else {
                    participant.hpCurrent = hpNow;
                }
            }
            return participant
        })

        this.setState({
            participants: newHp
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
                    <select
                        class="alignmentSelect"
                        onChange = {this.handleAlignmentChange}
                    >
                        <option value="good" selected>Ally</option>
                        <option value="evil">Enemy</option>
                    </select>
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
                        decOne = { this.decOne }
                        decFive = { this.decFive }
                        addOne = { this.addOne }
                        addFive = { this.addFive }
                    />
                </div>
            </div>
        )
    }

}