import React from 'react';
import styled from 'styled-components';

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
    const changeUser = (e) => {
        e.preventDefault();
        const searchbar = document.getElementById('searchbar');
        window.location.pathname = `/${searchbar.value}`;

    }

    return (
        <NavbarContainer>
            <form onSubmit={changeUser}>
                <Searchbar id="searchbar" type="text" placeholder="Type GitHub username and press enter"/>
            </form>
        </NavbarContainer>
    );
}

export default Navbar;
