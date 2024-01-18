import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import { useContext } from "react";
import { RouteContext } from "../Hooks/MyContext";
import { Link as ReactRouterLink } from "react-router-dom";

export default function App() {
  const { activo, setActivo } = useContext(RouteContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "Habilidades", "Portafolio", "Contacto"];
  return (
    <div className="w-[100%] m-0 sm:my-2 sm:mx-auto sm:w-[90%]">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-secondary",
          ],
        }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit text-2xl ">
              Hemer <p className="inline text-gradient">DEV</p>
            </p>
            <img
              src="/src/Icons/terminal.svg"
              alt="no carga"
              className="mx-2"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-16" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={activo === item}>
              <Link
                to={item}
                className={activo !== item && "text-white"}
                onClick={() => {
                  setActivo(item);
                }}
                isBlock
                color="secondary"
                as={ReactRouterLink}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="my-2">
              <Link
                className={
                  activo === item
                    ? " w-full text-xl"
                    : "text-white  w-full text-xl"
                }
                href="#"
                size="lg"
                onClick={() => {
                  setActivo(item);
                }}
                color="secondary"
                to={item}
                as={ReactRouterLink}
              >
                {item}
              </Link>
              <Divider className="my-2" />
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
