import { useEffect } from 'react'
import molehill from '../assets/molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplay(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
     <img src={molehill} alt="MoleHill"  />
    );
  }
  
  export default EmptySlot;