"use client";

import { useState, useEffect } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  LinkedInIcon,
  TerminalIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("João Pedro Zampoli");
  const [isTyping, setIsTyping] = useState(false);

  const fullText = "João Pedro Zampoli";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const startTypewriterEffect = () => {
    if (isTyping) return;
    setIsTyping(true);

    // First, delete the current text
    let currentText = fullText;
    const deleteInterval = setInterval(() => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setDisplayText(currentText);
      } else {
        clearInterval(deleteInterval);

        // Then, type it back
        let typedText = "";
        const typeInterval = setInterval(() => {
          if (typedText.length < fullText.length) {
            typedText += fullText[typedText.length];
            setDisplayText(typedText);
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setIsTyping(false);
            }, pauseTime);
          }
        }, typingSpeed);
      }
    }, deletingSpeed);
  };

  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <HeroUINavbar
        maxWidth="xl"
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onHoverStart={startTypewriterEffect}
            >
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <TerminalIcon />
                <p className="font-bold text-foreground transition-colors duration-300 min-w-[200px]">
                  {displayText}
                  <span
                    className={`${isTyping ? "animate-pulse" : "opacity-0"} text-primary`}
                  >
                    |
                  </span>
                </p>
              </NextLink>
            </motion.div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex basis-3/5" justify="center">
          <ul className="hidden lg:flex gap-4 justify-center">
            {siteConfig.navItems.map((item, index) => (
              <NavbarItem key={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium pr-2 pl-2",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </motion.div>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex basis-1/5" justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex gap-2"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  isExternal
                  aria-label="LinkedIn"
                  href={siteConfig.links.linkedin}
                >
                  <LinkedInIcon className="text-default-500" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  isExternal
                  aria-label="Github"
                  href={siteConfig.links.github}
                >
                  <GithubIcon className="text-default-500" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ThemeSwitch />
              </motion.div>
              <NavbarMenuToggle
                className="lg:hidden md:flex"
                onClick={handleMenuToggle}
              />
            </motion.div>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Sponsor
            </Button> */}
            </motion.div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle onClick={handleMenuToggle} />
        </NavbarContent>

        <NavbarMenu>
          {/* {searchInput} */}
          <motion.div
            className="mx-4 mt-2 flex flex-col gap-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {siteConfig.navMenuItems.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavbarMenuItem>
                  <Link
                    color={"foreground"}
                    href={item.href}
                    size="lg"
                    onClick={handleMenuItemClick}
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              </motion.div>
            ))}
          </motion.div>
        </NavbarMenu>
      </HeroUINavbar>
    </motion.div>
  );
};
