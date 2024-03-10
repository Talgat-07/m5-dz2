import Home from "./pages/Home.tsx";
import { ColorScheme, Container, MantineProvider } from "@mantine/core";
import Header from "./components/Header.tsx";
import { Route, Routes } from "react-router-dom";
import Filter from "./pages/Filter.tsx";
import { useAppSelector } from "./hooks/reduxHooks.ts";

function App() {
  const theme = useAppSelector((state) => state.getProducts.mode);
  return (
    <MantineProvider
      theme={{ colorScheme: theme as Partial<ColorScheme> }}
      withNormalizeCSS
      withGlobalStyles
    >
      <Container size="xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="filter" element={<Filter />} />
        </Routes>
      </Container>
    </MantineProvider>
  );
}

export default App;
