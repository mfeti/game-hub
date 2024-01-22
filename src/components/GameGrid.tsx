import { Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";

const GameGrid = () => {
  const { games, errors } = useGame();
  return (
    <>
      {errors && <Text colorScheme="red">{errors}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
