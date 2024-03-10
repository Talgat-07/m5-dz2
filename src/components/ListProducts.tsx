import { useAppSelector } from "../hooks/reduxHooks.ts";
import ItemProduct from "./ItemProduct.tsx";
import { Group } from "@mantine/core";
import { useEffect, useState } from "react";

const ListProducts = () => {
  const products = useAppSelector((state) => state.getProducts.items);
  const [isProducts, setProducts] = useState(products);
  const FilteredCategory = useAppSelector(
    (state) => state.getProducts.FilteredCategory,
  );

  useEffect(() => {
    if (FilteredCategory === "all") {
      setProducts(products);
      return;
    }
    setProducts(products.filter((el) => el.category === FilteredCategory));
  }, [products, FilteredCategory]);

  return (
    <Group position="center">
      {isProducts.map((el) => (
        <ItemProduct key={el.id} product={el} />
      ))}
    </Group>
  );
};

export default ListProducts;
