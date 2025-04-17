"use client";

import React, { Suspense } from "react";
import NextImage from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react";

export default function Layout({
  children,
  tweet,
  poster,
}: {
  children: React.ReactNode;
  tweet: React.ReactNode;
  poster: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div>
      <Navbar>
        <NavbarBrand className="space-x-2">
          <Image
            as={NextImage}
            width={50}
            height={50}
            alt=""
            src="stussy-high-resolution-logo-only-transparent.svg"
          />
          <p className="font-bold text-inherit">Stussy</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Accueil
            </Link>
          </NavbarItem>
          <NavbarItem isActive={type == "poster"}>
            <Link
              color={type == "poster" ? "primary" : "foreground"}
              href="/new?type=poster"
            >
              Poster
            </Link>
          </NavbarItem>
          <NavbarItem isActive={type == "tweet"}>
            <Link
              color={type == "tweet" ? "primary" : "foreground"}
              href="/new?type=tweet"
            >
              Tweet
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="flex-row flex">
        {type == "poster" ? poster : tweet}
        {children}
      </main>
    </div>
  );
}
