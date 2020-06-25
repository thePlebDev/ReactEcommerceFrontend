import React,{useState} from 'react';



const Modal = ()=>{
  const[infoValue,setInfoValue] = useState(false)
  const[heartValue,setHeartValue] = useState(false)

  const handleInfo =()=>{
    console.log(infoValue)
    setInfoValue(!infoValue)
  }

  const handleHeart =()=>{
    console.log(heartValue)
    setHeartValue(!heartValue)
  }

  return(
    <div className="modal-class">
        <div className="info-icon" onClick={()=>handleInfo()}><i className="fas fa-info"></i></div>
        <div className="heart-icon" onClick={()=>handleHeart()}><i className="far fa-heart"></i></div>
        <div className={infoValue?'modal':'modal-active'}>
            FILTER
        </div>
    </div>
  )
}



export default Modal;
