import React from "react";


class Summary extends React.Component{

render(){
const {summary, currentDate} = this.props;
return( 
<div className="summary box">
    <div className="newConfirmed col-3">
            <h1>New Confirmed</h1>
        <h1>{summary.NewConfirmed}</h1>
        <h2>{new Date(currentDate).toDateString()}</h2>
   </div>
   <div className="newConfirmed col-3">
            <h1>New Deaths</h1>
        {<h1>{summary.NewDeaths}</h1> }
        <h2>{new Date(currentDate).toDateString()}</h2>
   </div>
   <div className="totalConfirmed col-3">
            <h1>Total Deaths</h1>
        {<h1>{summary.TotalDeaths}</h1> }
        <h2>{new Date(currentDate).toDateString()}</h2>
   </div>
   <div className="TotalRecovered col-3">
            <h1>Total Recovered</h1>
        {<h1>{summary.TotalRecovered}</h1> }
        <h2>{new Date(currentDate).toDateString()}</h2>
   </div>
</div>
)

}


}
export default Summary;