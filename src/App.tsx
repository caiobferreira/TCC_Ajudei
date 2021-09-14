import React from 'react';
import {Login} from "./pages/Login";

import {AuthContextProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Login/>
    </AuthContextProvider>
  );
}

export default App;
