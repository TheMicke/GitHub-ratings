import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import UserProfile from './components/UserProfile/UserProfile';

const AppContainer = styled.div`
    text-align: center;
    background-color: #fff;
`;

const PageContainer = styled.div`
    margin: auto;
    max-width: 1280px;
`;

function App() {
    return (
        <main>
            <AppContainer>
                <Header />
                <PageContainer>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:username" component={UserProfile} />
                    </Switch>
                </PageContainer>
            </AppContainer>
        </main>
    );
}

export default App;
