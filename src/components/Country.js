import React, { Component }  from "react";


class Country extends React.Component{

 render(){
     const {country}  = this.props;
     return(
         <tr>
             <td>{country.Country}</td>
             <td>{country.NewRecovered}</td>
             <td>{country.TotalRecovered}</td>
             <td>{country.TotalDeaths}</td>
           
         </tr>
         
     )
 }

}

export default Country;