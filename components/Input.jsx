import React from 'react';

const Input = ({ inputType, fieldName, inputText, handleClick }) => (
  <div className="w-full mt-10">
    <p className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold">{fieldName}</p>

    {inputType === 'number' ? (
      <div className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 w-full flexBetween flex-row">
        <input
          type="number"
          className="flex w-full dark:bg-nft-black-1 bg-white outline-none"
          placeholder={inputText}
          onChange={handleClick}
        />
        <p className="font-poppins dark:text-white text-nft-black-1 text-l font-semibold">ETH</p>
      </div>
    ) : inputType === 'textarea' ? (
      <textarea
        rows={8}
        className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 w-full"
        placeholder={inputText}
        onChange={handleClick}
      />
    ) : (
      <input
        className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 w-full"
        placeholder={inputText}
        onChange={handleClick}
      />
    )}

  </div>
);

export default Input;
