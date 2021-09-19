import React from "react";
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


// const dat = [
//   {
//     day: '2021-07-16',
//     application: 'Shark Attack',
//     estimated_revenue: '0.089639',
//     ecpm: '4.268523809523809523809523809523809523809524'
//   },
//   {
//     day: '2021-07-17',
//     application: 'Shark Attack',
//     estimated_revenue: '0.034167',
//     ecpm: '2.4405'
//   },
//   {
//     day: '2021-07-18',
//     application: 'Shark Attack',
//     estimated_revenue: '0.006083',
//     ecpm: '1.2166'
//   },
//   {
//     day: '2021-07-19',
//     application: 'Shark Attack',
//     estimated_revenue: '0.005134',
//     ecpm: '0.855666666666666666666666666666666666666667'
//   },
//   {
//     day: '2021-07-20',
//     application: 'Shark Attack',
//     estimated_revenue: '0.019644',
//     ecpm: '1.511076923076923076923076923076923076923077'
//   },
//   {
//     day: '2021-07-21',
//     application: 'Shark Attack',
//     estimated_revenue: '0.074079',
//     ecpm: '6.734454545454545454545454545454545454545455'
//   },
//   {
//     day: '2021-07-22',
//     application: 'Shark Attack',
//     estimated_revenue: '0.027231',
//     ecpm: '3.890142857142857142857142857142857142857143'
//   },
//   {
//     day: '2021-07-23',
//     application: 'Shark Attack',
//     estimated_revenue: '0.049992',
//     ecpm: '1.851555555555555555555555555555555555555556'
//   },
//   {
//     day: '2021-07-24',
//     application: 'Shark Attack',
//     estimated_revenue: '0.015716',
//     ecpm: '1.208923076923076923076923076923076923076923'
//   },
//   {
//     day: '2021-07-25',
//     application: 'Shark Attack',
//     estimated_revenue: '0.033117',
//     ecpm: '0.974029411764705882352941176470588235294118'
//   },
//   {
//     day: '2021-07-26',
//     application: 'Shark Attack',
//     estimated_revenue: '0.027293',
//     ecpm: '0.827060606060606060606060606060606060606061'
//   },
//   {
//     day: '2021-07-27',
//     application: 'Shark Attack',
//     estimated_revenue: '0.019831',
//     ecpm: '0.639709677419354838709677419354838709677419'
//   },
//   {
//     day: '2021-07-28',
//     application: 'Shark Attack',
//     estimated_revenue: '0.091352',
//     ecpm: '5.7095'
//   },
//   {
//     day: '2021-07-29',
//     application: 'Shark Attack',
//     estimated_revenue: '0.022608',
//     ecpm: '3.768'
//   },
//   {
//     day: '2021-07-30',
//     application: 'Shark Attack',
//     estimated_revenue: '0.033649',
//     ecpm: '1.602333333333333333333333333333333333333333'
//   },
//   {
//     day: '2021-07-31',
//     application: 'Shark Attack',
//     estimated_revenue: '0.280716',
//     ecpm: '6.846731707317073170731707317073170731707317'
//   },
//   {
//     day: '2021-08-01',
//     application: 'Shark Attack',
//     estimated_revenue: '0.013052',
//     ecpm: '1.004'
//   },
//   {
//     day: '2021-08-02',
//     application: 'Shark Attack',
//     estimated_revenue: '0.074193',
//     ecpm: '2.853576923076923076923076923076923076923077'
//   },
//   {
//     day: '2021-08-03',
//     application: 'Shark Attack',
//     estimated_revenue: '0.015978',
//     ecpm: '5.326'
//   },
//   {
//     day: '2021-08-04',
//     application: 'Shark Attack',
//     estimated_revenue: '0.075049',
//     ecpm: '1.667755555555555555555555555555555555555556'
//   },
//   {
//     day: '2021-08-05',
//     application: 'Shark Attack',
//     estimated_revenue: '0.097987',
//     ecpm: '1.289302631578947368421052631578947368421053'
//   },
//   {
//     day: '2021-08-06',
//     application: 'Shark Attack',
//     estimated_revenue: '0.018051',
//     ecpm: '1.388538461538461538461538461538461538461538'
//   },
//   {
//     day: '2021-08-07',
//     application: 'Shark Attack',
//     estimated_revenue: '0.029652',
//     ecpm: '1.412'
//   },
//   {
//     day: '2021-08-08',
//     application: 'Shark Attack',
//     estimated_revenue: '0.157789',
//     ecpm: '26.298166666666666666666666666666666666666667'
//   },
//   {
//     day: '2021-08-09',
//     application: 'Shark Attack',
//     estimated_revenue: '0.186802',
//     ecpm: '23.35025'
//   },
//   {
//     day: '2021-08-10',
//     application: 'Shark Attack',
//     estimated_revenue: '0.186318',
//     ecpm: '6.2106'
//   },
//   {
//     day: '2021-08-11',
//     application: 'Shark Attack',
//     estimated_revenue: '0.026307',
//     ecpm: '1.879071428571428571428571428571428571428571'
//   },
//   {
//     day: '2021-08-12',
//     application: 'Shark Attack',
//     estimated_revenue: '0.010668',
//     ecpm: '0.820615384615384615384615384615384615384615'
//   },
//   {
//     day: '2021-08-13',
//     application: 'Shark Attack',
//     estimated_revenue: '0.014604',
//     ecpm: '1.327636363636363636363636363636363636363636'
//   },
//   {
//     day: '2021-08-14',
//     application: 'Shark Attack',
//     estimated_revenue: '0.013017',
//     ecpm: '1.3017'
//   },
//   {
//     day: '2021-08-15',
//     application: 'Shark Attack',
//     estimated_revenue: '0.037989',
//     ecpm: '2.5326'
//   },
//   {
//     day: '2021-08-16',
//     application: 'Shark Attack',
//     estimated_revenue: '0.057666',
//     ecpm: '9.611'
//   },
//   {
//     day: '2021-08-17',
//     application: 'Shark Attack',
//     estimated_revenue: '0.007964',
//     ecpm: '0.663666666666666666666666666666666666666667'
//   },
//   {
//     day: '2021-08-18',
//     application: 'Shark Attack',
//     estimated_revenue: '0.006739',
//     ecpm: '0.962714285714285714285714285714285714285714'
//   },
//   {
//     day: '2021-08-19',
//     application: 'Shark Attack',
//     estimated_revenue: '0.007181',
//     ecpm: '1.025857142857142857142857142857142857142857'
//   },
//   {
//     day: '2021-08-20',
//     application: 'Shark Attack',
//     estimated_revenue: '0.065666',
//     ecpm: '10.944333333333333333333333333333333333333333'
//   },
//   {
//     day: '2021-08-22',
//     application: 'Shark Attack',
//     estimated_revenue: '0.020829',
//     ecpm: '2.603625'
//   },
//   {
//     day: '2021-08-23',
//     application: 'Shark Attack',
//     estimated_revenue: '0.033557',
//     ecpm: '4.194625'
//   },
//   {
//     day: '2021-08-24',
//     application: 'Shark Attack',
//     estimated_revenue: '0.045',
//     ecpm: '45'
//   },
//   {
//     day: '2021-08-25',
//     application: 'Shark Attack',
//     estimated_revenue: '0.135886',
//     ecpm: '3.996647058823529411764705882352941176470588'
//   },
//   {
//     day: '2021-08-26',
//     application: 'Shark Attack',
//     estimated_revenue: '0.026829',
//     ecpm: '2.6829'
//   },
//   {
//     day: '2021-08-27',
//     application: 'Shark Attack',
//     estimated_revenue: '0.077943',
//     ecpm: '7.085727272727272727272727272727272727272727'
//   },
//   {
//     day: '2021-08-28',
//     application: 'Shark Attack',
//     estimated_revenue: '0.001',
//     ecpm: '1'
//   },
//   {
//     day: '2021-08-29',
//     application: 'Shark Attack',
//     estimated_revenue: '0.166994',
//     ecpm: '12.845692307692307692307692307692307692307692'
//   },
//   {
//     day: '2021-08-30',
//     application: 'Shark Attack',
//     estimated_revenue: '0.024433',
//     ecpm: '1.110590909090909090909090909090909090909091'
//   },
//   {
//     day: '2021-08-31',
//     application: 'Shark Attack',
//     estimated_revenue: '0.004354',
//     ecpm: '0.8708'
//   },
//   {
//     day: '2021-09-01',
//     application: 'Shark Attack',
//     estimated_revenue: '0.013712',
//     ecpm: '0.857'
//   },
//   {
//     day: '2021-09-02',
//     application: 'Shark Attack',
//     estimated_revenue: '0.01791',
//     ecpm: '8.955'
//   },
//   {
//     day: '2021-09-03',
//     application: 'Shark Attack',
//     estimated_revenue: '0.020484',
//     ecpm: '1.463142857142857142857142857142857142857143'
//   },
//   {
//     day: '2021-09-04',
//     application: 'Shark Attack',
//     estimated_revenue: '0.003764',
//     ecpm: '1.882'
//   },
//   {
//     day: '2021-09-05',
//     application: 'Shark Attack',
//     estimated_revenue: '0.03117',
//     ecpm: '1.29875'
//   },
//   {
//     day: '2021-09-06',
//     application: 'Shark Attack',
//     estimated_revenue: '0.08151',
//     ecpm: '1.940714285714285714285714285714285714285714'
//   },
//   {
//     day: '2021-09-07',
//     application: 'Shark Attack',
//     estimated_revenue: '0.005631',
//     ecpm: '0.804428571428571428571428571428571428571429'
//   },
//   {
//     day: '2021-09-08',
//     application: 'Shark Attack',
//     estimated_revenue: '0.01234',
//     ecpm: '1.762857142857142857142857142857142857142857'
//   },
//   {
//     day: '2021-09-09',
//     application: 'Shark Attack',
//     estimated_revenue: '0.006894',
//     ecpm: '3.447'
//   },
//   {
//     day: '2021-09-10',
//     application: 'Shark Attack',
//     estimated_revenue: '0.048795',
//     ecpm: '4.06625'
//   },
//   {
//     day: '2021-09-11',
//     application: 'Shark Attack',
//     estimated_revenue: '0.019242',
//     ecpm: '2.138'
//   },
//   {
//     day: '2021-09-12',
//     application: 'Shark Attack',
//     estimated_revenue: '0.021457',
//     ecpm: '0.825269230769230769230769230769230769230769'
//   },
//   {
//     day: '2021-09-13',
//     application: 'Shark Attack',
//     estimated_revenue: '0.012572',
//     ecpm: '1.796'
//   },
//   {
//     day: '2021-09-14',
//     application: 'Shark Attack',
//     estimated_revenue: '0.083564',
//     ecpm: '7.596727272727272727272727272727272727272727'
//   },
//   {
//     day: '2021-09-15',
//     application: 'Shark Attack',
//     estimated_revenue: '0.021297',
//     ecpm: '1.521214285714285714285714285714285714285714'
//   },
//   {
//     day: '2021-09-16',
//     application: 'Shark Attack',
//     estimated_revenue: '0.108786',
//     ecpm: '12.087333333333333333333333333333333333333333'
//   }
// ];

var data = [];
// const populate = (stuff) => {data.push(stuff);};

async function axios(data = ){
  const axios = require("axios");
  try{
    await axios.get(cors + url + '?' + api_key + '&' + format + '&' + filter + '&' + sort + '&' + columns + '&' + start + '&' + end)
      .then(result => {
          for(var i in result.data.results) data.push(result.data.results[i]);
      })
  } catch (error) {
    console.log(error);
  }
  
}

function App() { 

  axios();
  console.log(data);

  return (
    <div>
      <div>
        wassup
      </div>
      <LineChart width={1600} height={900} data={data}>
          <Line type="monotone" dataKey="estimated_revenue" orientation="right" domain={[0, 40]}>
            <YAxis type="number" domain={[0, 40]}/>
          </Line>
          <Line type="monotone" dataKey="ecpm"/>
          <CartesianGrid/>
          <XAxis dataKey="day"/>
          <Tooltip/>
      </LineChart>
      <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
  </div>)
}

export default App;