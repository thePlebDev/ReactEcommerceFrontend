import React,{useState} from 'react';

import Modal from '../../StyleComponents/Modal';


const Card = ({cardData})=>{

  return(
    <div className="below-wrapper">
      { cardData.map((item)=>{
        return(
          <div className="card-container" key={item.id}>
            <div>
                <Modal />
            </div>
            <img src={item.img} alt='black shirt'/>
            <div className="card-container-text">
              <div className="name">{item.name}</div>
              <div className="price">{`$${item.price}`}</div>
              <div><i className="fas fa-shopping-cart fa-lg"></i></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Card;
