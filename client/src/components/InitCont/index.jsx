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

        if (updatedParticipantsNumber !== this.state.participantsNumber) {
            this.setState({
                participants: newProps.participants,
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
                            id = {participant.id}
                            delete = {this.removeBtn}
                            addOne = {this.props.addOne}
                            addFive = {this.props.addFive}
                            decOne = {this.props.decOne}
                            decFive = {this.props.decFive}
                        />
                    ))
                }
            </div>
        )
    }

}