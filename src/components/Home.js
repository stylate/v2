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
      <Grid columns='equal'>
        <Grid.Column floated='left' mobile={16} computer={7}>
          <Splash />
        </Grid.Column>
        <Responsive minWidth={900}>
          <Grid.Column floated='right' width={9}>
            <Three />
          </Grid.Column>
        </Responsive>
      </Grid>
    </Layout>
  );
};

export default Home;
