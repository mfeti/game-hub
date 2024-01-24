import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText:string)=> void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack p={"10px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
