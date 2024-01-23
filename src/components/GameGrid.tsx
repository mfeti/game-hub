import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, errors, isLoading } = useGame();
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errors && <Text colorScheme="red">{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={"10px"}
      >
        {isLoading &&
          items.map((item) => (
            <GameCardContainer>
              <GameCardSkelton key={item} />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
