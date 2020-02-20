import React, { useState } from 'react';
import styled from 'styled-components';
import DefaultButton from '../common/DefaultButton';

const NavbarContainer = styled.div`
    background-color: #37393a;
    width: 100%;
    height: 51px;
    margin-top: -1px;
    margin-bottom: 50px;
`;

const Searchbar = styled.input`
    width: 90%;
    max-width: 350px;
    height: 40px;
`;

function Navbar() {
    return (
        <NavbarContainer>
            {/* <DefaultButton href="/" text="Home" /> */}
            <Searchbar type="text" placeholder="Type GitHub username and press enter"/>
        </NavbarContainer>
    );
}

export default Navbar;
