"use client";
import React, { useRef } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@nextui-org/react";

import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "@/components/icon";
import { useAppContext } from "../AppProviders";
import {
  Rectangle,
  RectangleProperties,
} from "@/components/template-box/rectangle";
import { Image, ImageProperties } from "@/components/template-box/image";
import { CanvasObject } from "@/config/types/canvasObjects";

export default function Editor() {
  const {
    zoom,
    setZoom,
    objects,
    setObjects,
    selectedObject,
    toggleHidden,
    renameObject,
  }: {
    zoom: number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
    objects: CanvasObject[];
    setObjects: React.Dispatch<React.SetStateAction<CanvasObject[]>>;
    selectedObject: string;
    toggleHidden: (id: string) => void;
    renameObject: (id: string, name: string) => void;
  } = useAppContext();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,

    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const input = useRef<HTMLInputElement>(null);

  /**
   * Récupère un objet de la liste des objets
   * @param objectId L'identifiant de l'objet à récupérer
   * @returns L'objet correspondant à l'identifiant spécifié
   */
  function getObject(objectId: string): CanvasObject | null {
    const selected = objects.filter(
      (item: CanvasObject) => item.id === objectId
    );
    if (selected.length > 0) {
      return selected[0];
    }
    return null;
  }

  /**
   * Génère une chaîne de caractères aléatoire
   * @param length The length of the string to generate
   * @returns A random string of the specified length
   */
  function makeid(length: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  /**
   * Supprime un élément de la liste des objets
   * @param id L'identifiant de l'élément à supprimer
   */
  function removeElement(id: string) {
    const temp = objects.filter((item: CanvasObject) => item.id !== id);
    setObjects(() => temp);
  }

  /**
   * Affiche ou masque un élément de la liste des objets
   * @param id L'identifiant de l'élément à afficher ou masquer
   */
  function hideElement(id: string) {
    const canvasId = "canvas-" + id;
    const canvasElement = document.getElementById(canvasId);
    toggleHidden(id);
    if (canvasElement) {
      if (canvasElement.style.display === "none") {
        canvasElement.style.display = "block";
      } else {
        canvasElement.style.display = "none";
      }
    }
  }
  return (
    <Navbar maxWidth="full" height={"36px"}>
      <NavbarContent justify="start">
        <Dropdown>
          <NavbarItem className="flex gap-1 items-center">
            <DropdownTrigger>
              <Button
                size="md"
                radius="sm"
                className="h-[26px] px-3 min-w-fit"
                onDoubleClick={() => setZoom(() => 100)}
                onPress={(e) => {
                  e.continuePropagation();
                }}
              >
                Fichier
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-full"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="save" startContent={icons.user}>
              Enregistrer
            </DropdownItem>
            <DropdownItem key="save" startContent={icons.user}>
              Enregistrer sous
            </DropdownItem>
            <DropdownItem key="save" startContent={icons.user}>
              Exporter
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem className="flex gap-1 items-center">
            <DropdownTrigger>
              <Button
                size="md"
                radius="sm"
                className="h-[26px] px-3 min-w-fit"
                onDoubleClick={() => setZoom(() => 100)}
                onPress={(e) => {
                  e.continuePropagation();
                }}
              >
                Ajouter
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-full"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="rectangle"
              startContent={icons.user}
              onClick={() => {
                const id = makeid(10);
                setObjects(() => [
                  ...objects,
                  {
                    id: id,
                    canvas: <Rectangle id={"canvas-" + id} key={id} />,
                    style: (
                      <RectangleProperties id={"properties-" + id} key={id} />
                    ),
                    name: "Rectangle",
                    hidden: false,
                  },
                ]);
              }}
            >
              Rectangle
            </DropdownItem>
            <DropdownItem
              key="image"
              startContent={icons.user}
              onClick={() => {
                const id = makeid(10);
                setObjects(() => [
                  ...objects,
                  {
                    id: id,
                    // eslint-disable-next-line jsx-a11y/alt-text
                    canvas: <Image id={"canvas-" + id} key={id} />,
                    style: <ImageProperties id={"properties-" + id} key={id} />,
                    name: "Image",
                    hidden: false,
                  },
                ]);
              }}
            >
              Image
            </DropdownItem>
            <DropdownItem key="text" startContent={icons.user}>
              Text
            </DropdownItem>
            <DropdownItem key="groupText" startContent={icons.user}>
              Group text
            </DropdownItem>
            <DropdownItem key="triangle" startContent={icons.user}>
              Triangle
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="center">
        <Dropdown>
          <NavbarItem className="flex gap-1 items-center">
            <Button
              radius="sm"
              className="h-[20px] px-3 min-w-fit"
              onPress={() => {
                setZoom((currentZoom: number) => currentZoom - 10);
              }}
            >
              -
            </Button>
            <DropdownTrigger>
              <Button
                size="md"
                radius="sm"
                className="h-[26px] px-3 min-w-fit"
                onDoubleClick={() => setZoom(() => 100)}
                onPress={(e) => {
                  e.continuePropagation();
                }}
              >
                {zoom}%
              </Button>
            </DropdownTrigger>
            <Button
              size="sm"
              radius="sm"
              className="h-[20px] px-3 min-w-fit"
              onPress={() => {
                setZoom((currentZoom: number) => currentZoom + 10);
              }}
            >
              +
            </Button>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="preset1"
              startContent={icons.user}
              onClick={() => setZoom(() => 150)}
            >
              150%
            </DropdownItem>
            <DropdownItem
              key="preset2"
              startContent={icons.user}
              onClick={() => setZoom(() => 300)}
            >
              300%
            </DropdownItem>
            <DropdownItem
              key="preset3"
              startContent={icons.user}
              onClick={() => setZoom(() => 25)}
            >
              25%
            </DropdownItem>
            <DropdownItem
              key="preset4"
              startContent={icons.user}
              onClick={() => setZoom(() => 200)}
            >
              200%
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-1">
          <Popover
            placement="bottom"
            showArrow
            offset={10}
            onClose={() => {
              if (input.current && selectedObject != "")
                renameObject(selectedObject, input.current.value);
            }}
          >
            <PopoverTrigger>
              <Button size="md" radius="sm" className="h-[26px] min-w-fit px-2">
                Renommer
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
              {(titleProps) => (
                <div className="px-1 py-2 w-full">
                  <p
                    className="text-small font-bold text-foreground"
                    {...titleProps}
                  >
                    Nouveau nom
                  </p>
                  <div className="mt-2 flex flex-col gap-2 w-full">
                    <Input
                      ref={input}
                      defaultValue={getObject(selectedObject)?.name}
                      label="Nom"
                      size="sm"
                      variant="bordered"
                      type="text"
                      autoFocus={true}
                    />
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>

          <Button
            size="md"
            radius="sm"
            className="h-[26px] min-w-fit px-2"
            onClick={() => {
              hideElement(selectedObject);
            }}
          >
            Cacher
          </Button>
          <Button
            size="md"
            radius="sm"
            className="h-[26px] min-w-fit px-2"
            onClick={() => {
              removeElement(selectedObject);
            }}
          >
            Supprimer
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
