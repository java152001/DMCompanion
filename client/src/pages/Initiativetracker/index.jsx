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
            newMulti: 1,
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
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.handleUpdateRoll = this.handleUpdateRoll.bind(this);
        this.addButton = this.addButton.bind(this);
        this.checkDeath = this.checkDeath.bind(this);
        this.checkMax = this.checkMax.bind(this);
        this.handleHeal = this.handleHeal.bind(this);
        this.handleDamage = this.handleDamage.bind(this);
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

    handleUpdateRoll(id, updatedRoll) {
        console.log(id);

        let newRoll = this.state.participants.map((participant) => {
            if (participant.id === id) {
                participant.roll = updatedRoll
            }
            return participant
        })

        this.setState({
            participants: newRoll
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

    handleMultiChange(e) {
        this.setState({
            newMulti: parseInt(e.target.value)
        })
    }

    clearInputs() {
        this.setState({
            newHP : 0,
            newAlignment : "",
            newName : "",
            newRoll : 0        
        })

        document.body.querySelector("#name").value = "";
        document.body.querySelector(".alignmentSelect").value = "type";
        document.body.querySelector("#hp").value = "";
        document.body.querySelector("#roll").value = "";

        console.log('clear fired');
    }
 
    addButton() {
        const participantList = this.state.participants;

        let id = this.state.currId;

        if(this.state.newMulti > 1) {
            for (let i = 1; i <= this.state.newMulti; i++) {
                id++;
                participantList.push({name: this.state.newName, roll: parseInt(this.state.newRoll), hpMax: parseInt(this.state.newHP), hpCurrent: parseInt(this.state.newHP), alignment: this.state.newAlignment, id: id});
            }

            this.setState({
                participants: participantList,
                currId: id
            })
        }
        else {
            id++;

            participantList.push({name: this.state.newName, roll: parseInt(this.state.newRoll), hpMax: parseInt(this.state.newHP), hpCurrent: parseInt(this.state.newHP), alignment: this.state.newAlignment, id: id});

            this.setState({
                participants: participantList,
                currId: id
            });
        }
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

    handleHeal = (id, healAmount) => {
        let newHp = this.state.participants.map((participant) => {
            if (participant.id === id) {
                let hpNow = participant.hpCurrent;
                hpNow = hpNow + healAmount;
                if (this.checkMax(hpNow, participant.hpMax)) {
                    participant.hpCurrent = participant.hpMax;
                }
                else {
                    participant.hpCurrent = hpNow;
                }                
            }
            return participant;
        })

        this.setState({
            participants: newHp
        })

        console.log('heal handled')
    }

    handleDamage = (id, damageAmount) => {
        let newHp = this.state.participants.map((particpant) => {
            if (particpant.id === id) {
                let hpNow = particpant.hpCurrent;
                hpNow = hpNow - damageAmount;
                if (this.checkDeath(hpNow)) {
                    particpant.hpCurrent = 0;
                }
                else {
                    particpant.hpCurrent = hpNow;
                }
                console.log('id filtering worked')
            }
            return particpant;
        })

        this.setState({
            participants : newHp
        })
    }

    render() {
        return (
            <div className="intTracker">
                <div className="newEntry">
                    <select
                        className = "alignmentSelect"
                        onChange = {this.handleAlignmentChange}
                    >
                        <option selected disabled value="type">Type</option>
                        <option value="good">Ally</option>
                        <option value="evil">Enemy</option>
                    </select>
                    <input
                        id = "name"
                        type="text"
                        placeholder = "Name"
                        onChange = {this.handleChangeName}
                    />
                    <input
                        id = "hp"
                        type="number"
                        placeholder = "Max HP"
                        onChange = {this.handleChangeHP}
                    />
                    <input 
                        id = "roll"
                        type="number"
                        placeholder = "Roll"
                        onChange = {this.handleChangeRoll}
                    />
                    {/* <input
                        type="number"
                        placeholder = "1"
                        defaultValue = {1}
                        onChange = {this.handleMultiChange}
                    /> */}
                    <div 
                        className="addBtn"
                        onClick = {this.addButton}
                    >
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className="clearBtn"
                        onClick = { this.clearInputs }
                    >
                        <i class="fas fa-redo-alt"></i>
                        <span>Clear</span>
                    </div>
                </div>
                <div className="main-cont">
                    <InitCont
                        participants = {this.state.participants}
                        handleDamage = { this.handleDamage }
                        handleHeal = { this.handleHeal }
                        handleUpdateRoll = { this.handleUpdateRoll }
                    />
                </div>
            </div>
        )
    }

}