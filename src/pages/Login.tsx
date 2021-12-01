import {useAuth} from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

import ImageLogo from '../assets/images/Ajudei.svg';
import GoogleLogo from '../assets/images/google.png';

import {Menu} from '../components/Menu';
import { useEffect } from 'react';



export function Login() {

    const {user, signInWithGoogle} = useAuth();
    const history = useHistory();

async function handleSign() {
    if(!user){
        await signInWithGoogle();
}
}

function handleFeed () {
history.push('/helps');
}

function handleAjuda () {
history.push('/newHelp');
}

return (
    <>
        <Menu/>
    <div className="auth-container">
       <img src={ImageLogo} alt="Logo"/>
       <h1>Bem vindo!</h1>
       { !user ? (
            <button className="auth-button" onClick={handleSign}>   
              <img src={GoogleLogo} alt="Google Logo"/> 
              Faça o login com sua conta Google !
              </button>      
       ):(
           <>
           <div className="logged">
           <img src={user.avatar} alt={user?.name}/>
           <br/>
           <span>{user?.name}</span>
           <br/>
           <button
           onClick={handleFeed}
           >Quero começar a ajudar!</button>
           <br/>
           <button
           onClick={handleAjuda}
           >Preciso de ajuda</button>
           </div>
           </>     
              )}
</div>
</>
)
}