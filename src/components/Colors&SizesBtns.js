import { useEffect } from "react";
import {
  setSneakersColor,
  setSneakersSize,
} from "../features/Sneakers/sneakersSlice";
import { useDispatch, useSelector } from "react-redux";



const ColorsSizesBtns = () => {
  const defaultSneakersColor = useSelector(
    (state) => state.sneakers.sneakersColor
  );

  useEffect(() => {
    const allColorsBtns = document.querySelectorAll(".gradient-bg-btn");
    allColorsBtns.forEach(btn => {
      if (btn.id === defaultSneakersColor) {
        btn.classList.add('active')
      }
    });
  })

  const dispatch = useDispatch();

  const handleSneakersColor = (e) => {
    const colorBtn = e.target;
    const allColorsBtns = document.querySelectorAll(".gradient-bg-btn");
    if (!colorBtn.classList.contains("active")) {
      allColorsBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      colorBtn.classList.add("active");
      dispatch(setSneakersColor(colorBtn.id));
    } else {
      colorBtn.classList.remove("active");
      allColorsBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
    }
  };

  function handleSneakersSize(e) {
    const sizeBtn = e.target;
    if (!sizeBtn.classList.contains("active")) {
      const allSizeBtn = document.querySelectorAll(".size-btn");

      allSizeBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      sizeBtn.classList.add("active");
      dispatch(setSneakersSize(sizeBtn.id));
    } else {
      sizeBtn.classList.remove("active");
    }
  }

  return (
    <div className="flex justify-center md:justify-between lg:justify-start items-center md:flex-row flex-col lg:flex-col lg:items-baseline">
      <div className="product-color mt-9 flex justify-between flex-wrap w-44 h-32">
        <div
          id="black-red"
          className="gradient-bg-btn from-black to-red-500"
          onClick={handleSneakersColor}
        ></div>
        <div
          id="white-blue"
          className="gradient-bg-btn from-blue-500 to-white"
          onClick={handleSneakersColor}
        ></div>
        <div
          id="white-red"
          className="gradient-bg-btn from-white to-red-500"
          onClick={handleSneakersColor}
        ></div>
        <div
          id="black-white"
          className="gradient-bg-btn from-black to-white"
          onClick={handleSneakersColor}
        ></div>
        <div
          id="black-yellow"
          className="gradient-bg-btn from-yellow-500 to-black"
          onClick={handleSneakersColor}
        ></div>
        <div
          id="white-biege"
          className="gradient-bg-btn from-white to-rose-300"
          onClick={handleSneakersColor}
        ></div>
      </div>

      <div className="sizes w-44 flex justify-between mt-9 lg:mt-5">
        <div id="sm" className="size-btn" onClick={handleSneakersSize}>
          SM
        </div>
        <div id="md" className="size-btn" onClick={handleSneakersSize}>
          MD
        </div>
        <div id="lg" className="size-btn" onClick={handleSneakersSize}>
          LG
        </div>
      </div>
    </div>
  )
}

export default ColorsSizesBtns