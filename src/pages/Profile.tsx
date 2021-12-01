import { useHistory } from 'react-router-dom';
import {Menu} from '../components/Menu';

import { useAuth } from '../hooks/useAuth';
import {useWallet} from '../hooks/useWallet';


export function Profile (){
const {user, logoutWithGoogle} = useAuth();
const {wallet} = useWallet();
const history = useHistory();

async function handleLogout () {
    if(user){
    await logoutWithGoogle();
       history.push('/');
       console.log(user);
    }
   
}


    return(
        <>
        <Menu/>

        <div className="profile-container">
            <div className="profile">
            <h1>Perfil</h1>
            <img src={user?.avatar} alt={user?.name}></img>
            <br/>
            <span>{user?.name}</span>
            </div>
            <div className="wallet-container">
                <h1>R$ {wallet?.wallet}</h1>
            </div>
            <br/>
            <button onClick={handleLogout}>Logout</button>
</div>
</>
    )
}