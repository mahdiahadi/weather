import React from 'react'
import { DateTime } from 'luxon';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const TemperatureAndDetails = ({data}) => {
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
      <p>{data?.current_observation?.condition?.text}</p>
    </div>

    <div className="flex flex-row items-center justify-around text-white py-3">
      {/* <img src={iconUrlFromCode(icon)} alt="" className="w-20" /> */}
      <p className="text-5xl">{`${data?.current_observation?.condition?.temperature.toFixed()}°`}</p>
      <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center">
          <UilTemperature size={18} className="mr-1" />
          Real fell:
          <span className="font-medium ml-1">{`${data?.current_observation?.atmosphere?.pressure.toFixed()}°`}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <UilTear size={18} className="mr-1" />
          Humidity:
          <span className="font-medium ml-1">{`${data?.current_observation?.atmosphere?.humidity.toFixed()}%`}</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
          <UilWind size={18} className="mr-1" />
          Wind:
          <span className="font-medium ml-1">{`${data?.current_observation?.wind?.speed.toFixed()} km/h`}</span>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
      <UilSun />
      <p className="font-light">
        Rise:{" "}
        <span className="font-medium ml-1">
          {formatToLocalTime(7, data?.pubDate, "hh:mm a")}
        </span>
      </p>
      <p className="font-light">|</p>

      <UilSunset />
      <p className="font-light">
        Set:{" "}
        <span className="font-medium ml-1">
          {formatToLocalTime(19,  data?.pubDate, "hh:mm a")}
        </span>
      </p>
      <p className="font-light">|</p>

      <UilSun />
      <p className="font-light">
        High:{" "}
        <span className="font-medium ml-1">{`${data?.current_observation?.condition?.temperature.toFixed()}°`}</span>
      </p>
      <p className="font-light">|</p>

      <UilSun />
      <p className="font-light">
        Low:{" "}
        <span className="font-medium ml-1">{`${data?.current_observation?.condition?.temperature.toFixed()}°`}</span>
      </p>
    </div>
  </div>
  )
}

export default TemperatureAndDetails