import React from 'react'
import './header.css'

const HeaderComponent = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} 
	
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export const Header = React.memo(HeaderComponent);