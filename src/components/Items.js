import React from "react";
import styled from "styled-components";
import { Grid, Card } from "semantic-ui-react";

const Wrapper = styled.div`
  width: 80%;
  margin-left: 13px;
`;

const Row = styled(Grid.Row)`
  padding: 0px;
`;

const Items = props => {
  const { items } = props;
  return (
    <Wrapper>
      <Card.Group fluid items={items} />
    </Wrapper>
  );
};

export default Items;
