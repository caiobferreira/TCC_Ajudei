import {useAuth} from '../hooks/useAuth';

import ImageLogo from '../assets/images/Ajudei.svg';
import GoogleLogo from '../assets/images/google.png';


export function Login() {

    const {user, signInWithGoogle} = useAuth();

async function handleSign() {
    if(!user){
        await signInWithGoogle();
}
}

return (
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
           <button>Quero começar a ajudar!</button>
           <br/>
           <button>Preciso de ajuda</button>
           </div>
           </>     
              )}
</div>
)
}