import React from 'react';

const AlertUser = () => {
  return ( 
    <button type='submit' onClick={Alert}>Create</button>
   );
}

const Alert = (event) => {
  event.preventDefault();
  window.alert("DCC")
}
 
export default AlertUser;