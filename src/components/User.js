import React from 'react';

// import Follower from './components/Follower';

class User extends React.Component {
	render() {
		// Extract user object from props
		const { user } = this.props;

		return(
			<div>
				<img src={user.avatar_url} />
				<h1>{user.name}</h1>
				<p>{user.bio}</p>
				<div>
					<h4>Total Repos: {user.public_repos}</h4>
					<h4>Total Followers: {user.followers}</h4>
				</div>
			</div>
		);
	}
}

export default User;