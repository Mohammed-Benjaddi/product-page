import { useState, useEffect, useRef } from "react";
import Image from "./Image";
import { useSelector } from "react-redux";
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg";
import Backdrop from "./Backdrop";

const ProductSlide = () => {
  const currentSneakersColor = useSelector(
    (state) => state.sneakers.sneakersColor
  );

  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const imgIndex = useRef(0);
  const productWrapper = useRef();

  useEffect(() => {
    setTimeout(() => {
      checker();
    }, 400);
  });

  const handleArrowRight = () => {
    const productImages = document.querySelectorAll(".product-img");
    const pagination = document.querySelectorAll(".pagination > span");
    // console.log(pagination);
    productImages.forEach((img) => {
      img.classList.remove("active");
    });
    pagination.forEach((element) => {
      element.classList.remove("active");
    });
    imgIndex.current = imgIndex.current === 3 ? 3 : imgIndex.current + 1;
    productImages[imgIndex.current].classList.add("active");
    pagination[imgIndex.current].classList.add("active");
    checker();
  };

  const handleArrowLeft = () => {
    const productImages = document.querySelectorAll(".product-img");
    const pagination = document.querySelectorAll(".pagination > span");
    productImages.forEach((img) => {
      img.classList.remove("active");
    });
    pagination.forEach((element) => {
      element.classList.remove("active");
    });
    imgIndex.current = imgIndex.current === 0 ? 0 : imgIndex.current - 1;
    productImages[imgIndex.current].classList.add("active");
    pagination[imgIndex.current].classList.add("active");
    checker();
  };

  const checker = () => {
    const leftArrow = document.querySelectorAll("#left-arrow");
    const rightArrow = document.querySelectorAll("#right-arrow");
    console.log("checker function");
    if (imgIndex.current === 0) {
      leftArrow[0].classList.add("stop-clicking");
      leftArrow[1].classList.add("stop-clicking");

      rightArrow[0].classList.remove("stop-clicking");
      rightArrow[1].classList.remove("stop-clicking");
      document.querySelector(".product-img").classList.add("active");
      document.querySelector(".pagination > span").classList.add("active");
    } else if (imgIndex.current === 3) {
      rightArrow[0].classList.add("stop-clicking");
      rightArrow[1].classList.add("stop-clicking");

      leftArrow[0].classList.remove("stop-clicking");
      leftArrow[1].classList.remove("stop-clicking");
    } else {
      leftArrow[0].classList.remove("stop-clicking");
      leftArrow[1].classList.remove("stop-clicking");

      rightArrow[0].classList.remove("stop-clicking");
      rightArrow[1].classList.remove("stop-clicking");
    }
  };

  const handlePaginationClick = (e) => {
    const paginationId = e.target.id;
    const productImages = document.querySelectorAll(".product-img");
    const pagination = document.querySelectorAll(".pagination > span");
    productImages.forEach((img) => {
      img.classList.remove("active");
    });
    pagination.forEach((element) => {
      element.classList.remove("active");
    });
    imgIndex.current = Number(paginationId);
    productImages[imgIndex.current].classList.add("active");
    pagination[imgIndex.current].classList.add("active");
    checker();
  };

  const zoomProductImages = () => {
    if (!isImageZoomed) {
      setIsImageZoomed(!isImageZoomed);
    } else {
      setIsImageZoomed(!isImageZoomed);
    }
  };

  useEffect(() => {
    if (isImageZoomed) {
      productWrapper.current.classList.add("active");
    } else {
      productWrapper.current.classList.remove("active");
    }
  }, [isImageZoomed]);

  return (
    <>
      {isImageZoomed && <Backdrop toggle={setIsImageZoomed} />}
      <div
        className="product h-40vh relative w-full lg:h-full transition"
        ref={productWrapper}
      >
        <div className="arrows flex gap-6 absolute top-12 left-8 md:top-16 md:left-16 z-10 transition-all">
          <ArrowLeft
            id="left-arrow"
            className="arrow"
            onClick={handleArrowLeft}
          />
          <ArrowRight
            id="right-arrow"
            className="arrow"
            onClick={handleArrowRight}
          />
        </div>
        {}
        <div className="product-container">
          <div className="h-full overflow-hidden">
            <div className="arrows flex justify-between px-12 absolute md:fixed left-0 top-1/3 md:top-1/2 w-full transition-all pointer-events-none opacity-0">
              <ArrowLeft
                id="left-arrow"
                className="w-12 h-12 bg-slate-600 text-white rounded-full p-1 cursor-pointer hover:bg-slate-500"
                onClick={handleArrowLeft}
              />
              <ArrowRight
                id="right-arrow"
                className="w-12 h-12 bg-slate-600 text-white rounded-full p-1 cursor-pointer hover:bg-slate-500"
                onClick={handleArrowRight}
              />
            </div>

            <Image
              sneakersColor={currentSneakersColor}
              direction={"left"}
              onClick={zoomProductImages}
            />
            <Image
              sneakersColor={currentSneakersColor}
              direction={"double"}
              onClick={zoomProductImages}
            />
            <Image
              sneakersColor={currentSneakersColor}
              direction={"right"}
              onClick={zoomProductImages}
            />
            <Image
              sneakersColor={currentSneakersColor}
              direction={"bottom"}
              onClick={zoomProductImages}
            />

            <div className="pagination transition">
              <span id="0" onClick={handlePaginationClick}></span>
              <span id="1" onClick={handlePaginationClick}></span>
              <span id="2" onClick={handlePaginationClick}></span>
              <span id="3" onClick={handlePaginationClick}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlide;
