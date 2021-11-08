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
const [title, setTitle] = useState('');

useEffect(()=> {

const helpRef = database.ref(`helps`);

helpRef.on("value", (help) => {
    const databaseHelp = help.val();
    const firebaseHelps: FirebaseHelps = databaseHelp.helps ?? {};

    const parsedHelps = Object.entries(firebaseHelps).map(
        ([key,value]) => {
            return {
                id: key,
                content: value.content,
                author: value.author,
                valor: value.valor,
                createdAt: value.createdAt,
            }
        }
    );
    setTitle(databaseHelp.title);
    setHelps(parsedHelps);
});

return () => {
    helpRef.off("value");
}

}, [helpId, user?.id]);

    return {helps, title};
}