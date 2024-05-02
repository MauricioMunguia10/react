import { useEffect, useState } from 'react'
import './App.css'

function FollowMouse(){
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  //pointer move
  useEffect(()=>{
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove',{clientX, clientY})
      setPosition({x:clientX, y:clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove',handleMove)
    }
  },[enabled])

  //change visibility
  useEffect(()=>{
    document.body.classList.toggle('no-cursor',enabled)

    return () => {
      document.body.classList.remove('no-cursor',enabled)
    }
  },[enabled])

  return(
    <>
      {enabled && (<div style={{
        position:"absolute",
        backgroundColor: '#fbc',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`

      }}/>)}
      
      <button onClick={()=> setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
    </>
  )

}

function App(){
  const [mounted, setMounted] = useState(true)
  return(
    <main>
      <h3>Proyecto 3</h3>
      {mounted && <FollowMouse/>}
      <button onClick={()=> setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </main>
  )
  
}

export default App