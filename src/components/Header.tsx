import { ActionIcon, Group } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { themeChange } from "../store/getProductsSlice.ts";
import MyLink from "./myLink.tsx";

const Header = () => {
  const theme = useAppSelector((state) => state.getProducts.mode);
  const dispatch = useAppDispatch();
  return (
    <Group spacing={50} position="center" p={20}>
      <MyLink to="/">Главная</MyLink>
      <MyLink to="filter">Фильтрация</MyLink>
      <MyLink to="cart">cart</MyLink>
      <ActionIcon onClick={() => dispatch(themeChange())}>
        {theme === "light" ? <IconMoon /> : <IconSun />}
      </ActionIcon>
    </Group>
  );
};

export default Header;
