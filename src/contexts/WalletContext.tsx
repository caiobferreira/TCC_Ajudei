import { createContext, ReactNode, useEffect, useState, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

type Wallet={
    walletId: string;
    wallet: number;
    }

    type WalletContextType = {
        wallet: Wallet | undefined;
      }
    
    type FirebaseWallet ={ 
    walletId:string;
    wallet: number;
    };

    type WalletContextProviderProps = {
        children: ReactNode;
    }

    export const WalletContext = createContext ({} as WalletContextType );

    export function WalletContextProvider (props : WalletContextProviderProps) {

        const {user} = useAuth();
        const [wallet, setWallet] = useState<Wallet>();
        const userId = user?.id;
        
        
            useEffect(() => {
                const walletRef = database.ref('wallets/' + userId);
                    walletRef.on('value', async (snapshot) => {
                    const databaseWallet = snapshot.val();
                    const firebaseWallets: FirebaseWallet = databaseWallet ?? {};
                   
                   await setWallet(firebaseWallets);
                });    
                    
                                    
            }, [user]);

            

        


            return (
                <WalletContext.Provider value={{wallet}}>
                    {props.children}
                </WalletContext.Provider>
            )
        
    }