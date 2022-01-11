import React from 'react';
import '../index.css';

import FollowersList from './FollowerList';

class User extends React.Component {
	componentDidMount() {
		// console.log('User: mounted');
	}
	render() {
		// console.log('User: rendered');

		const { user, followers } = this.props;

		return(
			<div>
				<div className='userCard'>
					<img src={user.avatar_url} className='userAvatar'/>
					<div className='userStats'>
						<h1>{user.name}</h1>
						<p>{user.bio}</p>
						<h4>Total Repos: {user.public_repos}</h4>
						<h4>Total Followers: {user.followers}</h4>
					</div>
				</div>
				{followers.length === 0 ? <p>Hmm... looks like this user doesn't have any followers.</p> : <FollowersList followers={followers} />}
			</div>
		);
	}
}

export default User;