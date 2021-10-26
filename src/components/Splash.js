import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 45px;
  margin-top: 5%;
  margin-left: 7%;
`;

const Content = styled.div`
  opacity: 0.9;
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
          hello, i'm alan! i'm a developer and{" "}
          <a href="https://alandn.me">photographer</a> based in new york.
        </Text>
        <Text>
          i will eventually update this website, but right now...{" "}<br />
          i am interested in: web3, internet art, and music production.
        </Text>
        <Text>
            in the meantime, you can find me @ <a href="https://instagr.am/badgesture">instagram</a> and <a href="https://are.na/alan">are.na</a>.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Splash;
