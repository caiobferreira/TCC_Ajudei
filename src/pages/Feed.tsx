import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import { useHelp } from '../hooks/useHelp';

import { Help } from '../components/Help';
import { Menu } from '../components/Menu';
import { useWallet } from "../hooks/useWallet"


export function Feed() {
    const { user } = useAuth();
    const userId = user?.id;
    const history = useHistory();

    const { helps } = useHelp();
    const { wallet } = useWallet();

    const walletRef = database.ref('wallets/' + userId);



    return (
        <>
            <Menu />
            <div className="help-feed">
                <header>
                    <h1>Feed de Ajudas</h1>
                </header>
                <br />

        { helps ?(
helps.map(help => {

    async function handleHelp() {
        console.log('função');
        console.log(wallet?.wallet);
        console.log(help.valor);

        if (wallet?.wallet === undefined) {
            console.log('undefined')
            return;
        }
        if (wallet.wallet >= help.valor) {
            const helpNewValue = Number(wallet.wallet) - Number(help.valor);

            const fireBaseWallet = await walletRef.set({
                walletId: user?.id,
                wallet: helpNewValue
            })

            console.log(helpNewValue);
            return;
        }
        if (wallet.wallet < help.valor) {
            history.push('/addFunds');
        }
    }


    const timestamp = help.createdAt;
    const parsedDate = new Date(timestamp);


    return (

        <Help
            id={help.id}
            content={help.content}
            author={help.author}
            title={help.title}
            valor={help.valor}
            createdAt={help.createdAt}
        >
            <button onClick={handleHelp}>Ajuda</button>
        </Help>

    );

}).reverse()
        ):(<>
<h1>Cadastre sua ajuda e comece ajudar!</h1>
<h1>:)</h1>
</>
        )}
                
            </div>
        </>
    )
}