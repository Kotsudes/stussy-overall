import React, { useState } from "react";
import { Input, Select, SelectItem, Divider } from "@nextui-org/react";
import { useAppContext } from "@/app/AppProviders";

export function Image({ id }: { id: string }) {
  return (
    <div
      id={id}
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        height: "100px",
        width: "100px",
        borderWidth: "1",
        borderColor: "#000000",
        borderRadius: "0px",
        opacity: 1,
        transform: `rotate(0deg)`,
        borderStyle: "solid",
        zIndex: 1,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "0px",
        backgroundPositionY: "0px",
      }}
    ></div>
  );
}

export function ImageProperties({ id }: { id: string }) {
  const { selectedObject }: { selectedObject: string } = useAppContext();
  const [zIndex, setZIndex] = useState(1);
  const [src, setSrc] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [repeat, setRepeat] = useState("no-repeat");
  const [size, setSize] = useState("cover");
  const [imageHeight, setImageHeight] = useState(100);
  const [imageWidth, setImageWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColor, setBorderColor] = useState("black");
  const [borderOpacity, setBorderOpacity] = useState(255);
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [opacity, setOpacity] = useState(100);
  const [rotation, setRotation] = useState(0);

  const imageCanvas = document.getElementById("canvas-" + id.split("-")[1]);

  function readURL(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (imageCanvas) {
          imageCanvas.style.backgroundImage = `url(${e.target?.result})`;
          setSrc(() => e.target?.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div
      style={{
        display: selectedObject === id.split("-")[1] ? "block" : "none",
      }}
      id={id}
      className="flex-col space-y-3 flex"
    >
      <span className="text-center text-2xl font-bold">Base</span>

      <Input
        id={id + "zIndex"}
        type="number"
        classNames={{ label: "w-28" }}
        label="Position Z :"
        labelPlacement="outside-left"
        defaultValue={String(zIndex)}
        value={String(zIndex)}
        onChange={(e) => {
          setZIndex(() => Number(e.target.value));
          if (imageCanvas) imageCanvas.style.zIndex = e.target.value;
        }}
      />

      <Input
        id={id + "x"}
        type="number"
        labelPlacement="outside-left"
        label="Position X :"
        classNames={{ label: "w-28" }}
        defaultValue={String(x)}
        value={String(x)}
        onChange={(e) => {
          setX(() => Number(e.target.value));
          if (imageCanvas) imageCanvas.style.left = e.target.value + "px";
        }}
      />

      <Input
        id={id + "y"}
        type="number"
        labelPlacement="outside-left"
        label="Position Y :"
        classNames={{ label: "w-28" }}
        defaultValue={String(y)}
        value={String(y)}
        onChange={(e) => {
          setY(() => Number(e.target.value));
          if (imageCanvas) imageCanvas.style.top = e.target.value + "px";
        }}
      />

      <Divider />
      <span className="text-center text-2xl font-bold">Image</span>

      <form encType="multipart/form-data">
        <Input
          id={id + "src"}
          label="Source :"
          labelPlacement="outside-left"
          type="file"
          classNames={{ label: "w-28" }}
          onChange={(e) => readURL(e)}
          // @ts-expect-error -- Known issue with NextUI's Input component
          value={null}
        />
      </form>

      <Input
        id={id + "height"}
        type="number"
        labelPlacement="outside-left"
        label="Hauteur :"
        classNames={{ label: "w-28" }}
        defaultValue={String(height)}
        value={String(height)}
        onChange={(e) => {
          setHeight(() => Number(e.target.value));
          if (imageCanvas) imageCanvas.style.height = e.target.value + "px";
        }}
      />

      <Input
        id={id + "width"}
        type="number"
        labelPlacement="outside-left"
        label="Longueur :"
        classNames={{ label: "w-28" }}
        defaultValue={String(width)}
        value={String(width)}
        onChange={(e) => {
          setWidth(() => Number(e.target.value));
          if (imageCanvas) imageCanvas.style.width = e.target.value + "px";
        }}
      />

      <Input
        id={id + "xOffset"}
        type="number"
        labelPlacement="outside-left"
        label="Décallage X :"
        classNames={{ label: "w-28" }}
        defaultValue={String(xOffset)}
        value={String(xOffset)}
        onChange={(e) => {
          setXOffset(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.backgroundPositionX = e.target.value + "px";
        }}
      />

      <Input
        id={id + "yOffset"}
        type="number"
        labelPlacement="outside-left"
        label="Décallage Y :"
        classNames={{ label: "w-28" }}
        defaultValue={String(yOffset)}
        value={String(yOffset)}
        onChange={(e) => {
          setYOffset(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.backgroundPositionY = e.target.value + "px";
        }}
      />

      <Select
        id={id + "repeat"}
        label="Répétition :"
        classNames={{ label: "w-32 self-center" }}
        labelPlacement="outside-left"
        onChange={(e) => {
          setRepeat(() => e.target.value);
          if (imageCanvas) imageCanvas.style.backgroundRepeat = e.target.value;
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

      <Select
        id={id + "size"}
        labelPlacement="outside-left"
        label="Taille :"
        classNames={{ label: "w-32 self-center" }}
        onChange={(e) => {
          setSize(() => e.target.value);
          if (imageCanvas) imageCanvas.style.backgroundSize = e.target.value;
        }}
      >
        <SelectItem key="cover" className="text-lg">
          Cover
        </SelectItem>
        <SelectItem key="contain" className="text-lg">
          Contain
        </SelectItem>
        <SelectItem key="manual" className="text-lg">
          Manuel
        </SelectItem>
      </Select>

      <div
        className="flex gap-x-2"
        style={{ display: size === "manual" ? "block" : "none" }}
      >
        <Input
          id={id + "imageHeight"}
          type="number"
          labelPlacement="outside-left"
          label="Image height:"
          classNames={{ label: "w-28" }}
          defaultValue={String(imageHeight)}
          value={String(imageHeight)}
          onChange={(e) => {
            setImageHeight(() => Number(e.target.value));
            if (imageCanvas)
              imageCanvas.style.backgroundSize = `${imageWidth}px ${e.target.value}px`;
          }}
        />

        <Input
          id={id + "imageWidth"}
          type="number"
          labelPlacement="outside-left"
          label="Image width :"
          classNames={{ label: "w-28" }}
          defaultValue={String(imageWidth)}
          value={String(imageWidth)}
          onChange={(e) => {
            setImageWidth(() => Number(e.target.value));
            if (imageCanvas)
              imageCanvas.style.backgroundSize = `${e.target.value}px ${imageHeight}px`;
          }}
        />
      </div>
      <Divider />
      <span className="text-center text-2xl font-bold">Bordure</span>

      <Input
        id={id + "borderWidth"}
        type="number"
        labelPlacement="outside-left"
        label="Épaisseur :"
        classNames={{ label: "w-28" }}
        defaultValue={String(borderWidth)}
        value={String(borderWidth)}
        onChange={(e) => {
          setBorderWidth(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.borderWidth = e.target.value + "px";
        }}
      />

      <div className="flex">
        <Input
          id={id + "borderColor"}
          type="color"
          labelPlacement="outside-left"
          label="Couleur :"
          classNames={{
            label: "w-20",
            innerWrapper: "w-10",
          }}
          defaultValue={borderColor}
          value={borderColor}
          onChange={(e) => {
            setBorderColor(() => e.target.value);
            if (imageCanvas)
              imageCanvas.style.borderColor =
                e.target.value + Number(borderOpacity).toString(16);
          }}
        />
        <Input
          id={id + "borderColorOpacity"}
          type="number"
          classNames={{ label: "w-28" }}
          max={255}
          min={0}
          value={String(borderOpacity)}
          labelPlacement="outside-left"
          label="Opacité :"
          defaultValue={String(borderOpacity)}
          onChange={(e) => {
            setBorderOpacity(() => Number(e.target.value));
            if (imageCanvas)
              imageCanvas.style.borderColor =
                borderColor + Number(e.target.value).toString(16);
          }}
        />
      </div>

      <Input
        id={id + "borderRadius"}
        type="number"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
        label="Border radius"
        defaultValue={String(borderRadius)}
        value={String(borderRadius)}
        onChange={(e) => {
          setBorderRadius(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.borderRadius = e.target.value + "px";
        }}
      />

      <Select
        id={id + "borderStyle"}
        labelPlacement="outside-left"
        label="Border style :"
        onChange={(e) => {
          setBorderStyle(() => e.target.value);
          if (imageCanvas) imageCanvas.style.borderStyle = e.target.value;
        }}
      >
        <SelectItem key="none" className="text-lg">
          None
        </SelectItem>
        <SelectItem key="solid" className="text-lg">
          Solide
        </SelectItem>
        <SelectItem key="dashed" className="text-lg">
          Dashed
        </SelectItem>
        <SelectItem key="dotted" className="text-lg">
          Dotted
        </SelectItem>
        <SelectItem key="double" className="text-lg">
          Double
        </SelectItem>
        <SelectItem key="ridge" className="text-lg">
          Ridge
        </SelectItem>
        <SelectItem key="groove" className="text-lg">
          Groove
        </SelectItem>
        <SelectItem key="inset" className="text-lg">
          Inset
        </SelectItem>
        <SelectItem key="outset" className="text-lg">
          Outset
        </SelectItem>
      </Select>

      <Input
        id={id + "opacity"}
        type="number"
        classNames={{ label: "w-28" }}
        labelPlacement="outside-left"
        label="Opacité :"
        defaultValue={String(opacity)}
        value={String(opacity)}
        max={100}
        min={0}
        onChange={(e) => {
          setOpacity(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.opacity = String(Number(e.target.value) / 100);
        }}
      />

      <Divider />
      <span className="text-center text-2xl font-bold">Autres</span>

      <Input
        id={id + "rotation"}
        type="number"
        labelPlacement="outside-left"
        label="Rotation :"
        classNames={{ label: "w-28" }}
        defaultValue={String(rotation)}
        value={String(rotation)}
        onChange={(e) => {
          setRotation(() => Number(e.target.value));
          if (imageCanvas)
            imageCanvas.style.transform = `rotate(${e.target.value}deg)`;
        }}
      />
    </div>
  );
}
