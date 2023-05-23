import { useEffect } from 'react';
import mole from '../assets/mole.png'

function Mole(props) {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplay(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
     <>
        <h1>Mole</h1>
        <img src={mole} onCLick={props.handleClick} alt="Mole" />
     </>
    );
  }
  
  export default Mole;