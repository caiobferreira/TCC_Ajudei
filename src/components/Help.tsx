import { ReactNode, useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import { useWallet } from '../hooks/useWallet';
import {useHistory} from 'react-router-dom';

import {database} from '../services/firebase';

import Modal from 'react-modal';

import '../styles/global.scss';

type HelpProps = {
    id: string;
    author: {
        name: string;
        id: string;
        avatar: string;
    };
    content: string;
    title: string;
    isHelped: boolean;
    valor: number;
    createdAt: string;
    children?: ReactNode;
}

export function Help({
    id,
    content,
    title,
    valor,
    isHelped,
    createdAt,
    children,
}: HelpProps) {

    const timestamp = createdAt;
    const parsedDate = new Date(timestamp);
    const {user} = useAuth();
    const {wallet} = useWallet();
    const history = useHistory();
    const walletRef = database.ref('wallets/' + user?.id);

    const date = parsedDate.toString();

    async function handleHelp() {

        if (wallet?.wallet === undefined) {
            return;
        }
        if (wallet.wallet >= valor) {
            
            const helpNewValue = Number(wallet.wallet) - Number(valor);

            const fireBaseWallet = await walletRef.set({
                walletId: user?.id,
                wallet: helpNewValue
            })

            const helpRef = await database.ref('helps').child(id);
         helpRef.update({
            isHelped: true
        })
        console.log(wallet.wallet);

            return;
        }
        if (Number(wallet.wallet) < Number(valor)) {
            history.push('/addFunds');
        }
    }

    const [setModalIsOpen, modalIsOpen] = useState(false);

    function openModal() {
        modalIsOpen(true);
    }

    function closeModal() {
        modalIsOpen(false);
    }


    return (
        <>
            <div className="help-card">
                <h1>{title}</h1>
                <p>{content}</p>
                <p>R$: {valor}</p>
                <br />
                <p>{date}</p>
                <button onClick={openModal} disabled={isHelped || !user}>{!isHelped ? 'AJUDAR' : 'AJUDADO'}</button>

                <Modal
                                    isOpen={setModalIsOpen}
                                    onRequestClose={closeModal}
                                    className="modal"
                                    contentLabel="Confirme sua ajuda"
                                    overlayClassName="overlay"
                                >
                                    <p>Você deseja ajudar o valor de R${valor} ?</p>
                                    <br/>
                                    <button onClick={handleHelp}>Sim</button>
                                    <br/>
                                    <button onClick={closeModal}>Não</button>
                                </Modal>

                <div>
                    {children}
                </div>
            </div>
        </>
    )
}