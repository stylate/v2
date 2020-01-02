import React, { useEffect } from "react";
import anime from "animejs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Projects from "../assets/projects.json";

// pages
import { ClothSim } from "../routes";

// todo: routes, project components

// css - todo: animations/hover
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
  font-size: ${props => (props.size === "small" ? 12 : 16)}px;
  line-height: ${props => (props.size === "small" ? 0.3 : 1.5)}em;
  margin-bottom: 20px;
  width: 100%;
`;

const Link = styled.a`
  color: inherit;
`;

const routes = [
  {
    path: "/clothsim",
    sidebar: () => (
      <div>
        <ClothSim />
      </div>
    )
  }
];

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
    <Router>
      <Wrapper>
        <Content>
          <Header>alan nguyen</Header>
          <Text>
            recently studied computer science at UC Berkeley. currently, i'm
            interested in computer graphics and{" "}
            <Link href="https://en.wikipedia.org/wiki/Creative_coding">
              creative coding
            </Link>
            {""}
            —particularly their interactions with digital media (music, images).
          </Text>
          <Text>
            in my spare time, i shoot lots of{" "}
            <Link href="https://alandn.me">
              <u>photos</u>
            </Link>
            , watch too many{" "}
            <Link href="https://soundcloud.com/stylate">
              <u>movies</u>
            </Link>
            , and make{" "}
            <Link href="https://soundcloud.com/stylate">
              <u>music</u>
            </Link>
            . sort of. i also read up a little bit too much on fashion.
          </Text>
          <Text size="small">previously >> akamai, fox networks</Text>
          <Text size="small">
            cv >>{" "}
            <Link href="/">
              <u>here</u>
            </Link>
          </Text>
          <Text size="small">
            <Link href="https://github.com/stylate">
              <Icon name="github" size="large" />
            </Link>
            <Link href="https://www.linkedin.com/in/alandn/">
              <Icon name="linkedin" size="large" />
            </Link>
          </Text>
          <Text>projects >></Text>
          <Items items={Projects} />
        </Content>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} children={<route.sidebar />} />
          ))}
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default Splash;
