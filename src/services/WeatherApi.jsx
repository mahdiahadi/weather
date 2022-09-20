import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const weatherApiHeader={
  'X-RapidAPI-Key': '543849b09dmsha31a824760c3d19p1b1089jsndfeaec21e701',
  'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
}
const appId='mqWfJiYnQ4UsWLnODmGH'
const baseUrl="https://yahoo-weather5.p.rapidapi.com";

const createRequest=(url)=>({ url , headers: weatherApiHeader });

export const weatherApi=createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getWeather: builder.query({
        query: (searchTerm) => createRequest(`/weather?location=${searchTerm}&format=json`),
      }),
    })
})

export const {
    useGetWeatherQuery
}=weatherApi;
