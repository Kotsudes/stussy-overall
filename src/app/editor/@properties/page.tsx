"use client";
import React from "react";

import { useAppContext } from "@/app/AppProviders";
import { Divider } from "@nextui-org/react";
import { CanvasObject } from "@/config/types/canvasObjects";

export default function Properties() {
  const { objects }: { objects: CanvasObject[] } = useAppContext();
  return (
    <div className="flex flex-col justify-items-center gap-2 p-3 max-h-full overflow-y-auto">
      <span className="text-center text-2xl font-bold underline">
        Propriétés
      </span>
      <Divider className="my-3" />
      <div>{objects.map((item: CanvasObject) => item.style)}</div>
    </div>
  );
}
