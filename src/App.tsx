import Home from "./pages/Home.tsx";
import { Container, MantineProvider } from "@mantine/core";
import Header from "./components/Header.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <Container size="xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </MantineProvider>
  );
}

export default App;
