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
  font-size: 48px;
  font-weight: inherit;
  letter-spacing: 1.2px;
`;

const Text = styled.div`
  font-family: "Overpass Mono", monospace;
  font-size: ${props => (props.size === "small" ? 12 : 16)}px;
  line-height: ${props => (props.size === "small" ? 0.3 : 1.5)}em;
  margin-bottom: 20px;
  width: 100%;
`;

const Splash = () => {
  return (
    <Wrapper>
      <Content>
        <Header>alan nguyen</Header>
        <Text>
          recently studied computer science at UC Berkeley. currently, i'm
          interested in computer graphics and{" "}
          <a href="https://en.wikipedia.org/wiki/Creative_coding">
            creative coding
          </a>
          {""}
          —particularly their interactions with digital media (music, images).
        </Text>
        <Text>
          in my spare time, i shoot lots of{" "}
          <a href="https://alandn.me">photos</a>, watch too many{" "}
          <a href="https://letterboxd.com/carbine/">movies</a>, and
          read up a little bit too much on fashion.
        </Text>
        <Text size="small">previously >> akamai, fox networks</Text>
        <Text size="small">
          cv >> <a href={resume}>here</a>
        </Text>
        <Text size="small">
          <a href="https://github.com/stylate">
            <Icon name="github" size="large" />
          </a>
          <a href="https://www.linkedin.com/in/alandn/">
            <Icon name="linkedin" size="large" />
          </a>
        </Text>
        <Text>projects >></Text>
        <Items items={Projects} />
      </Content>
    </Wrapper>
  );
};

export default Splash;
