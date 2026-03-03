import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { motion } from "framer-motion";
import { navbarItems } from "../data/content";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/90 backdrop-blur-md fixed top-0 z-50"
      maxWidth="full"
      height="5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/image/Logo-Dent.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navbarItems.map((item, index) => (
          <NavbarItem key={item.label}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                as="a"
                href={item.href}
                variant="light"
                className="text-gray-700 font-medium"
              >
                {item.label}
              </Button>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            href="#contacto"
            color="primary"
            variant="flat"
            className="font-semibold"
          >
            Agendar Cita
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-md pt-6">
        {navbarItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <a
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-lg text-gray-700 font-medium py-2 block"
            >
              {item.label}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
