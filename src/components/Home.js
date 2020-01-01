import React from "react";
import Splash from "./Splash";
import Three from "./Three";
import { Grid, Responsive } from "semantic-ui-react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// ignore three for now

const Home = () => {
  return (
    <Layout>
      <Grid doubling columns={2}>
        <Grid.Column>
          <Splash />
        </Grid.Column>
        <Responsive minWidth={5000}>
          <Grid.Column>
            <Three />
          </Grid.Column>
        </Responsive>
      </Grid>
    </Layout>
  );
};

export default Home;
