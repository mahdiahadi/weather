import React from 'react'
import {DateTime} from 'luxon'

const TimeAndLocation = ({location,pubDate}) => {
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <h2 className="text-white text-xl ">
        {formatToLocalTime (0,pubDate)}
        </h2>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{location?.timezone_id}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation