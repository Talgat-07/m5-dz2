import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { useEffect } from "react";
import { clearAllToCart, getProducts } from "../store/getProductsSlice.ts";
import CartProductList from "../components/CartProductList.tsx";
import { Center } from "@mantine/core";

const Cart = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = useAppSelector((state) => state.getProducts.cart);

  return (
    <>
      <Center>
        <span
          className="cursor-pointer text-4xl my-5"
          onClick={() => dispatch(clearAllToCart())}
        >
          {product.length > 0 ? "Clear all" : "Cart is empty"}
        </span>
      </Center>
      <CartProductList />
    </>
  );
};

export default Cart;
