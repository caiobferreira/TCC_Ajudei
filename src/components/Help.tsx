import {ReactNode} from 'react';

import cx from 'classnames';

import '../styles/global.scss';

type HelpProps = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content:string;
    valor: number;
    createdAt: string;
    children?: ReactNode;
}

export function Help ({
    content,
    author,
    valor,
    createdAt,
    children,
}: HelpProps) {
    return (
        <div>
            
        </div>
    )
}