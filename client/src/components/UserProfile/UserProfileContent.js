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

const VisitGithubLink = styled.p`
    line-height: .75;
    margin-top: -15px;
`;

function UserProfileContent(props) {
    console.log('props from userProfile', props);
    const addLike = (event) => {
        event.preventDefault();
        fetch('/api/' + props.data.user.id, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {}
        });
    };

    return (
        <div className="user-profile__content-container">
            <div className="user-profile__content-box">
                <img className="user-profile__profile-image" src={props.data.user.avatar_url} alt="avatar" />
            </div>

            <div className="user-profile__content-box">
                <a href={props.data.user.html_url} target="_blank" rel="noopener noreferrer" >
                    <h2>{props.data.user.login}</h2>
                    <VisitGithubLink>Visit GitHub</VisitGithubLink>
                </a>
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