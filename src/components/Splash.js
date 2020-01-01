import React, { useEffect } from "react";
import anime from "animejs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from './Items';
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

// homepage with routes

// css - todo: animations/hover
const Wrapper = styled.div`
  padding: 45px;
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
  font-size: ${props => (props.size === "small" ? 12 : 16)}px;
  line-height: ${props => (props.size === "small" ? 0.3 : 1.5)}em;
  margin-bottom: 20px;
  width: 100%;
`;

const Link = styled.a`
  color: inherit;
`;

const Splash = () => {
  useEffect(() => {
    anime({
      targets: Wrapper,
      opacity: [0, 100],
      delay: 2000,
      easing: "easeInOutExpo",
      duration: 3000
    });
  }, []);
  return (
    <Wrapper>
      <Content>
        <Header>alan nguyen</Header>
        <Text>
          recently graduated from UC Berkeley, studying computer science.
          interests lie heavily within digital media, social good, and computer
          graphics. also shoots a lot of{" "}
          <Link href="https://alandn.me">photos</Link>.
        </Text>
        <Text size="small">previously >> akamai, fox networks</Text>
        <Text size="small">
          cv >> <Link href="/">here</Link>
        </Text>
        <Items />
        <Text size="small">
          <Icon name="github" size="large" />
          <Icon name="linkedin" size="large" />
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Splash;
