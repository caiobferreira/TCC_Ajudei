import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

export function useWallet(){
    const value = useContext(WalletContext);
    return value;
}