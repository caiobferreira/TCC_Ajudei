import React from 'react';


import {Login} from "./pages/Login";
import {Ajuda} from "./pages/Ajuda";

import {AuthContextProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Ajuda/>
    </AuthContextProvider>
  );
}

export default App;
