// src/LoginPage.tsx

import React, { useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`;

const LoginBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3rem;
  width: 350px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: #6e8efb;
`;

const Title = styled.h2`
  color: #444;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #6e8efb;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #6e8efb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #576bfa;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

// LoginPage Component
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      alert("Logged in successfully!");
    }
  };

  return (
    <Container>
      <LoginBox>
        <IconWrapper>
          <FaUserCircle />
        </IconWrapper>
        <Title>Login</Title>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button onClick={handleLogin}>Sign In</Button>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
