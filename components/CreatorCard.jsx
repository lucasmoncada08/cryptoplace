import React from 'react';
import Image from 'next/image';

import Images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => (
  <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-column p-4 m-4">
    <div>
      <p>{rank}</p>
    </div>
    <div className="my-2 flex justify-center">
      <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
        <Image
          src={creatorImage}
          layout="fill"
          objectFit="cover"
          alt="creatorName"
        />
      </div>
    </div>
  </div>
);

export default CreatorCard;
