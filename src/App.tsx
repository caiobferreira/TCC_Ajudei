import React from 'react';


import {Login} from "./pages/Login";
import {Ajuda} from "./pages/Ajuda";
import {Feed} from "./pages/Feed";

import {AuthContextProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Feed/>
    </AuthContextProvider>
  );
}

export default App;
