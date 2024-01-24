import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectedSort: (sortText: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectedSort, selectedSort }: Props) => {
  const setOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const current = setOrders.find((order) => selectedSort === order.value);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: {current?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {setOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
