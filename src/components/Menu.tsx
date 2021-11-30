import {useHistory} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export function Menu () {
    const history = useHistory();
    const {user} = useAuth();
    function handleHome(){
    history.push('/');
    }
    function handleFunds(){
    history.push('/addFunds');
    }
    function handleProfile(){
    history.push('/profile');
    }
    function handleFeed(){
    history.push('/helps');
    }
    function handleNewHelp(){
    history.push('/newHelp');
    }
    function handleHistory(){
    history.push('/history');
    }


    return (
<header>
<nav>
                <a className="logo" >Ajudei</a>
                <ul className="nav-list">
                  <li><a onClick={handleHome}>Início</a></li>
                  <li><a onClick={handleFeed}>Feed de Ajudas</a></li>
                  {user &&(<>
                  <li><a onClick={handleNewHelp}>Cadastro de Ajudas</a></li>
                  <li><a onClick={handleHistory}>Histórico de Ajudas</a></li>
                  <li><a onClick={handleFunds}>Adicionar Fundos</a></li>
                  <li><a onClick={handleProfile}>Perfil</a></li>
                  </>
                  )}         
                </ul>
              </nav>
</header>
    )
}