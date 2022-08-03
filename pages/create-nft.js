import React, { useState, useMemo, useCallback, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { useDropzone } from 'react-dropzone';
import images from '../assets';
import { Button, Input } from '../components';

const CreateNFT = () => {
  const { theme } = useTheme();

  const onDrop = useCallback(() => {
    // upload image to ipfs (blockchain)
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const [fileUrl, setFileUrl] = useState(null);

  const fileStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg-white border dark:border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
    ${isDragActive && ' border-file-active'}
    ${isDragAccept && ' border-file-accept'}
    ${isDragReject && ' border-file-reject'}
    `
  ), [isDragActive, isDragAccept, isDragReject]);

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new NFT</h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload File</p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">JPG, PNG, GIF, SVG, and WEBM. Max 100MB</p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="upload image"
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </div>
                <div>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">Drag and Drop Files</p>
                  <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2">Or Browse Media on your Device</p>
                </div>
              </div>
              {fileUrl && (
                <aside>
                  <img src={fileUrl} alt="asset_file" />
                </aside>
              )}
            </div>
          </div>
        </div>
        <Input inputType="input" fieldName="Name" inputText="NFT Name" handleClick={() => {}} />
        <Input inputType="textarea" fieldName="Description" inputText="Description of your NFT" handleClick={() => {}} />
        <Input inputType="number" fieldName="Price" inputText="Listing Price" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default CreateNFT;
