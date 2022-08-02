import React, { useState, useMemo, useCallback, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { useDropzone } from 'react-dropzone';
import images from '../assets';
import { Button } from '../components';

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
    ''
  ), []);

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new NFT</h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload File</p>
          <div className="mt-4">
            <div className={fileStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;

/* <div className="flex flex-col items-center p-12 sm:px-4">
      <div className="flex justify-start w-3/5 mt-4 mb-12">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new Item</h1>
      </div>
      <div className="flex justify-start w-3/5 my-4">
        <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Upload File</h2>
      </div>
      <div className="flex flex-col items-center p-16 w-3/5 bg-nft-black-3 rounded-2xl border-2 border-dashed">
        <p className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold">JPG, PNG, GIF, SVG, WEBM, MP3, or MP4. Max 100MB</p>
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden my-8">
          <Image
            src={images.upload}
            layout="fill"
            objectFit="cover"
            alt="upload image"
          />
        </div>
        <p className="font-poppins dark:text-white text-nft-black-1 text-base font-semibold my-2">Drag and Drop File</p>
        <p className="font-poppins dark:text-white text-nft-black-1 text-base font-semibold my-2">or browse media on your device</p>
      </div>

      <div className="flex justify-start w-3/5 mt-8 mb-4">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Name</h1>
        <p />
      </div>
    </div> */
