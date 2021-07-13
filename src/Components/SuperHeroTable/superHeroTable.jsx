import React from 'react';

const SuperHeroTable = (props) => {
  return ( 
    <table>
      {props.superheroes.map((hero) =>{
       return(
         <div>
         <tr>
        <td>{hero.name}</td>
        <td>{hero.primaryAbility}</td>
        <td>{hero.secondarAbility}</td>

        </tr>
        <hr />
        </div>
        
       )
      })}
    </table>
   );
}
 
export default SuperHeroTable;