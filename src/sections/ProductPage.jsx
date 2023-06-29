import ProductSlide from "../components/ProductSlide";
import ColorsSizesBtns from "../components/Colors&SizesBtns";
import SideBar from "../components/SideBar";

const ProductPage = () => {
  const addToFavorite = (e) => {
    const favoriteBtn = e.target;
    if (favoriteBtn.classList.contains("active")) {
      favoriteBtn.classList.remove("active");
    } else {
      favoriteBtn.classList.add("active");
    }
  };

  return (
    <>
      <div className="product-page grid lg:grid-cols-2 pt-8 md:pt-16 relative dark:text-white">
        <div className="left lg:col-span-1">
          <h1 className="font-bold lg:text-left text-center text-6xl mb-5">
            Nike
            <br />
            Jordan Air Force
          </h1>
          <span className="price w-full inline-flex justify-center md:inline md:text-left text-5xl font-bold">
            $159
          </span>
          <ColorsSizesBtns />
          <div className="absolute right-1/2 -bottom-28 mr-10">
            <button className="favorite fav-bag-btn" onClick={addToFavorite}>
              Favorite
            </button>
          </div>
        </div>
        <div className="right lg:col-span-1 relative mt-0 md:mt-16 lg:mt-0">
          <ProductSlide />
          <div className="absolute left-1/2 lg:left-0 -bottom-28 ml-10">
            <button className="fav-bag-btn">Bag</button>
          </div>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default ProductPage;
