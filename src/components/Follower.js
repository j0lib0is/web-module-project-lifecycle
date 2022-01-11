import React from 'react';
import '../index.css';

class Follower extends React.Component {
	componentDidMount() {
		// console.log('Follower: mounted');
	}

	render() {
		// console.log('Follower: rendered');
		return(
			<div>
				<div className='followerCard'>
					<div className='followerInfo'>
						<img src={this.props.user.avatar_url} className='userAvatar'/>
						<h4>{this.props.user.login}</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Follower;