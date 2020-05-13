import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            followers: [],
            url: []
        };
    }

    componentDidUpdate() {
        if(this.props.followers !== this.state.url) {
            console.log('IN mouny', this.props.followers);
            axios.get(this.props.followers)
                .then(response => this.setState({followers: response.data,
                                                url: this.props.followers}))
                .catch(error => (console.log(error)));
        }
    }

    render() {
        console.log('Followers Request', this.state.followers);
        console.log('Followers from props:', this.props.followers);
        console.log('URL from state:', this.state.url);

        return (
            <div>
                <h1>Hello</h1>
                { this.state.followers.map( follower => <button key={follower.id}>{follower.login}</button> )}
            </div>
        )
    }
}

export default Followers;