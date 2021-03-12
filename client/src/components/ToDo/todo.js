import React from "react";

import {
  Card,
  Feed,
  Grid,
  Container,
  Input,
  Checkbox,
  Form,
} from "semantic-ui-react";

const CardExampleContentBlock = () => (
  <Container>
    <Grid divided="vertically" floated="center" textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header textAlign="left" className="todo">
                To Do List:
                <Input placeholder="Add..." />
              </Card.Header>
            </Card.Content>
            <Card.Content textAlign="left">
              <Form>
                <Form.Field>
                  <Checkbox
                    controll={Checkbox}
                    label={<label>Go for a run</label>}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    controll={Checkbox}
                    label={<label>Eat more veggies</label>}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    controll={Checkbox}
                    label={<label>Walk 10,000 steps</label>}
                  />
                </Form.Field>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default CardExampleContentBlock;
