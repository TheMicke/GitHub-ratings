import React from 'react';
import styled from 'styled-components';
import './user-profile.css';
import heart_black from '../../images/heart_black.svg';
import heart_red from '../../images/heart_red.svg';

const HeartIcon = styled.img`
    height: auto;
    width: 25px;
    margin-bottom: -5px;
    margin-right: 5px;
`;

function UserProfileContent(props) {
    return (
        <div className="user-profile__content-container">
            <div className="user-profile__content-box user-profile__left-box">
                <img className="user-profile__profile-image" src={props.user.avatar_url} />
            </div>

            <div className="user-profile__content-box user-profile__right-box">
                <h2><a href={props.user.html_url}>{props.user.login}</a></h2>
                <p><span className="user-profile__heading">Profile created: </span>{props.user.created_at.split('T')[0]}</p>
                <p><span className="user-profile__heading">Last updated: </span>{props.user.updated_at.split('T')[0]}</p>
                <p><span className="user-profile__heading">Public repos: </span>{props.user.public_repos}</p>
                <p><span className="user-profile__heading">Followers: </span>{props.user.followers}</p>
                <p><span className="user-profile__heading">Following: </span>{props.user.following}</p>
                <p><a href={'/users/' + props.user.login + '/like'}><HeartIcon src={heart_black} /></a> { props.likes } 3</p> //Should read likes from "db"
            </div>
        </div>
    )
}

export default UserProfileContent;