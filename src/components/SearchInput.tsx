import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input
      borderRadius="20px"
      placeholder="searching games..."
      variant="filed"
    />
  </InputGroup>
);

export default SearchInput;
