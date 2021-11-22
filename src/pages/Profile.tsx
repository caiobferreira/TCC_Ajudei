import {Menu} from '../components/Menu';

import { useAuth } from '../hooks/useAuth';
import {useWallet} from '../hooks/useWallet';


export function Profile (){
const {user} = useAuth();
const {wallet} = useWallet();


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
</div>
</>
    )
}