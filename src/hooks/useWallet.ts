import {useState, useEffect} from 'react';

import{useAuth} from '../hooks/useAuth';

import{database} from '../services/firebase';

type Wallet={
    walletId: string;
    wallet: number;
    }
    
    type FirebaseWallet ={ 
    walletId:string;
    wallet: number;
    };
    


export function useWallet(){

    const {user} = useAuth();
    const [wallet, setWallet] = useState<Wallet>();
    const userId = user?.id;

    useEffect(() => {
        const walletRef = database.ref('wallets/' + userId);
        walletRef.on('value',(snapshot) => {
            const databaseWallet = snapshot.val();
            const firebaseWallets: FirebaseWallet = databaseWallet ?? {};
            setWallet(firebaseWallets);
        });
    }, []);

    
return {wallet};
}