import React, { Component } from 'react';
import axios from 'axios';
import Playlist from './Playlist'
import UserEdit from './UserEdit'
import styled from 'styled-components'

//const UserStyle = styled.div`
//    display: flex;
//    flex-direction: column;
//    justify-content: space-around;
//    align-items: center;
//`

class UserPage extends Component {

    state = {
        playlists: []
    }

    async componentWillMount() {
        try {
            const userId = this.props.currentUser.id
            const res = await axios.get(`/api/users/${userId}/playlists`)
            this.setState({ playlists: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.currentUser.username}'s Page</h1>
                <Playlist currentUser={this.props.currentUser} playlists={this.state.playlists} />
                <UserEdit
                    currentPlaylist={this.props.currentPlaylist}
                    currentUser={this.props.currentUser}
                    playlists={this.state.playlists}
                    setCurrentPlaylist={this.props.setCurrentPlaylist} />
            </div>
        );
    }
}

export default UserPage;