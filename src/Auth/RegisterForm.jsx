import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { FormGroup, Stack } from "react-bootstrap";

function RegisterForm({ setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const referal = "detsember";
  let providedReferal;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validate form data
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (referal !== providedReferal) {
      setError("Wrong referal code.");
      return;
    }
    if (!agreement) {
      setError("You must agree to use our service.");
      return;
    }

    try {
      // Send registration data to the server
      const response = await axios.post("http://localhost:8080/auth/register", {
        email,
        password,
      });

      // Handle successful registration
      setSuccess("Registration successful! You can now log in.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreement(false);
    } catch (err) {
      // Handle registration error
      console.error("Error:", err.response?.data || err.message);
      setError(
        err.response?.data?.error || "Failed to register. Please try again."
      );
    }
  };

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Your email will be used as login.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <FormGroup className="mb-3" controlId="formReferalCode">
          <Form.Label>Referal code</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert referal code"
            value={providedReferal}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree to use our service."
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" className="w-100">
        Register
      </Button>
      <Button variant="link" onClick={() => setShowLogin(true)}>
        Already have an account? Log in
      </Button>
    </Stack>
  );
}

export default RegisterForm;
