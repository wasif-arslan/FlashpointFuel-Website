"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Header() {
  const {
    isOpen: isOpenServices,
    onOpen: onOpenServices,
    onClose: onCloseServices,
  } = useDisclosure();
  const {
    isOpen: isOpenProducts,
    onOpen: onOpenProducts,
    onClose: onCloseProducts,
  } = useDisclosure();
  const [showNav, setShowNav] = useState(false);

  const servicesMenu = (
    <MenuList className="bg-red-500 p-10  rounded-lg text-white">
      <MenuItem onClick={onCloseServices} className="mb-2">
        Heating Oil Delivery
      </MenuItem>
      <MenuItem onClick={onCloseServices} className="mb-2">
        Gasoline Delivery
      </MenuItem>
      <MenuItem onClick={onCloseServices}>Off-Road Diesel Delivery</MenuItem>
    </MenuList>
  );

  const productsMenu = (
    <MenuList className="bg-red-500 p-10  rounded-lg text-white">
      <MenuItem onClick={onCloseProducts} className="mb-2">
        Tanks & Equipment
      </MenuItem>
      <MenuItem onClick={onCloseProducts}>Lubricants & Greases</MenuItem>
    </MenuList>
  );

  return (
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-white shadow-md">
      <Image
        src="/logo.png"
        alt="Flashpoint Fuels Logo"
        width={150}
        height={150}
      />

      <nav className="hidden md:flex space-x-4 items-center">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <div className="flex">
          <h1>What We Do?</h1>
          <Menu
            isOpen={isOpenServices}
            onOpen={onOpenServices}
            onClose={onCloseServices}
          >
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
            {servicesMenu}
          </Menu>
        </div>
        <div className="flex">
          <h1>Services</h1>
          <Menu
            isOpen={isOpenProducts}
            onOpen={onOpenProducts}
            onClose={onCloseProducts}
          >
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
            {productsMenu}
          </Menu>
        </div>
        <Link href="/">
          <h1>Products</h1>
        </Link>
      </nav>

      <button className="rounded-full p-2 pr-5 pl-5 bg-red-500 text-white font-bold hover:bg-red-600 hidden md:block">
        Contact Us
      </button>
      <button className="md:hidden" onClick={() => setShowNav(!showNav)}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {showNav && (
        <nav className="md:hidden flex flex-col  items-center justify-center fixed top-0 left-0 w-full h-full bg-white z-50">
          <CloseButton
            position="absolute"
            right="1rem"
            top="1rem"
            onClick={() => setShowNav(false)}
          />
          <Link href="/">
            <h1 className="my-4">Home</h1>
          </Link>
          <div className="flex my-4">
            <h1>What We Do?</h1>
            {/* Services Dropdown */}
            <Menu
              isOpen={isOpenServices}
              onOpen={onOpenServices}
              onClose={onCloseServices}
            >
              <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
              {servicesMenu}
            </Menu>
          </div>
          <div className="flex my-4">
            <h1>Services</h1>
            {/* Products Dropdown */}
            <Menu
              isOpen={isOpenProducts}
              onOpen={onOpenProducts}
              onClose={onCloseProducts}
            >
              <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
              {productsMenu}
            </Menu>
          </div>
          <Link href="/" className="mt-5">
            <h1>Products</h1>
          </Link>
          <button className="rounded-full p-2 pr-5 pl-5 mt-5 bg-red-500 text-white font-bold hover:bg-red-600">
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
}
