import { useAppSelector } from "../hooks/reduxHooks.ts";
import { Group } from "@mantine/core";
import CartProductItem from "./CartProductItem.tsx";

const CartProductList = () => {
  const products = useAppSelector((state) => state.getProducts.cart);
  console.log(products);
  return (
    <Group className="flex-col" position="center">
      {products.map((el) => (
        <CartProductItem key={el.id} product={el} />
      ))}
    </Group>
  );
};

export default CartProductList;
