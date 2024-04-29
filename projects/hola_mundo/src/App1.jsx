import './App.css'
//siempre importar la función a mostrar
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: true
    },
    {
        userName: 'mauricio',
        name: 'Mauricio M ',
        isFollowing: true
    },
    {
        userName: 'angel',
        name: 'Angel G',
        isFollowing: false
    },
]
export function App () {
    //funcion que agrega el arroba a cada usuario
    const format = (userName) => `@${userName}`

    return(
        //tarjetas de Twiter 
     <section className='App'>
        
        {
        users.map(user => {
            const {userName, name, isFollowing} = user
            return(
                <TwitterFollowCard
                key={userName} //tiene que ser un identificar unico
                userName={userName}
                initialIsFollowing={isFollowing}
                > {name} </TwitterFollowCard>
            )
        })
        }

     </section>
    )
}