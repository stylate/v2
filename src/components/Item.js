import React from "react";
import styled from "styled-components";
import { Grid, Segment } from "semantic-ui-react";

// use grid to create a box

const ItemBox = styled(Segment)`
`;

const Item = props => {
  return (
    <Segment.Group compact>
      <ItemBox>hello</ItemBox>
    </Segment.Group>
  );
};

export default Item;
