import React from 'react'
import {Button, Form} from 'react-bootstrap';
import './Formaulaire-style.css';

const Formulaire = () => {
    return (
        <div className="formulaire-section">
          <p> Contact us</p>
            <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="email" placeholder="Enter email" className="input"/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" id="input_pass">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="password" placeholder="Password" className="input"/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit" className="button_form">
    Log in
  </Button>
</Form>
        </div>
    )
}

export default Formulaire
