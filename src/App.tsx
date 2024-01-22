import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBAr";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"} bg="#333">
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="gray">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
