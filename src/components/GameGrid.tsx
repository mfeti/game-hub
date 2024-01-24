import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, errors, isLoading } = useGame(selectedGenre, selectedPlatform);
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
            <GameCardContainer key={item}>
              <GameCardSkelton  />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
