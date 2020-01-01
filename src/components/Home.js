import React from "react";
import Splash from "./Splash";
import Three from "./Three";
import { Grid, Responsive } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Grid>
        <Grid.Column width={10}>
          <Splash />
        </Grid.Column>
        <Responsive minWidth={992}>
          <Grid.Column>
            <Three />
          </Grid.Column>
        </Responsive>
      </Grid>
    </Wrapper>
  );
};

export default Home;
