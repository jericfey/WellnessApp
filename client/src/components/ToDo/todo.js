import React from "react";
import FormInput from "../ToDo/input";
import {
  Card,
  Grid,
  Container,
  Checkbox,
  Form,
  Segment,
} from "semantic-ui-react";

const CardExampleContentBlock = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment color="blue">
          <Card.Content>
            <Card.Header textAlign="left" className="todo">
              To Do List:
              <FormInput />
            </Card.Header>

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
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default CardExampleContentBlock;
