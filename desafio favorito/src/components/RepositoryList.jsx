import { useState } from "react"

export function RepositoryList() {
    const [favorito, setFavorito] = useState(true);
    
    function favoritar() {

        if (favorito) { 
            setFavorito(false);
        } else {
            setFavorito(true);
        }
        
    }

    return (<ul>
        <li>
            test1
            <button onClick={favoritar} >{favorito ? 'favorito' : 'Não Favorito' } </button>
        </li>
        <li>
            test2
            <button>favorito</button>
        </li>
          </ul>)
}
