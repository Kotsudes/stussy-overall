"use client";

import { CanvasObject } from "@/config/types/canvasObjects";
import React, { createContext, useContext, useState, useRef } from "react";

export const AppContext = createContext({} as any);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const canvas = useRef();
  const menuBar = useRef();
  const elementGroup = useRef();
  const [zoom, setZoom] = useState(100);
  const [objects, setObjects] = useState([] as CanvasObject[]);
  const [selectedObject, setSelectedObject] = useState("");

  function toggleHidden(id: string) {
    const newObjects = objects.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          hidden: !item.hidden,
        };
      }
      return item;
    });
    setObjects(newObjects);
  }

  function renameObject(id: string, name: string): void {
    const newObjects = objects.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name,
        };
      }
      return item;
    });
    setObjects(newObjects);
  }

  return (
    <AppContext.Provider
      value={{
        canvas,
        menuBar,
        elementGroup,
        zoom,
        setZoom,
        objects,
        setObjects,
        selectedObject,
        setSelectedObject,
        toggleHidden,
        renameObject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
