import React from "react";

import { CountryPicker,Cards, Chart } from "./components";
import styles from './App.module.css'
import { fetchData } from './api'
import covidimage from './images/image.png'
class App extends React.Component {

  state = {
    data : {},
    country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData(); 

    this.setState({data : fetchedData});
  }
    
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country); 

    this.setState({data:fetchedData, country:country});
  }


  render() {
    const {data,country} = this.state;
    return (
      <div>
      <div className = {styles.container}>  
        <img className={styles.img} src={covidimage} alt="Covid image"/>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
      </div>
    );
  }
}

export default App;
