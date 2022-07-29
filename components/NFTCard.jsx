import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

const NFTCard = ({ nft }) => {
  console.log();

  return (
    <Link href={{ pathname: '/nft-details', query: { nft } }}>
      <div />
    </Link>
  );
};

export default NFTCard;
