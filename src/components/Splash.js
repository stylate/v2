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
        <Text>
          hello, i'm alan! i'm a software engineer and{" "}
          <a href="https://alandn.me">photographer</a> based in new york.
        </Text>
        <Text>
          right now, i am interested in: web3, avant-garde fashion, internet art, and music production.
        </Text>
        <Text>
            i can be found elsewhere @ <a href="https://instagr.am/badgesture">instagram</a> and <a href="https://are.na/alan">are.na</a>.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Splash;
