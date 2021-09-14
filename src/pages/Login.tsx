import React from 'react';

import {useAuth} from '../hooks/useAuth';


export function Login() {

    const {user, signInWithGoogle} = useAuth();

async function handleSign() {
    if(!user){
        await signInWithGoogle();
    }
    console.log(user?.id);
    console.log(user?.avatar);
    console.log(user?.name);
}


return (
    <div className="auth-container">
<button>Login</button>
</div>
)
}