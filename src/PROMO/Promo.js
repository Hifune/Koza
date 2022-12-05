import React from 'react';
import Pot from './Pot';
import Text1 from './Text1';
import Text2 from './Text2';
import './Promo.css';


function Promo() {
  return (
    <div className="Promo">  
      <Text1/>
      <Text2/> 
      <Pot/> 
    </div>
  );
}

export default Promo;