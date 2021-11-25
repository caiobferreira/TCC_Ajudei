import { ReactNode } from 'react';
import { useHelp } from '../hooks/useHelp';
import { useWallet } from '../hooks/useWallet';

import '../styles/global.scss';

type HelpProps = {
    id: string;
    author: {
        name: string;
        id: string;
        avatar: string;
    };
    content: string;
    title: string;
    valor: number;
    createdAt: string;
    children?: ReactNode;
}

export function Help({
    content,
    title,
    valor,
    createdAt,
    children,
}: HelpProps) {
    return (
        <>
            <div className="help-card">
                <h1>{title}</h1>
                <p>{content}</p>
                <p>R$: {valor}</p>
                <br />
                <p>{createdAt}</p>

                <div>
                    {children}
                </div>
            </div>
        </>
    )
}