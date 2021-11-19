import {useHistory} from 'react-router-dom';


export function Menu () {
    const history = useHistory();
    function handleHome(){
    history.push('/');
    }
    function handleFunds(){
    history.push('/addFunds');
    }

    return (
<header>
<nav>
                <a className="logo" >Ajudei</a>
                <ul className="nav-list">
                  <li><a onClick={handleHome}>Início</a></li>
                  <li><a >Feed de Ajudas</a></li>
                  <li><a >Cadastro de Ajudas</a></li>
                  <li><a >Histórico de Ajudas</a></li>
                  <li><a onClick={handleFunds}>Adicionar Fundos</a></li>
                  <li><a >Perfil</a></li>
                </ul>
              </nav>
</header>
    )
}