import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// homepage with routes

// css
const Wrapper = styled.div`
    min-width: 540px;
    max-width: 700px;
    padding: 64px;
    margin-left: 70px;
    font-weight: 100;
`;
const Content = styled.div``;

const Header = styled.h1`
  font-family: bjpg;
  font-size: 48px;
  font-weight: inherit;
  letter-spacing: 1.2px;
  opacity: 0.9;
`

const Text = styled.div`
  font-size: ${(props) => props.size === 'small' ? 12 : 16}px;
  line-height: ${(props) => props.size === 'small' ? 0.3 : 1.5}em;
  margin-bottom: 20px;
  width: 80%;
`;

const Splash = () => (
    <Wrapper>
        <Content>
            <Header>hello </Header>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Content>
    </Wrapper>

)

export default Splash;