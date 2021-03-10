import React from "react";
import Draggable, {handleStart, handleDrag, handleStop}from "react-draggable";
import { Card, Image } from "semantic-ui-react";

function TopCards() {
  return (
    <Draggable
      axis='x'
      handle='.handle'
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' src='' />
            <Card.Header>Current Weight</Card.Header>
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' src='' />
            <Card.Header>Ideal Weight</Card.Header>
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image floated='right' src='' />
            <Card.Header>Calorie Intake</Card.Header>
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </Draggable>
  );
}

export default TopCards;
