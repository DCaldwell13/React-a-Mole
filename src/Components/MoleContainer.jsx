import Mole from './Mole'
import EmptySlot from './EmptySlot'
import {useState} from 'react'

function MoleContainer(props) {
   let [diplayMole, setDisplayMole] = useState(false)

   let handleBop = e => {
      PaymentResponse.setScore(props.score++)
      setDisplayMole(false)
   }

   let isMoleUp = diplayMole ? <Mole /> : <EmptySlot />

    return (
     <>
        {isMoleUp}
     </>
    );
  }
  
  export default MoleContainer;