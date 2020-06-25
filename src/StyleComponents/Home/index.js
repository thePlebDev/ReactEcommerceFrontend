import React from 'react';

import Card from '../../components/Card'
import {cardData} from '../../FakeApiData/index.js'


const Home = ()=>{

  return(
    <div class="wrapper" >
        <Card cardData={cardData} />
    </div>
  )
}

export default Home
