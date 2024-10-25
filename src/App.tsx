// src/App.tsx

import React from "react";
import LoginPage from "./Login";
import SignUpPage from "./signup";
// import SignUpPage from "./SignUpPage"; // Uncomment this to use SignUpPage

const App: React.FC = () => {
//   return <LoginPage />;
  return <SignUpPage />;
};

export default App;
