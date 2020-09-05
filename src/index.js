import './style';
import { Component } from 'preact';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {}
	render() {
		return (
			<div>
				<h1>Hello from Preact!</h1>
			</div>
		);
	}
}
