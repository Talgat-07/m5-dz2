import { FC } from "react";
import { ActionIcon, Card, Group, Image, Text } from "@mantine/core";
import { addToCart, ProductType } from "../store/getProductsSlice.ts";
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
        <ActionIcon onClick={() => dispatch(addToCart(product))}>
          <IconPlus />
        </ActionIcon>
        <Text>{product.counter}</Text>
        <ActionIcon>
          <IconMinus />
        </ActionIcon>
      </Group>
      <Text>{product.price * product.counter}$</Text>
      <ActionIcon>
        <IconShoppingCartX />
      </ActionIcon>
    </Card>
  );
};

export default CartProductItem;
