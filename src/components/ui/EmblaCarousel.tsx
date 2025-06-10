import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.35;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: { src: string; alt: string; bgColor: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
    startIndex: 1,
  });
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0.2, 1).toString();
          const scale = 0.8 + numberWithinRange(tweenValue, 0, 1) * 0.2;
          const translateX = (1 - numberWithinRange(tweenValue, 0, 1)) * -150;
          const translateY =
            Math.abs(1 - numberWithinRange(tweenValue, 0, 1)) * 5;
          const rotate = (1 - numberWithinRange(tweenValue, 0, 1)) * -3;
          const zIndex = Math.round(numberWithinRange(tweenValue, 0, 1) * 30);
          const slide = emblaApi.slideNodes()[slideIndex];

          slide.style.opacity = opacity;
          slide.style.transform = `translate3d(${translateX}px, ${translateY}px, ${zIndex}px) scale(${scale}) rotate(${rotate}deg)`;
          slide.style.zIndex = zIndex.toString();
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);

    // Tambahkan setInterval untuk mengubah slide otomatis setiap 5 detik
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext(); // Menggeser ke slide berikutnya
      }
    }, 5000); // Ganti slide setiap 5000 ms (5 detik)

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, [emblaApi, setTweenFactor, tweenOpacity]);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-10">
        <div className="overflow-hidden -mx-4" ref={emblaRef}>
          <div className="flex select-none touch-pan-x py-12">
            {slides.map(({ src, alt, bgColor }, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_40%] -ml-36 first:ml-0 transition-all duration-500 ease-out will-change-transform"
                style={{ perspective: "1500px" }}
              >
                <div
                  className={`${bgColor} rounded-3xl flex items-center justify-center h-48 w-full shadow-lg transform transition-all duration-500 hover:shadow-xl`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="max-h-16 sm:max-h-24 object-contain transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="mx-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          />
          <div className="flex space-x-1 mx-2 px-2 py-1 bg-white rounded-full shadow-inner">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                selected={index === selectedIndex}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-yellow-400 scale-110 shadow"
                    : "bg-gray-300 hover:bg-yellow-400"
                }`}
              />
            ))}
          </div>
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="mx-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
