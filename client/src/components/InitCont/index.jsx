import React, { Component } from 'react';
import InitCard from "../../components/InitCard";
import "./initCont.css";

export default class InitiativeTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: []
        }

        this.removeBtn = this.removeBtn.bind(this);
    }

    componentDidMount() {
        this.setState({
            participants: this.props.participants,
            participantsNumber: this.props.participants.length
        })
    }

    componentDidUpdate() {
        const newProps = this.props;
        let updatedParticipantsNumber = newProps.participants.length;
        console.log(newProps);

        if (updatedParticipantsNumber !== this.state.participantsNumber) {
            this.setState({
                participantsNumber: updatedParticipantsNumber
            })
        }
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
            <div className="initCont">
                {this.state.participants
                    .sort((a, b) => b.roll - a.roll)
                    .map((participant, i) => (
                        <InitCard
                            name = {participant.name}
                            hpMax = {participant.hpMax}
                            hpCurrent = {participant.hpCurrent}
                            roll = {participant.roll}
                            alignment = {participant.alignment}
                            participantNumber = {this.state.participantsNumber}
                            key = {i}
                            number = {i}
                            delete = {this.removeBtn}
                        />
                    ))
                }
            </div>
        )
    }

}