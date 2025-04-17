import React, { useState } from "react";

import {
    Input,
    Select,
    SelectItem,
    Switch,
    Divider,
    Checkbox,
} from "@nextui-org/react";
import { useAppContext } from "@/app/AppProviders";

export function Rectangle({ id }: { id: string }) {
    return (
        <div
            id={id}
            style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                backgroundColor: "#FF0000",
                height: "100px",
                width: "100px",
                borderWidth: "1",
                borderColor: "#000000",
                borderRadius: "0px",
                opacity: 1,
                boxShadow: "#00000000 0px 0px 0px",
                transform: `rotate(0deg)`,
                borderStyle: "solid",
                zIndex: 1,
            }}
        ></div>
    );
}

export function RectangleProperties({ id }: { id: string }) {
    const { selectedObject }: { selectedObject: string } = useAppContext();
    const [zIndex, setZIndex] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [color, setColor] = useState("#FF0000");
    const [colorOpacity, setColorOpacity] = useState(255);
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderColor, setBorderColor] = useState("black");
    const [borderOpacity, setBorderOpacity] = useState(255);
    const [borderRadius, setBorderRadius] = useState(0);
    const [borderStyle, setBorderStyle] = useState("solid");
    const [opacity, setOpacity] = useState(100);
    const [shadow, setShadow] = useState(false);
    const [shadowColor, setShadowColor] = useState("black");
    const [shadowOpacity, setShadowOpacity] = useState(255);
    const [shadowBlur, setShadowBlur] = useState(0);
    const [shadowOffsetX, setShadowOffsetX] = useState(0);
    const [shadowOffsetY, setShadowOffsetY] = useState(0);
    const [shadowInset, setShadowInset] = useState("");
    const [shadowDouble, setShadowDouble] = useState(0);
    const [boxShadow, setBoxShadow] = useState("");
    const [rotation, setRotation] = useState(0);

    const rectCanvas = document.getElementById("canvas-" + id.split("-")[1]);

    return (
        <div
            style={{
                display: selectedObject === id.split("-")[1] ? "block" : "none",
            }}
            id={id}
            data-type="rectangle"
            className="flex-col space-y-3 flex"
        >
            <span className="text-center text-2xl font-bold">Base</span>
            <Input
                id={id + "zIndex"}
                data-type="zIndex"
                type="number"
                label="Position Z"
                labelPlacement="outside-left"
                defaultValue={String(zIndex)}
                classNames={{ label: "w-28" }}
                value={String(zIndex)}
                onValueChange={(value) => {
                    setZIndex(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.zIndex = value;
                    }
                }}
            />
            <Input
                id={id + "x"}
                data-type="x"
                type="number"
                labelPlacement="outside-left"
                label="Position X"
                defaultValue={String(x)}
                value={String(x)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setX(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.left = value + "px";
                    }
                }}
            />
            <Input
                id={id + "y"}
                data-type="y"
                type="number"
                labelPlacement="outside-left"
                label="Position Y"
                defaultValue={String(y)}
                value={String(y)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setY(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.top = value + "px";
                    }
                }}
            />
            <div className="flex">
                <Input
                    id={id + "color"}
                    data-type="color"
                    type="color"
                    labelPlacement="outside-left"
                    label="Couleur"
                    defaultValue={color}
                    value={color}
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    onValueChange={(value) => {
                        setColor(() => value);
                        if (rectCanvas) {
                            rectCanvas.style.backgroundColor =
                                value + colorOpacity.toString(16);
                        }
                    }}
                />
                <Input
                    id={id + "colorOpacity"}
                    data-type="colorOpacity"
                    type="number"
                    max={255}
                    min={0}
                    labelPlacement="outside-left"
                    label="Opacité"
                    defaultValue={String(colorOpacity)}
                    value={String(colorOpacity)}
                    classNames={{ label: "w-28" }}
                    onValueChange={(value) => {
                        setColorOpacity(() => Number(value));
                        if (rectCanvas) {
                            rectCanvas.style.backgroundColor =
                                color + Number(value).toString(16);
                        }
                    }}
                />
            </div>
            <Input
                id={id + "height"}
                data-type="height"
                type="number"
                labelPlacement="outside-left"
                label="Hauteur"
                defaultValue={String(height)}
                value={String(height)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setHeight(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.height = value + "px";
                    }
                }}
            />
            <Input
                id={id + "width"}
                data-type="width"
                type="number"
                labelPlacement="outside-left"
                label="Longueur"
                defaultValue={String(width)}
                value={String(width)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setWidth(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.width = value + "px";
                    }
                }}
            />
            <Divider />
            <span className="text-center text-2xl font-bold">Bordure</span>
            <Input
                id={id + "borderWidth"}
                data-type="borderWidth"
                type="number"
                labelPlacement="outside-left"
                label="Épaisseur"
                defaultValue={String(borderWidth)}
                value={String(borderWidth)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setBorderWidth(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.borderWidth = value + "px";
                    }
                }}
            />
            <div className="flex">
                <Input
                    id={id + "borderColor"}
                    data-type="borderColor"
                    type="color"
                    labelPlacement="outside-left"
                    label="Couleur"
                    defaultValue={borderColor}
                    value={borderColor}
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    onValueChange={(value) => {
                        setBorderColor(() => value);
                        if (rectCanvas) {
                            rectCanvas.style.borderColor =
                                value + Number(borderOpacity).toString(16);
                        }
                    }}
                />
                <Input
                    id={id + "borderColorOpacity"}
                    data-type="borderOpacity"
                    type="number"
                    max={255}
                    min={0}
                    labelPlacement="outside-left"
                    label="Opacité"
                    defaultValue={String(borderOpacity)}
                    value={String(borderOpacity)}
                    classNames={{ label: "w-28" }}
                    onValueChange={(value) => {
                        setBorderOpacity(() => Number(value));
                        if (rectCanvas) {
                            rectCanvas.style.borderColor =
                                borderColor + Number(value).toString(16);
                        }
                    }}
                />
            </div>
            <Input
                id={id + "borderRadius"}
                data-type="borderRadius"
                type="number"
                labelPlacement="outside-left"
                label="Rayon"
                defaultValue={String(borderRadius)}
                value={String(borderRadius)}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    setBorderRadius(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.borderRadius = value + "px";
                    }
                }}
            />
            <Input className="hidden" data-type="borderStyle" value={borderStyle} />
            <Select
                id={id + "borderStyle"}
                label="Style"
                labelPlacement="outside-left"
                classNames={{ label: "w-24 self-center" }}
                onChange={(e) => {
                    setBorderStyle(() => e.target.value);
                    if (rectCanvas) {
                        rectCanvas.style.borderStyle = e.target.value;
                    }
                }}
            >
                <SelectItem key="none">None</SelectItem>
                <SelectItem key="solid">Solide</SelectItem>
                <SelectItem key="dashed">Dashed</SelectItem>
                <SelectItem key="dotted">Dotted</SelectItem>
                <SelectItem key="double">Double</SelectItem>
                <SelectItem key="ridge">Ridge</SelectItem>
                <SelectItem key="groove">Groove</SelectItem>
                <SelectItem key="inset">Inset</SelectItem>
                <SelectItem key="outset">Outset</SelectItem>
            </Select>
            <Input
                id={id + "opacity"}
                data-type="opacity"
                type="number"
                labelPlacement="outside-left"
                label="Opacité"
                defaultValue={String(opacity)}
                value={String(opacity)}
                classNames={{ label: "w-28" }}
                max={100}
                min={0}
                onValueChange={(value) => {
                    setOpacity(() => Number(value));
                    if (rectCanvas) {
                        rectCanvas.style.opacity = String(Number(value) / 100);
                    }
                }}
            />
            <Divider />
            <Input className="hidden" data-type="shadow" value={String(shadow)} />
            <Input className="hidden" data-type="boxShadow" value={shadowInset +
                " " +
                shadowColor +
                Number(shadowOpacity).toString(16) +
                " " +
                shadowOffsetX +
                "px " +
                shadowOffsetY +
                "px " +
                shadowBlur +
                "px " +
                shadowDouble +
                "px"} />
            <Checkbox
                id={id + "shadow"}
                defaultValue={String(shadow)}
                classNames={{ label: "w-28", base: "flex flex-row-reverse" }}
                onValueChange={(value) => {
                    const temp =
                        shadowInset +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px" +
                        shadowDouble +
                        "px";
                    setShadow(() => value);
                    setBoxShadow(() => temp);
                    if (rectCanvas) {
                        rectCanvas.style.boxShadow = value ? temp : "none";
                    }
                }}
            >
                <span className="text-center text-2xl font-bold">Ombre</span>
            </Checkbox>
            <div className="flex">
                <Input
                    id={id + "shadowColor"}
                    data-type="shadowColor"
                    type="color"
                    defaultValue="black"
                    value={shadowColor}
                    labelPlacement="outside-left"
                    label="Couleur"
                    classNames={{
                        label: "w-20",
                        innerWrapper: "w-10",
                    }}
                    onValueChange={(value) => {
                        const temp =
                            shadowInset +
                            " " +
                            value +
                            Number(shadowOpacity).toString(16) +
                            " " +
                            shadowOffsetX +
                            "px " +
                            shadowOffsetY +
                            "px " +
                            shadowBlur +
                            "px " +
                            shadowDouble +
                            "px";
                        setShadowColor(() => value);
                        setBoxShadow(() => temp);
                        if (rectCanvas && shadow) {
                            rectCanvas.style.boxShadow = temp;
                        }
                    }}
                />
                <Input
                    id={id + "shadowColorOpacity"}
                    data-type="shadowOpacity"
                    type="number"
                    max={255}
                    min={0}
                    defaultValue={String(colorOpacity)}
                    labelPlacement="outside-left"
                    label="Opacité"
                    classNames={{ label: "w-28" }}
                    onValueChange={(value) => {
                        const temp =
                            shadowInset +
                            " " +
                            shadowColor +
                            Number(value).toString(16) +
                            " " +
                            shadowOffsetX +
                            "px " +
                            shadowOffsetY +
                            "px " +
                            shadowBlur +
                            "px " +
                            shadowDouble +
                            "px";
                        setBoxShadow(() => temp);
                        setShadowOpacity(() => Number(value));
                        if (rectCanvas && shadow) {
                            rectCanvas.style.boxShadow = temp;
                        }
                    }}
                />
            </div>
            <Input
                id={id + "shadowBlur"}
                data-type="shadowBlur"
                type="number"
                label="Flou"
                labelPlacement="outside-left"
                defaultValue={"0"}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    const temp =
                        shadowInset +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        value +
                        "px " +
                        shadowDouble +
                        "px";
                    setShadowBlur(() => Number(value));
                    setBoxShadow(() => temp);
                    if (rectCanvas && shadow) {
                        rectCanvas.style.boxShadow = temp;
                    }
                }}
            />
            <Input
                id={id + "shadowOffsetX"}
                data-type="shadowOffsetX"
                type="number"
                labelPlacement="outside-left"
                label="Décallage X"
                defaultValue={"0"}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    const temp =
                        shadowInset +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        value +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px " +
                        shadowDouble +
                        "px";
                    setBoxShadow(() => temp);
                    setShadowOffsetX(() => Number(value));
                    if (rectCanvas && shadow) {
                        rectCanvas.style.boxShadow = temp;
                    }
                }}
            />
            <Input
                id={id + "shadowOffsetY"}
                data-type="shadowOffsetY"
                type="number"
                labelPlacement="outside-left"
                label="Décallage Y"
                defaultValue={"0"}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    const temp =
                        shadowInset +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        value +
                        "px " +
                        shadowBlur +
                        "px " +
                        shadowDouble +
                        "px";
                    setBoxShadow(() => temp);
                    setShadowOffsetY(() => Number(value));
                    if (rectCanvas && shadow) {
                        rectCanvas.style.boxShadow = temp;
                    }
                }}
            />
            <Input
                id={id + "shadowDouble"}
                data-type="shadowDouble"
                type="number"
                labelPlacement="outside-left"
                label="Double"
                defaultValue={"0"}
                classNames={{ label: "w-28" }}
                onValueChange={(value) => {
                    const temp =
                        shadowInset +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px " +
                        value +
                        "px";
                    setBoxShadow(() => temp);
                    setShadowDouble(() => Number(value));
                    if (rectCanvas && shadow) {
                        rectCanvas.style.boxShadow = temp;
                    }
                }}
            />
            <Input className="hidden" data-type="shadowInset" value={String(shadowInset)} />
            Inset :
            <Switch
                id={id + "shadowInset"}
                defaultValue="unchecked"
                onValueChange={(value) => {
                    const temp =
                        (value ? "inset" : "") +
                        " " +
                        shadowColor +
                        Number(shadowOpacity).toString(16) +
                        " " +
                        shadowOffsetX +
                        "px " +
                        shadowOffsetY +
                        "px " +
                        shadowBlur +
                        "px ";
                    console.log(temp);
                    setBoxShadow(() => temp);
                    setShadowInset(() => {
                        if (value) return "inset";
                        else return "";
                    });
                    if (rectCanvas && shadow) {
                        rectCanvas.style.boxShadow = temp;
                    }
                }}
            />
            <Divider />
            <span className="text-center text-2xl font-bold">Autres</span>
            <Input
                id={id + "rotation"}
                data-type="rotation"
                type="number"
                labelPlacement="outside-left"
                label="Rotation"
                defaultValue={String(rotation)}
                onValueChange={(value) => {
                    setRotation(() => Number(value));
                    if (rectCanvas && shadow) {
                        rectCanvas.style.transform = `rotate(${value}deg)`;
                    }
                }}
            />
        </div>
    );
}
