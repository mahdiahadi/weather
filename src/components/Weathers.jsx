import {React,useEffect,useState} from 'react'
import { useGetWeatherQuery } from '../services/WeatherApi'
import TopButtons from './TopButtons'
import Inputs from './Inputs'
import TimeAndLocation from './TimeAndLocation';
import TemperatureAndDetails from './TemperatureAndDetails';
import Forecast from './Forecast'

const Weathers = () => {
  const [searchTerm, setSearchTerm] = useState('tehran');
  const {data}=useGetWeatherQuery(searchTerm);
  const [weathers, setWeathers] = useState([])
  console.log(data)
    
   
  return (
   <div className='container-fluid'>
        <TopButtons searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Inputs data={data} setSearchTerm={setSearchTerm}/>
            <>
            <TimeAndLocation pubDate={data?.pubDate} location={data?.location}/>
            <TemperatureAndDetails data={data}/>
            <Forecast title="daily forecast" forecast={data?.forecasts}/>
            </>
      
       
       
   </div>
  )
}

export default Weathers