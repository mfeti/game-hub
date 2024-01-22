import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();
  return (
    <>
      {errors && <Text colorScheme="red">{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, lg: 2, xl: 3 }}
        padding={"10px"}
        spacing={"10px"}
      >
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
