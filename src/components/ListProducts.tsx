import { useAppSelector } from "../hooks/reduxHooks.ts";
import ItemProduct from "./ItemProduct.tsx";
import { Group } from "@mantine/core";

const ListProducts = () => {
  const products = useAppSelector((state) => state.getProducts.items);

  return (
    <Group position="center">
      {products.map((el) => (
        <ItemProduct key={el.id} product={el} />
      ))}
    </Group>
  );
};

export default ListProducts;
