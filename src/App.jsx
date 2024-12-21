import React, { useState } from "react";
import UploadForm from "./Files/UploadForm";
import FileList from "./Files/FileList";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import { Container, Button } from "react-bootstrap";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Container>
      {!isAuthenticated ? (
        showLogin ? (
          <>
            <LoginForm onLogin={handleLogin} setShowLogin={setShowLogin} />
          </>
        ) : (
          <>
            <RegisterForm setShowLogin={setShowLogin} />
          </>
        )
      ) : (
        <>
          <UploadForm
            onFileUpload={() => setRefreshTrigger((prev) => prev + 1)}
          />
          <FileList refreshTrigger={refreshTrigger} />
          <Button
            className="mt-2 p-center"
            variant="warning"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      )}
    </Container>
  );
}

export default App;
