import React from 'react';

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

function mostrarUser(){
    console.log(user?.id);
    console.log(user?.avatar);
 console.log(user?.name);
 }
return (
    <div className="auth-container">
       <img src={ImageLogo}/>
       <button className="auth-button">   
           <img src={GoogleLogo}/> 
           Faça o login com sua conta Google !
           </button>      
</div>
)
}