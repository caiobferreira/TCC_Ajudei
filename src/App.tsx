import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Login} from "./pages/Login";
import {Ajuda} from "./pages/Ajuda";
import {Feed} from "./pages/Feed";
import { AddFunds } from './pages/AddFunds';
import { Profile } from './pages/Profile';
import { History } from './pages/History';

import {AuthContextProvider} from './contexts/AuthContext';
import {WalletContextProvider} from './contexts/WalletContext'


function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <WalletContextProvider>
      <Switch>
<Route path="/"  exact component={Login}/>
<Route path="/history" component={History}/>
<Route path="/newhelp" component={Ajuda}/>
<Route path="/helps" component={Feed}/>
<Route path="/addFunds" component={AddFunds}/>
<Route path="/profile" component={Profile}/>
      </Switch>   
      </WalletContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
