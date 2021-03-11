import React, { useState } from "react";
import { Button, Form, GridColumn, Header } from "semantic-ui-react";
const SignupForm = () => {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   //need to add user to the db and take them to the dashboard
  //   if (
  //     formObject.firstName &&
  //     formObject.lastName &&
  //     formObject.email &&
  //     formObject.password
  //   ) 
  //   {
  //     API.createUser({
  //       firstName: formObject.firstName,
  //       lastName: formObject.lastName,
  //       email: formObject.email,
  //       password: formObject.password,
  //     })
  //       .then((res) => loadUserDashboard())
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <GridColumn>
      <Form>
        <Header textAlign='center'>Signup</Header>
        <Form.Field>
          <label>First name:</label>
          <input
            placeholder='Bob'
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last name:</label>
          <input
            placeholder='The Builder'
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <input
            placeholder='Bob@bob.com'
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input
            placeholder='Password'
            onChange={handleInputChange}
          />
        </Form.Field>
{/* need to add onClick{handleFormSubmit} and uncomment the handleFormSubmit() above*/}
        <Button>Submit</Button>
      </Form>
    </GridColumn>
  );
};

export default SignupForm;
