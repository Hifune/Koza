import React from 'react';
import email from '../HEADER/foto/email.svg'
import './Email.css';


function Email() {
    return (
      <div className="Email">
        <button><img src={email} alt='' /></button>
      </div>
    );
  }
  
  export default Email;