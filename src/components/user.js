import React from 'react';
import axios from 'axios';
import Followers from './followers.js';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: 'Mike'
            }
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/mbrady4')
            .then( response => this.setState({user: response.data}))
            .catch( error => console.log(error));
    }

    render() {
        console.log('This is the response data', this.state.user)
        return (
            <div>
                <img src={this.state.user.avatar_url} alt='user-headshot' />
                <h1>{this.state.user.login}</h1>
                <ul>
                    <li>Following: {this.state.user.following}</li>
                    <li>Public Repos: {this.state.user.public_repos}</li>
                    <li>Profile URL: {this.state.html_url}</li>
                </ul>
                { (this.state.user.followers_url === null)
                    ? <h1>Loading..</h1>
                    : <Followers followers={this.state.user.followers_url} />
                }
                
            </div>
        )
    }
}

export default User;