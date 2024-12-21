import React, { useState } from "react";
import { Stack, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const LoginForm = ({ onLogin, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        onLogin(true); // Notify App of successful login
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid email or password.");
    }
  };

  return (
    <Stack gap={2} className="col-md-5 mx-auto mt-2">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button variant="link" onClick={() => setShowLogin(false)}>
        Don't have an account? Sign up
      </Button>
    </Stack>
  );
};

export default LoginForm;
