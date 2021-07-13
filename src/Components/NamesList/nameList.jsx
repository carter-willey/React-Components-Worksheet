import React from 'react';

const NameList = (props) => {
  return ( 
    <div>
    <ul>
      {props.nameList.map((arrayName) => {
        return <li>{arrayName}</li>
      })}
    </ul>
    </div>
   );
}
 
export default NameList;