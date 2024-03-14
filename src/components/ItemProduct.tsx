import { addToCart, ProductType } from "../store/getProductsSlice.ts";
import { FC, useEffect, useRef, useState } from "react";
import { ActionIcon, Badge, Card, Group, Image, Text } from "@mantine/core";
import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { IconShoppingCartPlus } from "@tabler/icons-react";

const ItemProduct: FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useAppDispatch();
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [isWidth, setWidth] = useState("");

  useEffect(() => {
    if (badgeRef.current) {
      const isWidth = badgeRef.current.clientWidth;
      const total = 100 - Math.floor((isWidth / 248) * 100) - 9;
      setWidth(`${total}%`);
    }
  }, []);

  return (
    <Card className="w-72" shadow="sm" p="lg">
      <Card.Section>
        <Image src={product.images[0]} alt="Norway" />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: 12 }}>
        <Text sx={{ width: isWidth }} weight={500}>
          {product.title}
        </Text>
        <Badge ref={badgeRef} color="pink" variant="light">
          {product.category}
        </Badge>
      </Group>

      <Text size="sm" className="text-current">
        {product.description}
      </Text>

      <Group className="mt-3.5" position="apart">
        <Text>Price: {product.price}</Text>
        <ActionIcon
          onClick={() => dispatch(addToCart(product))}
          size={40}
          radius="xl"
        >
          <IconShoppingCartPlus size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default ItemProduct;
