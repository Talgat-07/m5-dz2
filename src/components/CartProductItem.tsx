import { FC } from "react";
import { ActionIcon, Card, Group, Image, Text } from "@mantine/core";
import {
  addToCart,
  clearProductCart,
  minusCounterCart,
  ProductType,
} from "../store/getProductsSlice.ts";
import { IconMinus, IconPlus, IconShoppingCartX } from "@tabler/icons-react";
import { useAppDispatch } from "../hooks/reduxHooks.ts";

type AppProps = {
  product: ProductType;
};

const CartProductItem: FC<AppProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="flex w-full items-center justify-between flex-row">
      <Image height={80} src={product.images[0]} />
      <Text>{product.title}</Text>
      <Group>
        <ActionIcon onClick={() => dispatch(minusCounterCart(product))}>
          <IconMinus />
        </ActionIcon>
        <Text>{product.counter}</Text>
        <ActionIcon onClick={() => dispatch(addToCart(product))}>
          <IconPlus />
        </ActionIcon>
      </Group>
      <Text>{product.price * product.counter}$</Text>
      <ActionIcon onClick={() => dispatch(clearProductCart(product))}>
        <IconShoppingCartX />
      </ActionIcon>
    </Card>
  );
};

export default CartProductItem;
