
import React from "react";
import { Button, Checkbox, Form, Header } from "semantic-ui-react";

const SignupForm = () => (
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

    <Button content="Signup" primary />
  </Form>
);


export default SignupForm;
