import './App.css'
//siempre importar la función a mostrar
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return( 
     <>
        <TwitterFollowCard userName="mau10" name="Mauricio Munguia"/>
        <TwitterFollowCard userName="midudev" name="Miguel Angel"/>
     </>
    )
}