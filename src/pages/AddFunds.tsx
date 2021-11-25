import { FormEvent, useEffect, useState } from "react"
import { Menu } from "../components/Menu";
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
        walletId: string;
        wallet: number;
    }
>;

export function AddFunds() {
    const { user } = useAuth();
    const userId = user?.id;
    const [newFund, setNewFund] = useState('');
    const [newFundValue, setNewFundValue] = useState(0);
    const { wallet } = useWallet();

    async function handleAddFunds(event: FormEvent) {
        event.preventDefault();

        if (newFund === undefined || setNewFund === undefined) {
            return;
        }

        const walletRef = database.ref('wallets/' + userId);

        // verificação se carteira é existente
        if (walletRef.key === userId) {
            if (wallet?.wallet === undefined) {

                const fireBaseWallet = await walletRef.set({
                    walletId: user?.id,
                    wallet: 0
                })

                console.log('deu undefined')
                return;
            }

            if (wallet.wallet === 0 || wallet.wallet > 0) {
                const walletValue = Number(wallet.wallet) + Number(newFund);
                setNewFundValue(walletValue);
                console.log('maior que 0')

                const fireBaseWallet = await walletRef.set({
                    walletId: user?.id,
                    wallet: walletValue
                })
                return;
            }
        }


        console.log(walletRef);
    }

    function handleTeste() {
        console.log(wallet);
        console.log(wallet?.wallet)
        console.log(newFundValue);
    }


    return (
        <>
            <Menu />
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