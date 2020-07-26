import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  try {
      //Destructuring one level down in the response
    const { data: {confirmed,recovered,deaths,lastUpdate } } = await axios.get(changeableUrl);
    return {confirmed,recovered,deaths,lastUpdate};

    }catch (error) {
    throw error;
  }
};

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`); 

        const modifiedData = data.map((dailyData)=>({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
        }));
        return modifiedData;
    }catch(error){
        throw(error);
    }
}

export const fetchCountries = async ()=> {
  try{
    // response mein se data destructure kr lia aur fir countries destructure kr li data mein se 
    const {data: { countries }} = await axios.get(`${url}/countries`);

    return countries.map((country)=> country.name);
    // console.log(response);
  }catch(error){
  console.log(error);
  }
}
