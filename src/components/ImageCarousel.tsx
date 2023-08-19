/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ImageCarousel.css';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { useEffect, useState } from 'react';
import imagesList from '../image-data';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ImageCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxImages = 2;
  let imageCount = 0;
  const filteredImagesList = [];
  for (let i = 0; i < imagesList.length; i++) {
    if (imagesList[i].width >= windowWidth && imageCount < maxImages) {
      filteredImagesList.push(imagesList[i]);
      imageCount++;
    }
  }
  const imageIndex = wrap(
    0,
    filteredImagesList.length,
    page - filteredImagesList.findIndex((image) => windowWidth <= image.width)
  );
  // const imageIndex = wrap(
  //   0,
  //   imagesList.length,
  //   page - imagesList.findIndex((image) => windowWidth <= image.width)
  // );

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={filteredImagesList[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        ‣
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        ‣
      </div>
    </>
  );
};

export default ImageCarousel;
