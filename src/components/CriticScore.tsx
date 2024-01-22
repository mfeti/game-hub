import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      padding="10px"
      size={"14px"}
      borderRadius={"10px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
