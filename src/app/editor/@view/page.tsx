"use client";
import React from "react";
import { useAppContext } from "@/app/AppProviders";
import { CanvasObject } from "@/config/types/canvasObjects";

export default function View() {
    const { canvas, canvasSize, zoom, objects } = useAppContext();
    return (
        <article className="grid h-full items-center justify-center overflow-auto">
            <div
                id="canvas"
                className="bg-background"
                ref={canvas}
                style={{
                    width: canvasSize.width,
                    height: canvasSize.height,
                    transform: `scale(${zoom / 100})`,
                }}
            >
                {objects.map((item: CanvasObject) => item.canvas)}
            </div>
        </article>
    );
}
