"use client";
import React, { useState } from "react";

import {
    Input,
    Select,
    SelectItem,
    Switch,
    Divider,
    Checkbox,
    CheckboxGroup,
} from "@nextui-org/react";
import { useAppContext } from "@/app/AppProviders";

import { FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";
import { MdFormatOverline } from "react-icons/md";
import { invoke } from '@tauri-apps/api/core';



export function Text({ id }: { id: string }) {
    return (
        <span
            id={id}
            style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                color: "#FFFFFF",
                backgroundColor: "#00000000",
                borderWidth: "0",
                borderColor: "#000000",
                borderRadius: "0px",
                opacity: 1,
                textShadow: "#00000000 0px 0px 0px",
                transform: `rotate(0deg)`,
                borderStyle: "solid",
                zIndex: 1,
            }}
        >
            Placeholder
        </span>
    );
}

export function TextProperties({ id }: { id: string }) {
    const { selectedObject }: { selectedObject: string } = useAppContext();
    const [zIndex, setZIndex] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [color, setColor] = useState("#FF0000");
    const [colorOpacity, setColorOpacity] = useState(255);
    const [text, setText] = useState("Placeholder");
    const [size, setSize] = useState(16);
    const [weight, setWeight] = useState(500);
    const [font, setFont] = useState("system-ui");
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [lineThrough, setLineThrough] = useState(false);
    const [overline, setOverline] = useState(false);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const [shadow, setShadow] = useState(false);
    const [shadowColor, setShadowColor] = useState("black");
    const [shadowOpacity, setShadowOpacity] = useState(255);
    const [shadowBlur, setShadowBlur] = useState(0);
    const [shadowOffsetX, setShadowOffsetX] = useState(0);
    const [shadowOffsetY, setShadowOffsetY] = useState(0);
    const [textShadow, setTextShadow] = useState("");
    const [textStokeWidth, setTextStokeWidth] = useState(0);
    const [textStokeColor, setTextStokeColor] = useState("#FFFFFF");
    const [textStrokeColorOpacity, setTextStrokeColorOpacity] = useState(255);
    const [backgroundClip, setBackgroundClip] = useState("border-box");
    const [rotation, setRotation] = useState(0);
    const [src, setSrc] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF00");
    const [backgroundColorTransparancy, setBackgroundColorTransparancy] =
        useState(255);
    const [imageHeight, setImageHeight] = useState(100);
    const [imageWidth, setImageWidth] = useState(100);
    const [xOffset, setXOffset] = useState(0);
    const [yOffset, setYOffset] = useState(0);
    const [backgroundRepeat, setBackgroundRepeat] = useState("no-repeat");
    const [backgroundSize, setBackgroundSize] = useState("auto");
    const [backgroundCustomSize, setBackgroundCustomSize] = useState(100);
    const [background, setBackground] = useState("none");
    const [decoraction, setDecoration] = useState(Array<string>());

    const textCanvas = document.getElementById("canvas-" + id.split("-")[1]);

    function readURL(event: React.ChangeEvent<HTMLInputElement>): void {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (textCanvas) {
                    textCanvas.style.backgroundImage = `url(${e.target?.result})`;
                    setSrc(() => e.target?.result as string);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    async function loadFonts() {
        const fonts: string[] = await invoke("get_system_fonts");
        console.log(fonts);
    }

    loadFonts();


    return (
        <div
            style={{
                display: selectedObject === id.split("-")[1] ? "block" : "none",
            }}
            id={id}
            data-type="text"
            className="flex-col space-y-3 flex"
        >
            <span className="text-center text-2xl font-bold">Base</span>
            <Input
                id={id + "zIndex"}
                data-type="zIndex"
                type="number"
                label="Position Z"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(zIndex)}
                onChange={(e) => {
                    setZIndex(() => Number(e.target.value));
                    if (textCanvas)
                        if (textCanvas) textCanvas.style.zIndex = e.target.value;
                }}
            />
            <Input
                id={id + "x"}
                data-type="x"
                type="number"
                label="Position X"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(x)}
                onChange={(e) => {
                    setX(() => Number(e.target.value));
                    if (textCanvas)
                        if (textCanvas) textCanvas.style.left = e.target.value + "px";
                }}
            />
            <Input
                id={id + "y"}
                data-type="y"
                type="number"
                label="Position Y"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(y)}
                onChange={(e) => {
                    setY(() => Number(e.target.value));
                    if (textCanvas) textCanvas.style.top = e.target.value + "px";
                }}
            />
            <Input
                id={id + "text"}
                data-type="text"
                type="text"
                label="Texte"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(text)}
                onChange={(e) => {
                    setText(() => e.target.value);
                    if (textCanvas) textCanvas.textContent = e.target.value;
                }}
            />
            <div className="flex">
                <Input
                    id={id + "color"}
                    data-type="color"
                    type="color"
                    label="Couleur"
                    labelPlacement="outside-left"
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    defaultValue={color}
                    value={color}
                    onChange={(e) => {
                        setColor(() => e.target.value);
                        if (textCanvas)
                            textCanvas.style.color = String(
                                e.target.value + colorOpacity.toString(16)
                            );
                    }}
                />
                <Input
                    id={id + "colorOpacity"}
                    data-type="colorOpacity"
                    type="number"
                    classNames={{ label: "w-28" }}
                    max={255}
                    min={0}
                    value={String(colorOpacity)}
                    defaultValue={String(colorOpacity)}
                    onChange={(e) => {
                        setColorOpacity(() => Number(e.target.value));
                        if (textCanvas)
                            textCanvas.style.color = String(
                                color + Number(e.target.value).toString(16)
                            );
                    }}
                />
            </div>
            <Divider />
            <span className="text-center text-2xl font-bold">Texte</span>
            <Input
                id={id + "size"}
                data-type="size"
                type="number"
                label="Taille"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(size)}
                onChange={(e) => {
                    setSize(() => Number(e.target.value));
                    if (textCanvas) textCanvas.style.fontSize = e.target.value + "px";
                }}
            />
            <Input
                id={id + "weight"}
                data-type="weight"
                type="number"
                label="Épaisseur"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                step={100}
                max={900}
                min={100}
                defaultValue={String(weight)}
                onChange={(e) => {
                    setWeight(() => Number(e.target.value));
                    if (textCanvas) textCanvas.style.fontWeight = e.target.value;
                }}
            />
            <Select
                id={id + "font"}
                data-type="font"
                label="Police"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    setFont(() => e.target.value);
                    if (textCanvas) textCanvas.style.fontFamily = e.target.value;
                }}
            >
                <SelectItem key="none" className="text-lg">
                    None
                </SelectItem>
            </Select>
            <div className="flex gap-x-2">
                <Checkbox
                    data-type="italic"
                    color="default"
                    aria-label="Italic"
                    value="italic"
                    defaultChecked={italic}
                    onChange={(e) => {
                        setItalic(e.target.checked);
                        if (textCanvas) {
                            textCanvas.style.fontStyle = e.target.checked
                                ? "italic"
                                : "normal";
                        }
                    }}
                >
                    <FaItalic />
                </Checkbox>
                <Input className="hidden" data-type="italic" value={String(italic)} />
                <Input className="hidden" data-type="underline" value={String(underline)} />
                <Input className="hidden" data-type="lineThrough" value={String(lineThrough)} />
                <Input className="hidden" data-type="overline" value={String(overline)} />
                <CheckboxGroup
                    color="default"
                    value={decoraction}
                    orientation="horizontal"
                    onValueChange={(values) => {
                        setDecoration(values);
                        if (textCanvas) {
                            textCanvas.style.textDecoration = values.join(" ");
                            italic
                                ? (textCanvas.style.fontStyle = "italic")
                                : (textCanvas.style.fontStyle = "normal");
                        }
                    }}
                >
                    <Checkbox
                        value="underline"
                        defaultChecked={underline}
                        aria-label="Underline"
                    >
                        <FaUnderline />
                    </Checkbox>
                    <Checkbox
                        value="line-through"
                        defaultChecked={lineThrough}
                        aria-label="Line through"
                    >
                        <FaStrikethrough />
                    </Checkbox>
                    <Checkbox
                        value="overline"
                        defaultChecked={overline}
                        aria-label="Overline"
                    >
                        <MdFormatOverline />
                    </Checkbox>
                </CheckboxGroup>
            </div>
            <Input
                id={id + "text"}
                data-type="letterSpacing"
                type="number"
                label="Letter spacing"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(letterSpacing)}
                onChange={(e) => {
                    console.log(e.target.value);
                    setLetterSpacing(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.letterSpacing = e.target.value + "px";
                }}
            />
            <Divider />
            <span className="text-center text-2xl font-bold pr-2">Ombre</span>
            <Input className="hidden" data-type="shadow" value={String(shadow)} />
            <Input className="hidden" data-type="textShadow" value={shadowColor +
                Number(shadowOpacity).toString(16) +
                " " +
                shadowOffsetX +
                "px " +
                shadowOffsetY +
                "px " +
                shadowBlur +
                "px "} />
            <Switch
                id={id + "shadow"}
                data-type="shadow"
                defaultValue={String(shadow)}
                onValueChange={(value) => {
                    const temp =
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px";
                    setShadow(() => value);
                    setTextShadow(() => temp);
                    if (textCanvas) textCanvas.style.textShadow = value ? temp : "";
                }}
            />
            <div className="flex">
                <Input
                    id={id + "shadowColor"}
                    data-type="shadowColor"
                    type="color"
                    label="Couleur"
                    value={shadowColor}
                    labelPlacement="outside-left"
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    defaultValue={shadowColor}
                    onChange={(e) => {
                        const temp =
                            e.target.value +
                            Number(shadowOpacity).toString(16) +
                            " " +
                            shadowOffsetX +
                            "px " +
                            shadowOffsetY +
                            "px " +
                            shadowBlur +
                            "px ";
                        setShadowColor(() => e.target.value);
                        setTextShadow(() => temp);
                        if (textCanvas) textCanvas.style.textShadow = temp;
                    }}
                />
                <Input
                    id={id + "shadowColorOpacity"}
                    data-type="shadowOpacity"
                    type="number"
                    classNames={{ label: "w-28" }}
                    max={255}
                    min={0}
                    defaultValue={String(colorOpacity)}
                    onChange={(e) => {
                        const temp =
                            shadowColor +
                            Number(e.target.value).toString(16) +
                            " " +
                            shadowOffsetX +
                            "px " +
                            shadowOffsetY +
                            "px " +
                            shadowBlur +
                            "px ";
                        setTextShadow(() => temp);
                        setShadowOpacity(() => Number(e.target.value));
                        if (textCanvas) textCanvas.style.textShadow = temp;
                    }}
                />
            </div>
            <Input
                id={id + "shadowBlur"}
                data-type="shadowBlur"
                type="number"
                label="Flou"
                min={0}
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(0)}
                onChange={(e) => {
                    const temp =
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        e.target.value +
                        "px ";
                    setShadowBlur(() => Number(e.target.value));
                    setTextShadow(() => temp);
                    if (textCanvas) textCanvas.style.textShadow = temp;
                }}
            />
            <Input
                id={id + "shadowOffsetX"}
                data-type="shadowOffsetX"
                type="number"
                label="Décallage X"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(0)}
                onChange={(e) => {
                    const temp =
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        e.target.value +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px ";
                    setTextShadow(() => temp);
                    setShadowOffsetX(() => Number(e.target.value));
                    if (textCanvas) textCanvas.style.textShadow = temp;
                }}
            />
            <Input
                id={id + "shadowOffsetY"}
                data-type="shadowOffsetY"
                type="number"
                label="Décallage Y"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(0)}
                onChange={(e) => {
                    const temp =
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        e.target.value +
                        "px " +
                        shadowBlur +
                        "px ";
                    setTextShadow(() => temp);
                    setShadowOffsetY(() => Number(e.target.value));
                    if (textCanvas) textCanvas.style.textShadow = temp;
                }}
            />
            <Divider />
            <span className="text-center text-2xl font-bold">Contour</span>
            <Input
                id={id + "textStokeWidth"}
                data-type="textStokeWidth"
                type="number"
                label="Épaisseur"
                min={0}
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(textStokeWidth)}
                onChange={(e) => {
                    setTextStokeWidth(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.webkitTextStrokeWidth = e.target.value + "px";
                }}
            />
            <div className="flex">
                <Input
                    id={id + "textStokeColor"}
                    data-type="textStokeColor"
                    type="color"
                    label="Couleur"
                    labelPlacement="outside-left"
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    defaultValue={String(textStokeColor)}
                    onChange={(e) => {
                        setTextStokeColor(() => e.target.value);
                        if (textCanvas)
                            textCanvas.style.webkitTextStrokeColor =
                                e.target.value + Number(colorOpacity).toString(16);
                    }}
                />
                <Input
                    id={id + "textStokeColorTransparancy"}
                    data-type="textStrokeColorOpacity"
                    type="number"
                    label="Opacité"
                    labelPlacement="outside-left"
                    classNames={{ label: "w-28" }}
                    max={255}
                    min={0}
                    defaultValue={String(textStrokeColorOpacity)}
                    onChange={(e) => {
                        setColorOpacity(() => Number(e.target.value));
                        if (textCanvas)
                            textCanvas.style.webkitTextStrokeColor =
                                color + Number(e.target.value).toString(16);
                    }}
                />
            </div>
            <Input className="hidden" data-type="backgroundClip" value={backgroundClip} />
            <Select
                id={id + "backgroundClip"}
                label="Clip"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    switch (e.target.value) {
                        case "border-box":
                            setBackgroundClip(() => "border-box");
                            if (textCanvas) textCanvas.style.backgroundClip = "border-box";
                            break;
                        case "padding-box":
                            setBackgroundClip(() => "padding-box");
                            if (textCanvas) textCanvas.style.backgroundClip = "padding-box";
                            break;
                        case "content-box":
                            setBackgroundClip(() => "content-box");
                            if (textCanvas) textCanvas.style.backgroundClip = "content-box";
                            break;
                        case "text":
                            setBackgroundClip(() => "text");
                            if (textCanvas) textCanvas.style.backgroundClip = "text";
                            break;

                        default:
                            break;
                    }
                }}
                defaultSelectedKeys={String(backgroundClip)}
            >
                <SelectItem key="border-box" className="text-lg">
                    Border box
                </SelectItem>
                <SelectItem key="padding-box" className="text-lg">
                    Padding box
                </SelectItem>
                <SelectItem key="content-box-box" className="text-lg">
                    Content box
                </SelectItem>
                <SelectItem key="text" className="text-lg">
                    Text
                </SelectItem>
            </Select>
            <Divider />
            <span className="text-center text-2xl font-bold">Fond</span>
            <Input className="hidden" data-type="backgroundRepeat" value={backgroundRepeat} />
            <Input className="hidden" data-type="background" value={background} />
            <Select
                id={id + "backgroundRepeat"}
                label="Type fond"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    setBackground(() => e.target.value);
                    switch (e.target.value) {
                        case "none":
                            if (textCanvas) textCanvas.style.backgroundColor = "unset";
                            if (textCanvas) textCanvas.style.backgroundImage = "unset";
                            break;
                        case "image":
                            if (textCanvas) textCanvas.style.backgroundColor = "unset";
                            if (textCanvas)
                                textCanvas.style.backgroundImage = "url(" + src + ")";
                            break;
                        case "color":
                            if (textCanvas)
                                textCanvas.style.backgroundColor =
                                    backgroundColor +
                                    Number(backgroundColorTransparancy).toString(16);
                            if (textCanvas) textCanvas.style.backgroundImage = "unset";
                        default:
                            break;
                    }
                }}
            >
                <SelectItem key="none" className="text-lg">
                    None
                </SelectItem>
                <SelectItem key="image" className="text-lg">
                    Image
                </SelectItem>
                <SelectItem key="color" className="text-lg">
                    Color
                </SelectItem>
            </Select>
            <Input className="hidden" data-type="src" value={src} />
            <form encType="multipart/form-data">
                <Input
                    id={id + "src"}
                    type="file"
                    label="Source"
                    labelPlacement="outside-left"
                    classNames={{ label: "w-28" }}
                    onChange={(e) => readURL(e)}
                    // @ts-expect-error -- Known issue with NextUI's Input component
                    value={null}
                />
            </form>
            <div className="flex">
                <Input
                    id={id + "backgroundColor"}
                    data-type="backgroundColor"
                    type="color"
                    label="Couleur"
                    labelPlacement="outside-left"
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    defaultValue={String(backgroundColor)}
                    onChange={(e) => {
                        setTextStokeColor(() => e.target.value);
                        if (textCanvas)
                            textCanvas.style.backgroundColor =
                                e.target.value +
                                Number(backgroundColorTransparancy).toString(16);
                    }}
                />
                <Input
                    id={id + "backgroundColorTransparancy"}
                    data-type="backgroundColorTransparancy"
                    type="number"
                    label="Opacité"
                    labelPlacement="outside-left"
                    classNames={{ label: "w-28" }}
                    max={255}
                    min={0}
                    defaultValue={String(backgroundColorTransparancy)}
                    onChange={(e) => {
                        setColorOpacity(() => Number(e.target.value));
                        if (textCanvas)
                            textCanvas.style.backgroundColor =
                                backgroundColor + Number(e.target.value).toString(16);
                    }}
                />
            </div>
            <Input
                id={id + "xOffset"}
                data-type="xOffset"
                type="number"
                label="Décallage X"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(xOffset)}
                onChange={(e) => {
                    setXOffset(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.backgroundPositionX = e.target.value + "px";
                }}
            />
            <Input
                id={id + "yOffset"}
                data-type="yOffset"
                type="number"
                label="Décallage Y"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(yOffset)}
                onChange={(e) => {
                    setYOffset(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.backgroundPositionY = e.target.value + "px";
                }}
            />
            <Select
                id={id + "backgroundRepeat"}
                data-type="backgroundRepeat"
                label="Répétition"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    setBackgroundRepeat(() => e.target.value);
                    if (textCanvas) textCanvas.style.backgroundRepeat = e.target.value;
                }}
            >
                <SelectItem key="no-repeat" className="text-lg">
                    No repeat
                </SelectItem>
                <SelectItem key="repeat" className="text-lg">
                    Repeat
                </SelectItem>
                <SelectItem key="space" className="text-lg">
                    Space
                </SelectItem>
                <SelectItem key="round" className="text-lg">
                    Round
                </SelectItem>
                <SelectItem key="repeat-x" className="text-lg">
                    Repeat x
                </SelectItem>
                <SelectItem key="repeat-y" className="text-lg">
                    Repeat y
                </SelectItem>
            </Select>
            <Input className="hidden" data-type="backgroundSize" value={backgroundSize} />
            <Select
                id={id + "backgroundSize"}
                label="Taille"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    setBackgroundSize(() => e.target.value);
                    if (textCanvas) textCanvas.style.backgroundSize = e.target.value;
                }}
            >
                <SelectItem key="cover" className="text-lg">
                    Cover
                </SelectItem>
                <SelectItem key="contain" className="text-lg">
                    Contain
                </SelectItem>
                <SelectItem key="custom" className="text-lg">
                    Custom
                </SelectItem>
            </Select>
            <div
                className="flex gap-x-2"
                style={{ display: backgroundSize === "custom" ? "block" : "none" }}
            >
                <Input
                    id={id + "imageHeight"}
                    data-type="imageHeight"
                    type="number"
                    labelPlacement="outside-left"
                    label="Image height:"
                    classNames={{ label: "w-28" }}
                    defaultValue={String(imageHeight)}
                    value={String(imageHeight)}
                    onChange={(e) => {
                        setImageHeight(() => Number(e.target.value));
                        if (textCanvas)
                            textCanvas.style.backgroundSize = `${imageWidth}px ${e.target.value}px`;
                    }}
                />

                <Input
                    id={id + "imageWidth"}
                    data-type="imageWidth"
                    type="number"
                    labelPlacement="outside-left"
                    label="Image width :"
                    classNames={{ label: "w-28" }}
                    defaultValue={String(imageWidth)}
                    value={String(imageWidth)}
                    onChange={(e) => {
                        setImageWidth(() => Number(e.target.value));
                        if (textCanvas)
                            textCanvas.style.backgroundSize = `${e.target.value}px ${imageHeight}px`;
                    }}
                />
            </div>
            <Divider />
            <span className="text-center text-2xl font-bold">Autres</span>
            <Input
                id={id + "opacity"}
                data-type="opacity"
                type="number"
                label="Opacité"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                max={100}
                min={0}
                defaultValue={String(opacity)}
                onChange={(e) => {
                    setOpacity(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.opacity = String(Number(e.target.value) / 100);
                }}
            />
            <Input
                id={id + "rotation"}
                data-type="rotation"
                type="number"
                label="Rotation"
                labelPlacement="outside-left"
                classNames={{ label: "w-28" }}
                defaultValue={String(rotation)}
                onChange={(e) => {
                    setRotation(() => Number(e.target.value));
                    if (textCanvas)
                        textCanvas.style.transform = `rotate(${e.target.value}deg)`;
                }}
            />
        </div>
    );
}
