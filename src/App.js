import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  // Hold both the current user, user and follower state within the App.js component.
  state = {
    user: '',
    followers: [],
    search: '',
  }

  // Load the current user state into the user state on mount.
  componentDidMount() {
    axios.get('https://api.github.com/users/brianlovin')
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data,
        })
      })
      .catch(err => console.error(err));
  }

  // Load the current user's followers into state when the current user state is updated.
  componentDidUpdate() {
    console.log(this.state.user);
  }

  // Build function to handle the input field
  handleChange = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value,
    });
  }

  // Load the the user and follower information of the username typed into a form when submitted.
  handleSearch = (event) => {
    // Prevent default
    event.preventDefault();
    // Store search input
    const username = this.state.search;
    // Fetch user object
    axios.get(`https://api.github.com/users/${username}`)
      .then(resp => {
        this.setState({
          ...this.state,
          // Set user to the searched user
          user: resp.data,
          // Reset search value
          search: event.target.reset(),
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange}></input>
          <button>Search</button>
        </form>
        <User user={this.state.user}/>
        <FollowerList />
      </div>
    );
  }
}

export default App;
