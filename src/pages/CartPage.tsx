import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { useEffect } from "react";
import { clearAllToCart, getProducts } from "../store/getProductsSlice.ts";
import CartProductList from "../components/CartProductList.tsx";
import { Center } from "@mantine/core";

const Cart = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Center>
        <span
          className="cursor-pointer text-4xl my-5"
          onClick={() => dispatch(clearAllToCart())}
        >
          Clear all
        </span>
      </Center>
      <CartProductList />
    </>
  );
};

export default Cart;
