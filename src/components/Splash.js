import React from "react";
import Items from "./Items";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Projects from "../assets/projects.json";
import resume from "../assets/resume.pdf";

const Wrapper = styled.div`
  padding: 45px;
  margin-left: 7%;
`;

const Content = styled.div`
  opacity: 0.9;
`;

const Header = styled.h1`
  font-family: "EB Garamond", serif;
  font-size: 40px;
  font-weight: inherit;
  letter-spacing: 1.2px;
`;

const List = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-left: -30px;
`;

const Text = styled.div`
  font-family: "Inconsolata", monospace;
  font-size: ${props => (props.size === "small" ? 12 : 18)}px;
  line-height: ${props => (props.size === "small" ? 0.3 : 1.5)}em;
  margin-bottom: 20px;
  width: 100%;
`;

const Splash = () => {
  return (
    <Wrapper>
      <Content>
        <Header>hello!</Header>
        <Text>i'm alan, a software engineer based in new york.</Text>
        <Text>
          right now, i am interested in: blockchain, computer vision, and creative
          computing.
        </Text>
        <Text>
          currently——
          <List>
            <ListItem>
              software engineer @ <a href="https://circle.com">circle</a>
            </ListItem>
          </List>
          previously——
          <List>
            <ListItem>
              intern @ <a href="https://www.akamai.com/">akamai</a> and{" "}
              <a href="https://www.foxtv.es/">fox networks</a>
            </ListItem>
            <ListItem>
              photo lead and instructor @{" "}
              <a href="http://innovativedesign.club/">innovative design</a>
            </ListItem>
            <ListItem>
              web lead @{" "}
              <a href="http://www.baremagazine.org/">bare magazine</a>
            </ListItem>
            <ListItem>
              staff writer @ <a href="https://www.berkeleygarb.com/">garb</a>
            </ListItem>
          </List>
        </Text>
        <Text>
          likes: <a href="https://alandn.me">taking photos</a>, long distance
          running,{" "}
          <a href="https://letterboxd.com/carbine/">watching/analyzing films</a>
          , avant-garde/artisanal fashion,{" "}
          <a href="https://open.spotify.com/user/flexcy_?si=47IFPNABRUud-pcFcGo1pg">
            playlist making
          </a>
          .
        </Text>
        <Text size="small">
          <a href="https://github.com/stylate">
            <Icon name="github" size="large" />
          </a>
          <a href="https://www.linkedin.com/in/alandn/">
            <Icon name="linkedin" size="large" />
          </a>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Splash;
