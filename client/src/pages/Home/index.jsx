import React, { Component } from 'react';
import { Header } from '../../components';
import Month from '../../components/Month';
import Year from '../../components/Year';
import Form from '../../components/Form';
import Entry from '../../components/Entry'
import "./home.css";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedDate: '',
			selectedMonth: '',
			selectedYear: 1469,
			eventData: [],
			showForm : false,
			months: [
				{ name: "Hammer",
				commonName: "Deepwinter"},
				{ name: "Alturiak",
				commonName: "The Claw of Winter"},
				{ name: "Ches",
				commonName: "The Claw of Sunsets"},
				{ name: "Tarsakh",
				commonName: "The Claw of Storms"},
				{ name: "Mirtul",
				commonName: "The Melting"},
				{ name: "Kythorn",
				commonName: "The Time of Flowers"},
				{ name: "Flamerule",
				commonName: "Summertide"},
				{ name: "Eleasias",
				commonName: "Highsun"},
				{ name: "Eleint",
				commonName: "The Fading"},
				{ name: "Marpenoth",
				commonName: "Leaffall"},
				{ name: "Uktar",
				commonName: "The Rotting"},
				{ name: "Nightal",
				commonName: "The Drawing Down"}
			]
		}
		this.dayClick = this.dayClick.bind(this);
		this.updateEvents = this.updateEvents.bind(this);
		this.yearClick = this.yearClick.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	dayClick(month, date) {
		this.setState({
			selectedMonth: month,
			selectedDate: date
		})
	}

	showForm() {
		const currentState = this.state.showForm;
		this.setState({ showForm: !currentState })
	}

	yearClick(year) {
		this.setState({
			selectedYear : year
		})
	}
 
	updateEvents(data) {
		console.log(data);
		this.setState({
			eventData: data
		})
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	render() {
		return (
			<div className="Home">
				<Header />
				<div className = "titleCont">
					<h1 className = "title">Calendar of Harptos</h1>
				</div>
				<div className="divider"></div>
				<div className = "yearCont">
					<Year
						year = {this.state.selectedYear}
						yearChange = {this.yearClick}
					/>
				</div>
				<div className = "monthCont">
					{this.state.months.map(month => (
						<Month
							name = {month.name}
							commonName = {month.commonName}
							changeDate = {this.dayClick}
							updateEventData = {this.updateEvents}
						/>
					))}
				</div>
				<div className="inputCont">
					<div className = "entryCont">
						<div className = "topEntry">
							<div className = "entryDate">
								<h3 className = "month">{this.state.selectedMonth}</h3>
								<h3 className = "day">{this.state.selectedDate}</h3>
							</div>
							<div className = "newEntry"
								onClick = {this.showForm}
							>
								<h4>New Entry</h4>
							</div>
						</div>
						<div className="bottomEntry">
							{this.state.eventData.map(entry => (
								<Entry
									year = {entry.year}
									event = {entry.entry}
								/>
							))}
						</div>
					</div>
					<Form 
						showForm = {this.state.showForm}
						month = {this.state.selectedMonth}
						day = {this.state.selectedDate} 
						year = {this.state.selectedYear}
					/>
				</div>
			</div>
		)
	}

}
