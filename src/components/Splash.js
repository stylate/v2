import React from "react";
import styled from "styled-components";
import { Grid, Container, Header, Image, List } from "semantic-ui-react";

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
      <Container text>
        <p>
          website under construction! please tune in some other time. 
        </p>
        </Container>
    </Wrapper>
  );
}

export default Splash;
