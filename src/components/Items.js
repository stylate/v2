import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import Item from "./Item";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 13px;
`;

const Items = props => {
  return (
    <Wrapper>
      <Grid rows="equal">
        <Grid.Row>
          <Item />
        </Grid.Row>
        <Grid.Row>
          <Item />
        </Grid.Row>
        <Grid.Row>
          <Item />
        </Grid.Row>
        <Grid.Row>
          <Item />
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default Items;
