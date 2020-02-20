import React from 'react';
import styled from 'styled-components';
import './user-profile.css';
// import heart_black from '../../images/heart_black.svg';
import heart_red from '../../images/heart_red.svg';

const HeartIcon = styled.img`
    height: auto;
    width: 25px;
    margin-bottom: -5px;
    margin-right: 5px;
`;


function UserProfileContent(props) {
    console.log(props);
    const addLike = (event) => {
        event.preventDefault();
        fetch('/api/users/' + props.data.user.login, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {
                "userId": props.data.user.id,
                "username": props.data.user.login
            }
        });
        console.log('liked');
    };

    return (
        <div className="user-profile__content-container">
            <div className="user-profile__content-box">
                <img className="user-profile__profile-image" src={props.data.user.avatar_url} alt="avatar" />
            </div>

            <div className="user-profile__content-box">
                <h2><a href={props.data.user.html_url}>{props.data.user.login}</a></h2>
                <p><span className="user-profile__heading">Profile created: </span>{props.data.user.created_at.split('T')[0]}</p>
                <p><span className="user-profile__heading">Last updated: </span>{props.data.user?.updated_at.split('T')[0]}</p>
                <p><span className="user-profile__heading">Public repos: </span>{props.data.user.public_repos}</p>
                <p><span className="user-profile__heading">Followers: </span>{props.data.user.followers}</p>
                <p><span className="user-profile__heading">Following: </span>{props.data.user.following}</p>
                <p><a href="#like" onClick={addLike}><HeartIcon src={heart_red} /></a> { props.data.likes }</p>
            </div>
        </div>
    )
}

export default UserProfileContent;