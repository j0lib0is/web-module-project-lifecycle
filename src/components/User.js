import React from 'react';

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
					<img src={user.avatar_url} />
					<h1>{user.name}</h1>
					<p>{user.bio}</p>
					<div>
						<h4>Total Repos: {user.public_repos}</h4>
						<h4>Total Followers: {user.followers}</h4>
					</div>
					{followers.length === 0 ? <p>Hmm... looks like this user doesn't have any followers.</p> : <FollowersList followers={followers} />}
				</div>
			</div>
		);
	}
}

export default User;