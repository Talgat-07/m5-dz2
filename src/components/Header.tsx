import { Link } from "react-router-dom";
import { Group } from "@mantine/core";

const Header = () => {
  return (
    <Group position="center">
      <Link to="/">Главная</Link>
      <Link to="filter">Фильтрация</Link>
    </Group>
  );
};

export default Header;
