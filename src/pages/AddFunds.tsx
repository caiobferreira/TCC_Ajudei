import { FormEvent, useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth";
import { useWallet } from "../hooks/useWallet";
import { database } from "../services/firebase";

type Fund = {
walletId: string;
wallet: number;
}

type FirebaseWallet = Record<
string, 
{
walletId:string;
wallet: number;
}
>;

export function AddFunds () {
    const {user} = useAuth();
    const userId = user?.id;
    const [newFund, setNewFund] = useState('');
    const {wallet} = useWallet();

    async function handleAddFunds (event: FormEvent){
        event.preventDefault();

        if (newFund === undefined || setNewFund === undefined){
            return;
        }

        const walletRef = database.ref('wallets/' + userId);

        // verificação se carteira é existente
        if(walletRef.key){
            console.log('existe');
            console.log(walletRef.key);
        }

        const fireBaseWallet = await walletRef.set({
            walletId: user?.id,
            wallet: newFund   
        })

        console.log(walletRef);
    }

    function handleTeste(){
        console.log(wallet);
    }


    return (
        <>
        <div className="addfunds-container">
            <form onSubmit={handleAddFunds}>
                <input type="number"
                onChange={event => setNewFund(event.target.value)}
                value={newFund}
                >
                </input>
                <button type="submit">Adicionar Fundos</button>
            </form>
            <button onClick={handleTeste}>Teste</button>
        </div>
        </>
    )
}