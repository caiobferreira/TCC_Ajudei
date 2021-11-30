import { useHelp } from '../hooks/useHelp';

import { Help } from '../components/Help';
import { Menu } from '../components/Menu';


export function Feed() {

    const { helps } = useHelp();




    return (
        <>
            <Menu />
            <div className="help-feed">
                <header>
                    <h1>Feed de Ajudas</h1>
                </header>
                <br />
                {helps ? (
                    helps.map(help => {




                        function handleIsHelped() {


                            if (help.isHelped === false) {

                                return (
                                    <Help
                                        id={help.id}
                                        content={help.content}
                                        author={help.author}
                                        title={help.title}
                                        valor={help.valor}
                                        createdAt={help.createdAt}
                                        isHelped={help.isHelped}
                                    >
                                    </Help>
                                )
                            }
                        }




                        return (

                            <>

                                {handleIsHelped()}

                            </>

                        );

                    }).reverse()

                ) : (<>
                    <h1>Cadastre sua ajuda e comece ajudar!</h1>
                    <h1>:)</h1>
                </>
                )}

            </div>
        </>

    )
}