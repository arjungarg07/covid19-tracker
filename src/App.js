import React from "react";

import { CountryPicker, Cards, Chart } from "./components";
import styles from './App.module.css'
import { fetchData } from './api'
class App extends React.Component {

  async componentDidMount(){
    const data = await fetchData(); 

    console.log(data);
  }
    
  render() {
    return (
      <div className = {styles.container}>  
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
