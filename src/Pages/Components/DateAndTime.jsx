import React, { useState, useEffect } from 'react';

const DateAndTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatDate = (date) => {
      return date.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };
  
    const formatTime = (date) => {
      return date.toLocaleTimeString();
    };
  
    return (
      <div>
        <div className='font-semibold text-2xl'>Date: {formatDate(dateTime)}</div>
        <div className='font-semibold text-xl text-green-500'>Time: {formatTime(dateTime)}</div>
        
      </div>
    );
  };
  

export default DateAndTime;