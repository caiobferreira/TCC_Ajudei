import {useEffect, useState} from "react";

import {database} from "../services/firebase";
import {useAuth} from "./useAuth";


type FirebaseHelps = Record<
string,
{
author : {
    name: string;
    avatar: string;
};
content: string;
valor: number;
createdAt: string;
}
>;

type HelpType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content:string;
    valor: number;
    createdAt: string;
};

export function useHelp (helpId: string) {

const {user} = useAuth();
const [helps, setHelps] = useState<HelpType[]>([]);






    return () => {

    };
}