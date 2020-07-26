import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    // console.log(dailyData);
    // to call fetchAPI function
    fetchAPI();
  },[]);


  // LineChart is a component which takes only one parameter i.e. data

  const lineChart = (
    dailyData.length!==0
        ? (<Line
         data={{
            //  in labels we're getting all the sates from the daily data and display them as labels
            // And we're here loopin here over daily data and destructuring date
             labels: dailyData.map(({date})=>date), 
            //  two datasets for infected and death but api doesn't provide recovered
             datasets: [{
                 data: dailyData.map(({confirmed})=> confirmed),
                 label: 'Infected',
                 borderColor: '#3333ff',
                 fill: true,
             }, {
                data: dailyData.map(({deaths})=> deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
             }],
         }}
         />
         ) :null
  );

         const barChart = (
            confirmed
            ? (
                <Bar
                    //one{} for making it dynamic and second{} for opening an object
                    data={{
                        labels: ['Infected','Recovered','Deaths'],
                        datasets:  [{
                            label: 'People',
                            backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                            data:[confirmed.value,recovered.value,deaths.value]
                        }]
                    }}
                    options={{
                        legend:{display:false},
                        title: {display:true,text:`Current state in ${country}`},
                    }}
                />
            ) : null
         )
    return (
        <div className={styles.container}>
          {country ? barChart : lineChart}
        </div>
    )
};

export default Chart;
