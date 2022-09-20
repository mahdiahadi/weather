import React from 'react'

const Forecast = ({forecast,title}) => {
  const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
  return (
    <div>
         <div className="flex items-center justify-center mt-6">
           <p className="text-white font-medium uppercase">{title}</p>
         </div>
          <hr className="my-2" />

          <div className="flex flex-row items-center justify-between text-white">
            {
              forecast?.map((item,index) => (
                <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                {/* <img src={iconUrlFromCode(item.code)} alt="" /> */}
                <h4 className="font-light ">{item.day}</h4>
                <p className='font-light text-sm'>{item.text}</p>
                <p className="font-medium">{`${item.high.toFixed()}°`} {`${item.low.toFixed()}°`}</p>
                </div>
              ))
            }
           </div>
    </div>
  )
}

export default Forecast