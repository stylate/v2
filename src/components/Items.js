import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <Card.Group fluid="true">
        {items.map((item, index) => (
          <Card key={index} as={Link} to={item.href}>
            <Card.Content>
              <Card.Header>{item.header}</Card.Header>
              <Card.Meta>{item.meta}</Card.Meta>
              <Card.Description>{item.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Wrapper>
  );
};

export default Items;
