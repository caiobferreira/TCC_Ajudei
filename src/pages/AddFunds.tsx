import { FormEvent, useState } from "react"
import{useHistory} from 'react-router-dom';

import { useAuth } from "../hooks/useAuth";
import { useWallet } from "../hooks/useWallet";

import { Menu } from "../components/Menu";
import Modal from 'react-modal';

import { database } from "../services/firebase";


export function AddFunds() {
    const { user } = useAuth();
    const { wallet } = useWallet();
    const history = useHistory();
    const userId = user?.id;

    const [newFund, setNewFund] = useState('');

    const [setModalIsOpen, modalIsOpen] = useState(false);

    

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
        
        if (wallet?.wallet === undefined) {
    
            const fireBaseWallet = await walletRef.set({
                walletId: user?.id,
                wallet: 0
            })
            return;
        }
        
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

                const fireBaseWallet = await walletRef.set({
                    walletId: user?.id,
                    wallet: walletValue
                })
                
                return;
            }
        }


    }
    
    Modal.setAppElement('#root');



    return (
        <>
            <Menu />
            <div className="addfunds-container">
                <h1>Adicione fundos a sua carteira de forma rápida e simples!</h1>
                <br/>
                <form onSubmit={handleAddFunds}>
                    <input
                        type="number"
                        min="0"
                        onChange={event => setNewFund(event.target.value)}
                        placeholder="R$"
                        value={newFund}
                    >
                    </input>
                    <br />
                    <br />
                    <button onClick={openModal}>Adicionar Fundos</button>
                    <Modal
                                    isOpen={setModalIsOpen}
                                    onRequestClose={closeModal}
                                    className="modal"
                                    contentLabel="Fundos adicionados"
                                    overlayClassName="overlay"
                                >
                                    <p>R${newFund} foi adicionado a sua carteira!</p>
                                    <br/>
                                    <button onClick={closeModal}>Ir para feed do Ajudei!</button>
                                </Modal>
                                
                </form>
            </div>
           
        </>
    )
}