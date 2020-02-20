import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';


const AppHeader = styled.header`
    background-color: #37393a;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function Header() {
    return (
        <>
            <AppHeader />
            <Navbar />
        </>
    );
}

export default Header;