import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { MouseEvent } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { filterChange } from "../../store/getProductsSlice.ts";

function SampleNextArrow(props: {
  className?: string;
  style?: { e: string };
  onClick?: () => void;
  mode: string;
}) {
  const { mode, className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: mode === "light" ? "#000" : "#fff",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: { e: string };
  onClick?: () => void;
  mode: string;
}) {
  const { mode, className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: mode === "light" ? "#000" : "#fff",
      }}
      onClick={onClick}
    />
  );
}

const FilterList = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.getProducts.mode);
  const products = useAppSelector((state) => state.getProducts.items);
  const AllCategory = products.map((el) => el.category);
  const category = [...new Set(AllCategory)];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow mode={mode} />,
    prevArrow: <SamplePrevArrow mode={mode} />,
  };

  const clickFunc = (e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    if (target.textContent) {
      dispatch(filterChange(target.textContent));
    }
  };

  return (
    <Slider className="mb-8" {...settings}>
      <span className="btn-primary" onClick={clickFunc}>
        all
      </span>
      {category.map((el) => (
        <span className="btn-primary" onClick={clickFunc} key={el}>
          {el}
        </span>
      ))}
    </Slider>
  );
};

export default FilterList;
