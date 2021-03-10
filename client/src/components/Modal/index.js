import React from "react";
import Signup from "./signup";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Modal,
  Header,
  Menu,
} from "semantic-ui-react";

function Dividerform() {
  const [open, setOpen] = React.useState(false);
  return (
    <Segment placeholder>
      <Grid columns={2} relaxed="very" stackable className="test">
        <Grid.Column>
          <Form style={{ padding: "3em 0em" }}>
            <Header textAlign="center">Login</Header>
            <Form.Input
              icon="mail"
              iconPosition="left"
              label="Email"
              placeholder="Email"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
            />

            <Button>Login</Button>
          </Form>
        </Grid.Column>
        <Divider vertical className="test">
          Or
        </Divider>
        <Grid.Column verticalAlign="middle">
          <Signup />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
export default Dividerform;
