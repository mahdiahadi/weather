import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../services/WeatherApi";


const store=configureStore({
    reducer:{
            [weatherApi.reducerPath]:weatherApi.reducer
    }
})
export default store;