import React from 'react';


const Card = ({cardData})=>{
  return(
    <div>
      { cardData.map((item)=>{
        return(
          <div className="card-container" key={item.id}>
            <div className="heart-icon"><i class="far fa-heart"></i></div>
            <img src={item.img} alt='black shirt'/>
            <div className="card-container-text">
              <div className="name">{item.name}</div>
              <div className="price">{`$${item.price}`}</div>
              <div><i class="fas fa-shopping-cart fa-lg"></i></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Card;
