import React from 'react';
import promo from './FotoPromo/pot.svg'
import Fon from './Fon';
import './Promo.css';

function Promo() {
  return (
    <div className="Promo">
        <img src={promo} alt=""/>
        <div id="fon"></div>
    </div>
  )
}



export default Promo;