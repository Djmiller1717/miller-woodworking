import React from "react"
import axios from 'axios'
//import any sub-components

export default class App extends React.Component {
	//constructor to initialize state
	constructor(){
		super()
		this.state = {
			items: []
		}
	}
	async componentDidMount(){
		try {
			const response = await axios.get('/api/items')
			this.setState({items: response.data})
		} catch (err) {
			console.log(err)
		}
	}
	render(){
		return (
			<div>
				{this.state.items.map(item => {
					return (
					<h1>{item.name}</h1>
					)
				})}
			</div>
		)
	}
	//any lifecycle methods
	//any custom methods
	//render
}
