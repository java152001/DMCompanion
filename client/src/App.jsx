import React, { Component } from 'react'
// import axios from 'axios'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Inttracker from './pages/Initiativetracker'
import { NavBar } from './components'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}		
	};

	componentDidMount() {
	};

	render() {
		return (
			<div className="">
				{/* Navbar on every page */}
				<NavBar
				/>
				{/*  Individual Things */}
				<Route
					exact
					path="/"
					render={() =>
						<Home user={this.state.user} />} 
				/>
				<Route
					exact path="/inttracker"
					render={() => <Inttracker />}
				/>
			</div>
		)
	}
}

export default App
