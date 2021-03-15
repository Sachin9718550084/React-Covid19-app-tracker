import React from "react";
import axios from 'axios';
import Summary from "./Summary";
import Country from "./Country";
export default class Details extends React.Component {

 state = {

    countries : [],
    global : [], 
    currectDate: null

  }
 
//   https://www.youtube.com/watch?v=D0EztyblSJI

async componentDidMount() {
    const response = await axios.get("https://api.covid19api.com/summary");
    console.log(response);
       this.setState( { countries  : response.data.Countries } );
       this.setState( { global  : response.data.Global } );
       this.setState( {currectDate  : response.data.Date } );
};
 
  render() {
    return (
      <div>
             <Summary summary={this.state.global}  currentDate = { this.state.currectDate}/>
            
             <table>
               <thead>
                 <tr>
                   <th>Country</th>
                   <th> New Confirmed</th>
                   <th>Total Recovered</th>
                   <th>Total Deaths</th>
                 </tr>
               </thead>
               <tbody>
                {
                  this.state.countries.map( country =>(
                    <Country country = {country} key = { country.Country}  />
                  ))
                }
                  
                 
               </tbody>
             </table>
      </div>
  
     );
    }

}