import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Login} from "./pages/Login";
import {Ajuda} from "./pages/Ajuda";
import {Feed} from "./pages/Feed";
import { AddFunds } from './pages/AddFunds';

import {AuthContextProvider} from './contexts/AuthContext';
import {WalletContextProvider} from './contexts/WalletContext';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
<Route path="/" exact component={Login}/>
<Route path="/newhelp" component={Ajuda}/>
<Route path="/helps" component={Feed}/>
<Route path="/addFunds" component={AddFunds}/>
      </Switch>   
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
