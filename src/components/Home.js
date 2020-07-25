import React, { useEffect } from "react";
import anime from "animejs";
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

const Home = () => {
  useEffect(() => {
    anime({
      targets: Layout,
      opacity: [0, 1],
      delay: 2000,
      easing: "easeInOutExpo",
      duration: 3000
    });
  }, []);
  return (
    <Layout>
      <Splash />
    </Layout>
  );
};

export default Home;
