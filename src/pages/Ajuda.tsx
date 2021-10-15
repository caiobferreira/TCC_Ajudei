import {FormEvent, useState} from 'react';

import {useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import {database} from '../services/firebase';
import firebase from 'firebase/compat/app';


export function Ajuda () {

const {user} = useAuth();
const history = useHistory();
const [newHelp, setNewHelp] = useState('');
const [newHelpValue, setNewHelpValue] = useState('');


async function handleCreateHelp(event: FormEvent) {
    event.preventDefault();

    if (newHelp.trim() === ''){
        return;
    }

    const helpRef = database.ref('helps');

    const fireBaseHelp = await helpRef.push({
        content:newHelp,
        valor: newHelpValue,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        author:{
            name: user?.name,
            id: user?.id,
            avatar: user?.avatar
        },

    })

history.push(`/helps/${fireBaseHelp.key}`)

}

    return (

        <div className="help-container">
            <form
            onSubmit={handleCreateHelp}
            >
                <textarea
                placeholder="Escreva aqui em que você precisa ser ajudado"
                onChange={event => setNewHelp(event.target.value)}
                value={newHelp}
                />
                <br/>
                <input type="number"
                placeholder="Insira o valor da sua necessidade"
                onChange={event => setNewHelpValue(event.target.value)}
                value={newHelpValue}
                />
                <br/>
                <button type="submit" disabled={!user}>Cadastre sua ajuda já!</button>             
            </form>
        </div>
    )
}