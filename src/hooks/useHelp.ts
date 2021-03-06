import {useEffect, useState} from "react";

import {database} from "../services/firebase";

type FirebaseHelps = Record<
string,
{
author : {
    name: string;
    id:string;
    avatar: string;
};
content: string;
isHelped: boolean;
createdAt: string;
id: string;
title: string;
valor: number;
}
>;

type HelpType = {
    id: string;
    author: {
        name: string;
        id: string;
        avatar: string;
    };
    content:string;
    isHelped: boolean;
    title: string;
    valor: number;
    createdAt: string;
};

export function useHelp () {

//const {user} = useAuth();
const [helps, setHelps] = useState<HelpType[]>([]);
const [title, setTitle] = useState('');

useEffect(()=> {

const helpRef = database.ref('helps');

helpRef.on('value', (snapshot) => {
    const databaseHelp = snapshot.val();
    const firebaseHelps: FirebaseHelps = databaseHelp ?? {};
const parsedHelps = Object.entries(firebaseHelps).map(
    ([key,value]) => {
        return {
            id: key,
            content: value.content,
            author: value.author,
            isHelped: value.isHelped,
            title: value.title,
            valor: value.valor,
            createdAt: value.createdAt,
        }
    }
);
if(parsedHelps){

    setTitle(databaseHelp.title);
    setHelps(parsedHelps);
}
if(!parsedHelps){
    setTitle('');
    setHelps([]);
}
});

return () => {
    helpRef.off("value");
}

}, []);

    return {helps, title};
}