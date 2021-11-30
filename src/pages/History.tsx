
import { useHelp } from '../hooks/useHelp';

import { Help } from '../components/Help';
import { Menu } from '../components/Menu';



export function History() {

    const { helps } = useHelp();

    return (
        <>
            <Menu />
            <div className="help-feed">
                <header>
                    <h1>Histórico de ajudas</h1>
                </header>
                <br />
                {helps ? (
                    helps.map(help => {


                        function handleIsHelped() {
                            if (help.isHelped === true) {
                                console.log(help.isHelped);

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
                    <h1>Comece a ajudar!</h1>
                    <h1>:)</h1>
                </>
                )}

            </div>
        </>

    )
}