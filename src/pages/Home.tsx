import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { getProducts } from "../store/getProductsSlice.ts";
import { useEffect } from "react";
import ListProducts from "../components/ListProducts.tsx";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <ListProducts />;
};

export default Home;
