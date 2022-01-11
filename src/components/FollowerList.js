import React from 'react';
import '../index.css';

import Follower from './Follower';

class FollowersList extends React.Component {
	componentDidMount() {
		// console.log('FollowerList: mounted');
	}

	render() {
		// console.log('FollowerList: rendered');
		return(
			<div>
				<h1>Followers</h1>
				<div className='followersList'>
					{this.props.followers.map((user) => (
						<Follower user={user} key={user.id} />
					))}
				</div>
			</div>
		);
	}
}

export default FollowersList;