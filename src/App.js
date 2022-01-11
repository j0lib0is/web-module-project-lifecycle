import React from 'react';
import axios from 'axios';

import './index.css';

import User from './components/User';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    search: '',
  }

  // Load the current user state into the user state on mount.
  componentDidMount() {
    // console.log('App: mounted');
    axios.get('https://api.github.com/users/brianlovin')
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data,
        })
        axios.get(`${resp.data.followers_url}`)
          .then(resp => {
            this.setState({
              ...this.state,
              followers: resp.data,
            })
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }

  // Load the current user's followers into state when the current user state is updated.
  componentDidUpdate(prevState) {
    // console.log('App: updated')
    const username = this.state.user.login;
    if(prevState.user !== this.state.user) {
      axios.get(`https://api.github.com/users/${username}/followers`)
      .then(resp => {
        this.setState({
          ...this.state,
          followers: resp.data,
        })
      })
      .catch(err => console.error(err));
    }
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
    event.preventDefault();
    const username = this.state.search;
    axios.get(`https://api.github.com/users/${username}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data,
          search: event.target.reset(),
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    // console.log('App: rendered');
    return(
      <div>
        <div className='container'>
          <h1>Github Info</h1>
          <form className='searchForm' onSubmit={this.handleSearch}>
            <input onChange={this.handleChange}></input>
            <button>Search</button>
          </form>
          <User user={this.state.user} followers={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default App;
