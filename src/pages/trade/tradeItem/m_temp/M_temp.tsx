import { useState, useEffect } from 'react';
import axios from 'axios';

interface MTempProps {
  temperature: number;
}

const M_temp: React.FC<MTempProps> = ({ temperature }) => {
  const getEmoji = () => {
    if (temperature >= 0 && temperature <= 30) {
      return "😡"; // 이모지1
    } else if (temperature > 30 && temperature <= 60) {
      return "😐"; // 이모지2
    } else if (temperature > 60 && temperature <= 100) {
      return "😊"; // 이모지3
    }

    return "";
  };

  return (
    <div className="">
      <div className="">
        <span className="ml-16 text-orange-400 font-bold">
          {temperature}°C
        </span>
        <span className="text-2xl relative" style={{ lineHeight: '0.5' }}>{getEmoji()}</span>
      </div>
      <div className="mr-9 flex items-center justify-between">
        <div className="bg-gray-200 h-1 w-24 rounded-full overflow-hidden">
          <div
            className="bg-orange-400 h-6"
            style={{ width: `${temperature}%` }}
          ></div>
          
        </div>
        
      </div>
    </div>
  );
};

export default M_temp;
