import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  const maxNum = greeting.message.length-1

  const ran = (maxNum) => {
    const randomNumber = Math.floor(Math.random() * maxNum );
    return randomNumber;
  };

  const ramdomMsg = greeting.message[ran(maxNum)].msg

  return (
    <h2>{ramdomMsg}</h2>
  );
};
export default Greeting;
