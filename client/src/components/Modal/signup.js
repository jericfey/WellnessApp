import React from "react";
import { Button, Checkbox, Form, GridColumn, Header } from "semantic-ui-react";

const SignupForm = () => (
  <GridColumn>
    <Form>
      <Header textAlign="center">Signup</Header>
      <Form.Field>
        <label>First name:</label>
        <input placeholder="Bob" />
      </Form.Field>
      <Form.Field>
        <label>Last name:</label>
        <input placeholder="The Builder" />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input placeholder="Bob@bob.com" />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <input placeholder="Password" />
      </Form.Field>

      <Button>Submit</Button>
    </Form>
  </GridColumn>
);

export default SignupForm;
