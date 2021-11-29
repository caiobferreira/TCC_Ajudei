import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useWallet } from "../hooks/useWallet"
import { useHelp } from '../hooks/useHelp';
import { useAuth } from '../hooks/useAuth';

import { database } from '../services/firebase';

import { Help } from '../components/Help';
import { Menu } from '../components/Menu';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '20rem',
        height: '5.5rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export function Feed() {
    const { user } = useAuth();
    const userId = user?.id;
    const history = useHistory();

    const { helps } = useHelp();
    const { wallet } = useWallet();

    const walletRef = database.ref('wallets/' + userId);

    const [setModalIsOpen, modalIsOpen] = useState(false);

    function openModal() {
        modalIsOpen(true);
    }

    function closeModal() {
        modalIsOpen(false);
    }
    function afterModalIsOpen() {
        console.log('olá');
    }



    return (
        <>
            <Menu />
            <div className="help-feed">
                <header>
                    <h1>Feed de Ajudas</h1>
                </header>
                <br />
                {helps ? (
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
                            <>
                                <Help
                                    id={help.id}
                                    content={help.content}
                                    author={help.author}
                                    title={help.title}
                                    valor={help.valor}
                                    createdAt={help.createdAt}
                                >
                                    <button onClick={openModal}>Ajuda</button>
                                </Help>

                                <Modal
                                    isOpen={setModalIsOpen}
                                    onAfterOpen={afterModalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Teste"
                                >
                                    <p>Você deseja ajudar o valor de R${help.valor} ?</p>
                                    <button>Sim</button>
                                    <button onClick={closeModal}>Não</button>
                                </Modal>


                            </>

                        );

                    }).reverse()
                ) : (<>
                    <h1>Cadastre sua ajuda e comece ajudar!</h1>
                    <h1>:)</h1>
                </>
                )}

            </div>
        </>
    )
}