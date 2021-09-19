import React, {useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from "recharts";
import './App.css';

const cors = "https://cors-anywhere.herokuapp.com/";
const url = "http://r.applovin.com/maxReport"
const api_key = "api_key=U_6ufDXDPxfXT5mJr1TXCfBDawPb6mmr3W01UHfLA6tC5gS_R-aTMng9oG4vXLk7wDJL8H_UKPGL3QtereTazI";
const format = "format=JSON";
const filter = "filter_application=Shark Attack,Shark Attack 3D"
const sort = "sort_day=ASC&sort&hour=ASC"
const columns = "columns=day,hour,application,estimated_revenue,ecpm";
const start = "start=2021-09-09";
const end = "end=2021-09-16";

function App() {

  const [data, setData] = useState([]);

  const reqd = async () => {
    const axios = require('axios');
    try{
      await axios.get(cors + url + '?' + api_key + '&' + format + '&' + filter + '&' + sort + '&' + columns + '&' + start + '&' + end)
        .then(result => {setData(result.data.results)})} 
    catch (error) {
        console.log(error);
      }
  }
  
  return (
    <div>
      <div>
        <button onClick = {reqd}>data = got</button>
        <LineChart width={1600} height={900} data={data}>
        
            <Line type="monotone" dataKey="ecpm" yAxisId={0}/>
            <Line type="monotone" dataKey="estimated_revenue" yAxisId={1}/>

            <XAxis dataKey="day"/>

            <YAxis yAxisId={0} type="number" domain={[0, 35]}/>
            <YAxis yAxisId={1} type="number" domain={[0, 0.5]} orientation='right'/>

            <CartesianGrid/>
            <Tooltip/>
        </LineChart>
      
      </div>
  </div>)
}

export default App;