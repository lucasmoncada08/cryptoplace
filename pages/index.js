import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Banner, CreatorCard } from '../components';
import { makeId } from '../utils/makeId';
import images from '../assets';

const Home = () => {
  const { theme } = useTheme();

  const [hideButtons, setHideButtons] = useState(false);

  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <>
      <Head>
        <title>Cryptoplace</title>
        <meta name="description" content="nft marketplace application using ethereum" />
      </Head>
      <div className="flex justify-center sm:px-4 p-12">
        <div className="w-full minmd:w-4/5">
          <Banner
            name="Discover, collect, and sell spectacular NFTs"
            parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
            childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          />

          <div>
            <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Best Creators</h1>

            <div
              className="relative flex-1 max-w-full flex mt-3"
              ref={parentRef}
            >
              <div
                className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
                ref={scrollRef}
              >
                {[6, 7, 8, 9, 10].map((i) => (
                  <CreatorCard
                    key={`creator-${i}`}
                    rank={i}
                    creatorImage={images[`creator${i}`]}
                    creatorName={makeId(10)}
                    creatorEths={10 - i * 0.6}
                  />
                ))}
                { !hideButtons
                && (
                <>
                  <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 left-0 cursor-pointer">
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      alt="left_arrow"
                      className={theme === 'light' ? 'filter invert' : undefined}
                    />
                  </div>
                  <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 right-0 cursor-pointer">
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      alt="right_arrow"
                      className={theme === 'light' ? 'filter invert' : undefined}
                    />
                  </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
