//import { ReactNode, createContext, useEffect, useState } from "react"
//import { useAuth } from "../hooks/useAuth";
//
//import {database} from '../services/firebase';
//
//type Wallet={
//walletId: string;
//walletValue?: number;
//}
//
//type WalletContextType = {
//wallet: Wallet | undefined;
//}
//
//type WalletContextProviderProps ={
//    children: ReactNode ;
//}
//
//type FirebaseWallet = Record<
//string, 
//{
//walletId:string;
//wallet: number;
//}
//>;
//
//export const WalletContext = createContext({} as WalletContextType);
//
//
export function WalletContextProvider () {
//  
//
//    const {user} = useAuth();
//    const [wallet, setWallet] = useState<Wallet>();
//    const userId = user?.id;
//
//    useEffect(() => {
//        const walletRef = database.ref('wallets/' + userId);
//        walletRef.on('value',(snapshot) => {
//            const databaseWallet = snapshot.val();
//            const firebaseWallets: FirebaseWallet = databaseWallet ?? {};
//
//            if (wallet){
//                const {walletId, walletValue} = wallet;
//
//                setWallet({
//                    walletId: walletId,
//                    walletValue: walletValue
//                })
//                console.log(wallet);
//            }
//        });
//    }, []);
//
//    async function handleLoadWallet (){
//        return
//    }
//   
    return (
       <></>
    )
}