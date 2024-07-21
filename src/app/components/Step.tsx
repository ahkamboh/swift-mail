import React from 'react';

const Step = ({number,imgSrc,altText,text}:{ number:string, imgSrc:string, altText:string ,text:string }) => (
  <div className="w-full h-full flex-col flex justify-center items-center sm:space-y-10 space-y-7">
    <div className="sm:gap-2 gap-1 flex sm:flex-row flex-col justify-center items-center">
      <div className="h-8 w-8 flex justify-center items-center rounded-full gradient-background ">{number}</div>
      <div className="2xl:text-xl lg:text-base text-sm">{text}</div>
    </div>
    <img src={imgSrc} alt={altText} className="sm:rounded-2xl rounded-lg 2xl:w-full lg:w-[90%] w-full h-full" />
  </div>
);

export default Step;
