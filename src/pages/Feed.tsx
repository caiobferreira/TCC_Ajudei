import { useState } from "react";
import { useParams } from "react-router-dom";

import {useAuth} from '../hooks/useAuth';
import {database} from '../services/firebase';

import {useHelp} from '../hooks/useHelp';

import {Help} from '../components/Help';

type HelpParams = {
    id: string;
}

export function Feed () {
    const {user} = useAuth();
    //const params = useParams<HelpParams>();
    //const helpId = params.id;
    const {title, helps} = useHelp();

        return (
        <div className="help-feed">
            {helps.map(help => {
                return (
 <Help
 id={help.id}
 content={help.content}
 author={help.author}
 title={help.title}
 valor={help.valor}
 createdAt={help.createdAt}
 >
 </Help>
 );
            })}       
           
        </div>
    )
}