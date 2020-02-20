import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../common/LoaderSpinner';
import UserProfileContent from './UserProfileContent';


function UserProfile(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState();
    
    useEffect(() => {
        (async function fetchData() {
            setIsLoading(true)
            await fetch(`/api/users/${props.match.params.username}`)
            .then(res => res.json())
            .then(data => setUserData(data));
            setIsLoading(false);
        })();
    }, [props.match.params.username]);

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : <UserProfileContent data={userData}/>}
        </div>
    )
}

export default UserProfile;