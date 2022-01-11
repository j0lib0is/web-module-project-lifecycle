import React from 'react';

class Follower extends React.Component {
	componentDidMount() {
		// console.log('Follower: mounted');
	}

	render() {
		// console.log('Follower: rendered');
		return(
			<div>
				<p>{this.props.user.login}</p>
			</div>
		);
	}
}

export default Follower;