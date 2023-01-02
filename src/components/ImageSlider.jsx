import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/roasted-fish-garnished-with-lemon-slices-served-with-vegetables_140725-1413.jpg?w=1060&t=st=1672679228~exp=1672679828~hmac=f2b96c37ba4f47a5467198b882926280ab87191152401981c745b88187bd192d",
      title: "Fish",
    },
    {
      url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Sushi",
    },
    {
      url: "https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11251.jpg?w=996&t=st=1672679395~exp=1672679995~hmac=622db1f680d75bdf4ccac7d71c821f0ab3c42117e4b9e8be6cbf0b3b5c274149",
      title: "Lasagna",
    },
    {
      url: "https://img.freepik.com/free-photo/lamb-steak-pieces-with-sauces-grilled-pepper-fresh-salad-wooden-board_140725-10580.jpg?w=996&t=st=1672679671~exp=1672680271~hmac=0b09c3be7e3445f95e2bdc1b40799ca85a282d4ca970de41a2c0506db7010382",
      title: "Meat",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
