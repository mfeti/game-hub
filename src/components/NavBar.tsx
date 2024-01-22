import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image src={logo} boxSize="60px" />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
