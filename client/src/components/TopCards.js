import React from "react";
import { Card, Icon, Container } from "semantic-ui-react";

function TopCards() {
  return (
    <Container>
      <Card.Group>
        <Card>
          <Card.Content>
            <Icon name='weight' size='huge' inverted color='grey' />
            <Card.Header>Current Weight</Card.Header>
            {/* the current weight will actually be data pulled from the user */}
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Icon name='trophy' size='huge' inverted color='grey' />
            <Card.Header>Ideal Weight</Card.Header>
            {/* the ideal weight will actually be data pulled from the user */}
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Icon name='food' size='huge' inverted color='grey' />
            <Card.Header>Calorie Intake</Card.Header>
            {/* the calorie intake will actually be data pulled from the user */}
            <Card.Meta>Calories</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default TopCards;
