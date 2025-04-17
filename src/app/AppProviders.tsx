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
    const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 1000 });
    const [title, setTitle] = useState("Untitled");
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

    function getInputValueFromCanvas(canvasElement: HTMLCanvasElement, dataType: string) {
        var value = canvasElement.querySelector(`input[data-type="${dataType}"]`)?.getAttribute("value");
        if (!value) {
            value = canvasElement.querySelector(`[data-type="${dataType}"]`)?.getAttribute("value");
        }
        return value
    }

    const lookupInputsBase = ["zIndex", "x", "y", "opacity", "rotation"]
    const lookupInputRect = [
        "color", "colorOpacity", "borderWidth", "height", "width", "borderColor", "borderOpacity", "borderRadius", "borderStyle", "shadow", "shadowColor", "shadowOpacity", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowInset", "shadowDouble", "boxShadow"]
    const lookupInputImage = ["src", "xOffset", "yOffset", "height", "width", "repeat", "size", "imageHeight", "imageWidth", "borderWidth", "borderColor", "borderOpacity", "borderRadius", "borderStyle"]
    const lookupInputText = ["color", "colorOpacity", "text", "size", "weight", "font", "italic", "underline", "lineThrough", "overline", "letterSpacing", "shadow", "shadowColor", "shadowOpacity", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadow", "textStokeWidth", "textStokeColor", "textStrokeColorOpacity", "backgroundClip", "src", "backgroundColor", "backgroundColorTransparancy", "imageHeight", "imageWidth", "xOffset", "yOffset", "backgroundRepeat", "backgroundSize", "backgroundCustomSize", "background"]

    function saveCanvas() {
        const json = Object();
        objects.forEach((object) => {
            const id = object.style.key || "0";
            const canvasElement = document.getElementById("properties-" + id) as HTMLCanvasElement;
            if (canvasElement) {
                const type = canvasElement.getAttribute("data-type") || "text"
                json[id] = Object();
                json[id]["type"] = type
                json[id]["name"] = object.name || type
                json[id]["hidden"] = object.hidden || false

                lookupInputsBase.forEach((input) => {
                    json[id][input] = getInputValueFromCanvas(canvasElement, input)
                })
                switch (type) {
                    case "rectangle":
                        lookupInputRect.forEach((input) => {
                            json[id][input] = getInputValueFromCanvas(canvasElement, input)
                        })
                        break;
                    case "image":
                        lookupInputImage.forEach((input) => {

                            json[id][input] = getInputValueFromCanvas(canvasElement, input)
                        })
                        break;
                    case "text":
                        lookupInputText.forEach((input) => {
                            json[id][input] = getInputValueFromCanvas(canvasElement, input)
                        })
                        break;
                    default:
                        break;
                }

                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
                const downloadAnchorNode = document.createElement('a');
                downloadAnchorNode.setAttribute("href", dataStr);
                downloadAnchorNode.setAttribute("download", `${title}.json`);
                document.body.appendChild(downloadAnchorNode);
                downloadAnchorNode.click();
                downloadAnchorNode.remove();
            }
        });
    }

    function loadCanvas(file: File) {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);

                // Parcourir les objets du JSON
                Object.keys(json).forEach((id) => {
                    const object = json[id];
                    const type = object.type;

                    // Créer un élément HTML en fonction du type
                    const canvasElement = document.createElement("div");
                    canvasElement.id = `properties-${id}`;
                    canvasElement.setAttribute("data-type", type);

                    // Appliquer les propriétés de base
                    lookupInputsBase.forEach((input) => {
                        if (object[input] !== undefined) {
                            canvasElement.style[input as any] = object[input];
                        }
                    });

                    // Appliquer les propriétés spécifiques au type
                    switch (type) {
                        case "rectangle":
                            lookupInputRect.forEach((input) => {
                                if (object[input] !== undefined) {
                                    canvasElement.style[input as any] = object[input];
                                }
                            });
                            break;
                        case "image":
                            lookupInputImage.forEach((input) => {
                                if (object[input] !== undefined) {
                                    canvasElement.style[input as any] = object[input];
                                }
                            });
                            break;
                        case "text":
                            lookupInputText.forEach((input) => {
                                if (object[input] !== undefined) {
                                    canvasElement.style[input as any] = object[input];
                                }
                            });
                            break;
                        default:
                            console.warn(`Type inconnu : ${type}`);
                            break;
                    }

                    // Ajouter l'élément au canvas
                    const canvasContainer = document.getElementById("canvas-container");
                    if (canvasContainer) {
                        canvasContainer.appendChild(canvasElement);
                    }
                });
            } catch (error) {
                console.error("Erreur lors de la lecture du fichier JSON :", error);
            }
        };

        reader.readAsText(file);
    }

    return (
        <AppContext.Provider
            value={{
                canvas,
                canvasSize,
                setCanvasSize,
                title,
                setTitle,
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
                saveCanvas
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
