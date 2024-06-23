"use client";
import React from "react";
import { useAppContext } from "@/app/AppProviders";
import { CanvasObject } from "@/config/types/canvasObjects";

export default function View() {
  const { canvas, zoom, objects } = useAppContext();
  return (
    <article className="grid h-full items-center justify-center">
      <div
        className="bg-background"
        ref={canvas}
        style={{
          width: 800,
          height: 800,
          transform: `scale(${zoom / 100})`,
        }}
      >
        {objects.map((item: CanvasObject) => item.canvas)}
      </div>
    </article>
  );
}
