import { FormEvent, useEffect, useState } from "react"
import{useHistory} from 'react-router-dom';

import { useAuth } from "../hooks/useAuth";
import { useWallet } from "../hooks/useWallet";

import { Menu } from "../components/Menu";
import Modal from 'react-modal';

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
    const { wallet } = useWallet();
    const history = useHistory();
    const userId = user?.id;

    const [newFund, setNewFund] = useState('');
    //const [newFundValue, setNewFundValue] = useState(0);

    const [setModalIsOpen, modalIsOpen] = useState(false);

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
    

    function openModal() {
        modalIsOpen(true);
    }

    function closeModal() {
        modalIsOpen(false);
        history.push('/helps');
    }
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
                return;
            }

            if (wallet.wallet === 0 || wallet.wallet > 0) {
                const walletValue = Number(wallet.wallet) + Number(newFund);
                //setNewFundValue(walletValue);

                const fireBaseWallet = await walletRef.set({
                    walletId: user?.id,
                    wallet: walletValue
                })
                
                return;
            }
        }


    }




    return (
        <>
            <Menu />
            <div className="addfunds-container">
                <form onSubmit={handleAddFunds}>
                    <input
                        type="number"
                        min="0"
                        onChange={event => setNewFund(event.target.value)}
                        value={newFund}
                    >
                    </input>
                    <br />
                    <br />
                    <button onClick={openModal}>Adicionar Fundos</button>
                    <Modal
                                    isOpen={setModalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Fundos adicionados"
                                >
                                    <p>R${newFund} foi adicionado a sua carteira!</p>
                                    <button onClick={closeModal}>Ir para feed do Ajudei!</button>
                                </Modal>
                </form>
            </div>
           
        </>
    )
}