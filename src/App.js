import React, {useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from "recharts";
import './App.css';


function App() {

  const cors = "https://cors-anywhere.herokuapp.com/";
  const url = "http://r.applovin.com/maxReport"
  const api_key = "api_key=U_6ufDXDPxfXT5mJr1TXCfBDawPb6mmr3W01UHfLA6tC5gS_R-aTMng9oG4vXLk7wDJL8H_UKPGL3QtereTazI";
  const format = "format=JSON";
  const filter = "filter_application=Shark Attack,Shark Attack 3D"
  const sort = "sort_day=ASC&sort&hour=ASC"
  const columns = "columns=day,hour,application,estimated_revenue,ecpm";
  // const start = "start=2021-09-09";
  const end = "end=2021-09-16";

  const [data, setData] = useState([]);
  const [start, setStart] = useState("start=2021-09-09");

  const reqd = async () => {
    const axios = require('axios');
    try{
      await axios.get(cors + url + '?' + api_key + '&' + format + '&' + filter + '&' + sort + '&' + columns + '&' + start + '&' + end)
        .then(result => {setData(result.data.results)})} 
    catch (error) {
        console.log(error);
      }
  }

  const changerman = () =>{

  }
  
  return (
    <div>
      <div>
      <div>

        <input type="radio" value="day" name="day"/> 1 Week
        <input type="radio" value="week" name="week"/> 1 Day
        <input type="radio" value="month" name="month"/> 1 Month
      
      </div>

        <button onClick = {reqd}>refresh</button>

        <LineChart width={1600} height={900} data={data}>

            <Line type="monotone" dataKey="ecpm" yAxisId={0}/>
            <YAxis yAxisId={0} type="number" domain={[0, 35]}/>

            <Line type="monotone" dataKey="estimated_revenue" yAxisId={1}/>
            <YAxis yAxisId={1} type="number" domain={[0, 0.5]} orientation='right'/>
            
            <XAxis dataKey="day"/>

            <CartesianGrid/>
            <Tooltip/>
        </LineChart>
      
      </div>
  </div>)
}

export default App;