import ListProducts from "../components/ListProducts.tsx";
import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { useEffect } from "react";
import { getProducts } from "../store/getProductsSlice.ts";
import FilterList from "../components/filter/FilterList.tsx";

const Filter = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <FilterList />
      <ListProducts />
    </>
  );
};

export default Filter;
