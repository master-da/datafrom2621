import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import './App.css';

const url = "http://r.applovin.com/maxReport"
const api_key = "api_key=U_6ufDXDPxfXT5mJr1TXCfBDawPb6mmr3W01UHfLA6tC5gS_R-aTMng9oG4vXLk7wDJL8H_UKPGL3QtereTazI";
const format = "format=JSON";
const filter = "filter_application=Shark Attack,Shark Attack 3D"
const sort = "sort_day=ASC&sort&hour=ASC"
const columns = "columns=day,hour,application,estimated_revenue,ecpm";
const start = "start=2021-09-09";
const end = "end=2021-09-16";


const dat = [
  {
    day: '2021-09-09',
    hour: '03:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000704',
    ecpm: '0.704'
  },
  {
    day: '2021-09-09',
    hour: '19:00',
    application: 'Shark Attack',
    estimated_revenue: '0.00619',
    ecpm: '6.19'
  },
  {
    day: '2021-09-10',
    hour: '00:00',
    application: 'Shark Attack',
    estimated_revenue: '0.037628',
    ecpm: '18.814'
  },
  {
    day: '2021-09-10',
    hour: '06:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000601',
    ecpm: '0.601'
  },
  {
    day: '2021-09-10',
    hour: '08:00',
    application: 'Shark Attack',
    estimated_revenue: '0.00253',
    ecpm: '2.53'
  },
  {
    day: '2021-09-10',
    hour: '12:00',
    application: 'Shark Attack',
    estimated_revenue: '0.008036',
    ecpm: '1.0045'
  },
  {
    day: '2021-09-11',
    hour: '05:00',
    application: 'Shark Attack',
    estimated_revenue: '0.004289',
    ecpm: '1.07225'
  },
  {
    day: '2021-09-11',
    hour: '09:00',
    application: 'Shark Attack',
    estimated_revenue: '0.013461',
    ecpm: '4.487'
  },
  {
    day: '2021-09-11',
    hour: '12:00',
    application: 'Shark Attack',
    estimated_revenue: '0.001',
    ecpm: '1'
  },
  {
    day: '2021-09-11',
    hour: '18:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000492',
    ecpm: '0.492'
  },
  {
    day: '2021-09-12',
    hour: '01:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000566',
    ecpm: '0.566'
  },
  {
    day: '2021-09-12',
    hour: '10:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000371',
    ecpm: '0.371'
  },
  {
    day: '2021-09-12',
    hour: '13:00',
    application: 'Shark Attack',
    estimated_revenue: '0.008186',
    ecpm: '0.8186'
  },
  {
    day: '2021-09-12',
    hour: '14:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000997',
    ecpm: '0.997'
  },
  {
    day: '2021-09-12',
    hour: '16:00',
    application: 'Shark Attack',
    estimated_revenue: '0.001416',
    ecpm: '0.708'
  },
  {
    day: '2021-09-12',
    hour: '18:00',
    application: 'Shark Attack',
    estimated_revenue: '0.003622',
    ecpm: '0.7244'
  },
  {
    day: '2021-09-12',
    hour: '22:00',
    application: 'Shark Attack',
    estimated_revenue: '0.006299',
    ecpm: '1.049833333333333333333333333333333333333333'
  },
  {
    day: '2021-09-13',
    hour: '01:00',
    application: 'Shark Attack',
    estimated_revenue: '0.009185',
    ecpm: '1.837'
  },
  {
    day: '2021-09-13',
    hour: '06:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000822',
    ecpm: '0.822'
  },
  {
    day: '2021-09-13',
    hour: '22:00',
    application: 'Shark Attack',
    estimated_revenue: '0.002565',
    ecpm: '2.565'
  },
  {
    day: '2021-09-14',
    hour: '02:00',
    application: 'Shark Attack',
    estimated_revenue: '0.077055',
    ecpm: '19.26375'
  },
  {
    day: '2021-09-14',
    hour: '03:00',
    application: 'Shark Attack',
    estimated_revenue: '0',
    ecpm: '0'
  },
  {
    day: '2021-09-14',
    hour: '08:00',
    application: 'Shark Attack',
    estimated_revenue: '0.001597',
    ecpm: '0.7985'
  },
  {
    day: '2021-09-14',
    hour: '10:00',
    application: 'Shark Attack',
    estimated_revenue: '0.004361',
    ecpm: '1.09025'
  },
  {
    day: '2021-09-14',
    hour: '23:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000551',
    ecpm: '0.551'
  },
  {
    day: '2021-09-15',
    hour: '00:00',
    application: 'Shark Attack',
    estimated_revenue: '0.010168',
    ecpm: '1.694666666666666666666666666666666666666667'
  },
  {
    day: '2021-09-15',
    hour: '12:00',
    application: 'Shark Attack',
    estimated_revenue: '0.010711',
    ecpm: '1.530142857142857142857142857142857142857143'
  },
  {
    day: '2021-09-15',
    hour: '21:00',
    application: 'Shark Attack',
    estimated_revenue: '0.000418',
    ecpm: '0.418'
  },
  {
    day: '2021-09-16',
    hour: '03:00',
    application: 'Shark Attack',
    estimated_revenue: '0.095',
    ecpm: '31.666666666666666666666666666666666666666667'
  },
  {
    day: '2021-09-16',
    hour: '06:00',
    application: 'Shark Attack',
    estimated_revenue: '0.002447',
    ecpm: '0.815666666666666666666666666666666666666667'
  }
];

var data = [];

const populate = (data) => {dat.push(data);};

function axios(){
  const axios = require("axios");
  axios.get(url + '?' + api_key + '&' + format + '&' + filter + '&' + sort + '&' + columns + '&' + start + '&' + end)
      .then(result => {
          for(var i in result.data.results)
            populate(result.data.results[i])
          console.log(data);
      })
      .catch(error =>{
          console.log(error);
      })
}

function App() { 
  axios();  

  return <div>
      <LineChart
      width={1600} height={900}>
          <Line type="monotone" data={dat} dataKey="estimated_revenue">
          <YAxis dataKey="estimated_revenue" yAxisId="right"/>
          </Line>
          <Line type="monotone" data={dat} dataKey="ecpm"/>
          <CartesianGrid/>
          <XAxis dataKey="day"/>
          <Tooltip/>
      </LineChart>
  </div>
}

export default App;