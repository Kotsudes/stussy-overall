import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import { Separator } from "../ui/separator";
import {
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  OverlineIcon,
} from "@radix-ui/react-icons";

export default function Text(props) {
  return (
    <span
      id={props.id}
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        color: "#FFFFFF",
        backgroundColor: "#00000000",
        borderWidth: "1",
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

export default function TextProperties(props) {
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
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [backgroundRepeat, setBackgroundRepeat] = useState("no-repeat");
  const [backgroundSize, setBackgroundSize] = useState("auto");
  const [backgroundCustomSize, setBackgroundCustomSize] = useState(100);
  const [background, setBackground] = useState("none");

  const textCanvas = document.getElementById(
    "canvas-" + props.id.split("-")[1]
  );

  function readURL() {
    console.log("canvas-" + props.id.split("-")[1]);
    var file = document.getElementById(props.id + "src").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      document.getElementById(
        "canvas-" + props.id.split("-")[1]
      ).style.backgroundImage = "url(" + reader.result + ")";
      setSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }

  return (
    <div style={{ display: "none" }} id={props.id} className="flex-col gap-y-3">
      <span className="text-center text-2xl font-bold">Base</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "zIndex"}
          className="w-fit text-nowrap text-xl"
        >
          Position Z :
        </Label>
        <Input
          id={props.id + "zIndex"}
          type="number"
          className="text-xl"
          defaultValue={zIndex}
          onChange={(e) => {
            setZIndex(() => e.target.value);
            textCanvas.style.zIndex = e.target.value;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label htmlFor={props.id + "x"} className="w-fit text-nowrap text-xl">
          Position X :
        </Label>
        <Input
          id={props.id + "x"}
          type="number"
          className="text-xl"
          defaultValue={x}
          onChange={(e) => {
            setX(() => e.target.value);
            textCanvas.style.left = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label htmlFor={props.id + "y"} className="w-fit text-nowrap text-xl">
          Position Y :
        </Label>
        <Input
          id={props.id + "y"}
          type="number"
          className="text-xl"
          defaultValue={y}
          onChange={(e) => {
            setY(() => e.target.value);
            textCanvas.style.top = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "text"}
          className="w-fit text-nowrap text-xl"
        >
          Texte :
        </Label>
        <Input
          id={props.id + "text"}
          type="text"
          className="text-xl"
          defaultValue={text}
          onChange={(e) => {
            setText(() => e.target.value);
            textCanvas.textContent = e.target.value;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "color"}
          className="w-fit text-nowrap text-xl"
        >
          Couleur :
        </Label>
        <div className="grid grid-cols-2 items-center gap-x-2">
          <Input
            id={props.id + "color"}
            type="color"
            className="overflow-hidden p-0 text-xl"
            defaultValue={color}
            onChange={(e) => {
              setColor(() => e.target.value);
              textCanvas.style.color =
                e.target.value + colorOpacity.toString(16);
            }}
          />
          <Input
            id={props.id + "colorOpacity"}
            type="number"
            className="text-xl"
            max={255}
            min={0}
            defaultValue={colorOpacity}
            onChange={(e) => {
              setColorOpacity(() => e.target.value);
              textCanvas.style.color =
                color + Number(e.target.value).toString(16);
            }}
          />
        </div>
      </div>
      <Separator />
      <span className="text-center text-2xl font-bold">Texte</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "size"}
          className="w-fit text-nowrap text-xl"
        >
          Taille :
        </Label>
        <Input
          id={props.id + "size"}
          type="number"
          className="text-xl"
          defaultValue={size}
          onChange={(e) => {
            setSize(() => e.target.value + "px");
            textCanvas.style.fontSize = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "weight"}
          className="w-fit text-nowrap text-xl"
        >
          Épaisseur :
        </Label>
        <Input
          id={props.id + "weight"}
          type="number"
          className="text-xl"
          step={100}
          max={900}
          min={100}
          defaultValue={weight}
          onChange={(e) => {
            setWeight(() => e.target.value);
            textCanvas.style.fontWeight = e.target.value;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "font"}
          className="w-fit text-nowrap text-xl"
        >
          Police :
        </Label>
        <Select
          onValueChange={(value) => {
            setFont(() => value);
            textCanvas.style.fontFamily = value;
          }}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Sélectionnez un style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="none" className="text-lg">
                None
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "italic"}
          className="w-fit text-nowrap text-xl"
        >
          Variantes :
        </Label>
        <ToggleGroup
          type="multiple"
          variant="outline"
          onValueChange={(value) => {
            if (value.includes("italic")) {
              setItalic(() => true);
              textCanvas.style.fontStyle = "italic";
            } else {
              setItalic(() => false);
              textCanvas.style.fontStyle = "normal";
            }
            if (value.includes("underline")) setUnderline(() => true);
            else setUnderline(() => false);
            if (value.includes("line-through")) setLineThrough(() => true);
            else setLineThrough(() => false);
            if (value.includes("overline")) setOverline(() => true);
            else setOverline(() => false);
            textCanvas.style.textDecoration = value
              .join(" ")
              .replace("italic", "");
          }}
        >
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            defaultValue={italic}
          >
            <FontItalicIcon className="size-6" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="underline"
            aria-label="Toggle underline"
            defaultValue={underline}
          >
            <UnderlineIcon className="size-6" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="line-through"
            aria-label="Toggle line-through"
            className={lineThrough}
          >
            <StrikethroughIcon className="size-6" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="overline"
            aria-label="Toggle overline"
            defaultValue={overline}
          >
            <OverlineIcon className="size-6" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "text"}
          className="w-fit text-nowrap text-xl"
        >
          Letter spacing :
        </Label>
        <Input
          id={props.id + "text"}
          type="number"
          className="text-xl"
          defaultValue={letterSpacing}
          onChange={(e) => {
            console.log(e.target.value);
            setLetterSpacing(() => e.target.value + "px");
            textCanvas.style.letterSpacing = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "text"}
          className="w-fit text-nowrap text-xl"
        >
          Texte :
        </Label>
        <Input
          id={props.id + "text"}
          type="text"
          className="text-xl"
          defaultValue={text}
          onChange={(e) => {
            setText(() => e.target.value);
            textCanvas.textContent = e.target.value;
          }}
        />
      </div>
      <Separator />
      <span className="text-center text-2xl font-bold">Ombre</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "shadow"}
          className="w-fit text-nowrap text-xl"
        >
          Activé :
        </Label>
        <Switch
          id={props.id + "shadow"}
          defaultValue={shadow}
          onCheckedChange={(value) => {
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
            textCanvas.style.textShadow = value ? temp : "";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "shadowColor"}
          className="w-fit text-nowrap text-xl"
        >
          Couleur :
        </Label>
        <div className="grid grid-cols-2 items-center gap-x-2">
          <Input
            id={props.id + "shadowColor"}
            type="color"
            className="overflow-hidden p-0 text-xl"
            defaultValue="black"
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
              textCanvas.style.textShadow = temp;
            }}
          />
          <Input
            id={props.id + "shadowColorOpacity"}
            type="number"
            className="text-xl"
            max={255}
            min={0}
            defaultValue={colorOpacity}
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
              setShadowOpacity(() => e.target.value);
              textCanvas.style.textShadow = temp;
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "shadowBlur"}
          className="w-fit text-nowrap text-xl"
        >
          Flou :
        </Label>
        <Input
          id={props.id + "shadowBlur"}
          type="number"
          className="text-xl"
          defaultValue={0}
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
            setShadowBlur(() => e.target.value);
            setTextShadow(() => temp);
            textCanvas.style.textShadow = temp;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "shadowOffsetX"}
          className="w-fit text-nowrap text-xl"
        >
          Décallage X :
        </Label>
        <Input
          id={props.id + "shadowOffsetX"}
          type="number"
          className="text-xl"
          defaultValue={0}
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
            setShadowOffsetX(() => e.target.value);
            textCanvas.style.textShadow = temp;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "shadowOffsetY"}
          className="w-fit text-nowrap text-xl"
        >
          Décallage Y :
        </Label>
        <Input
          id={props.id + "shadowOffsetY"}
          type="number"
          className="text-xl"
          defaultValue={0}
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
            setShadowOffsetY(() => e.target.value);
            textCanvas.style.textShadow = temp;
          }}
        />
      </div>
      <Separator />
      <span className="text-center text-2xl font-bold">Contour</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "textStokeWidth"}
          className="w-fit text-nowrap text-xl"
        >
          Épaisseur du contour:
        </Label>
        <Input
          id={props.id + "textStokeWidth"}
          type="number"
          className="text-xl"
          defaultValue={textStokeWidth}
          onChange={(e) => {
            setTextStokeWidth(() => e.target.value);
            textCanvas.style.webkitTextStrokeWidth = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "textStokeColor"}
          className="w-fit text-nowrap text-xl"
        >
          Couleur du contour :
        </Label>
        <div className="grid grid-cols-2 items-center gap-x-2">
          <Input
            id={props.id + "textStokeColor"}
            type="color"
            className="overflow-hidden p-0 text-xl"
            defaultValue={textStokeColor}
            onChange={(e) => {
              setTextStokeColor(() => e.target.value);
              textCanvas.style.webkitTextStrokeColor =
                e.target.value + Number(colorOpacity).toString(16);
            }}
          />
          <Input
            id={props.id + "textStokeColorTransparancy"}
            type="number"
            className="text-xl"
            max={255}
            min={0}
            defaultValue={textStrokeColorOpacity}
            onChange={(e) => {
              setColorOpacity(() => e.target.value);
              textCanvas.style.webkitTextStrokeColor =
                color + Number(e.target.value).toString(16);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "backgroundClip"}
          className="w-fit text-nowrap text-xl"
        />
        <Select
          onValueChange={(value) => {
            switch (value) {
              case "border-box":
                setBackgroundClip(() => "border-box");
                textCanvas.style.backgroundClip = "border-box";
                break;
              case "padding-box":
                setBackgroundClip(() => "padding-box");
                textCanvas.style.backgroundClip = "padding-box";
                break;
              case "content-box":
                setBackgroundClip(() => "content-box");
                textCanvas.style.backgroundClip = "content-box";
                break;
              case "text":
                setBackgroundClip(() => "text");
                textCanvas.style.backgroundClip = "text";
                break;

              default:
                break;
            }
          }}
          defaultValue={backgroundClip}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Sélectionnez un style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="border-box" className="text-lg">
                Border box
              </SelectItem>
              <SelectItem value="padding-box" className="text-lg">
                Padding box
              </SelectItem>
              <SelectItem value="content-box-box" className="text-lg">
                Content box
              </SelectItem>
              <SelectItem value="text" className="text-lg">
                Text
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <span className="text-center text-2xl font-bold">Fond</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "background"}
          className="w-fit text-nowrap text-xl"
        >
          Type fond :
        </Label>
        <Select
          id={props.id + "backgroundRepeat"}
          onValueChange={(value) => {
            switch (value) {
              case "none":
                setBackground(() => value);
                textCanvas.style.backgroundColor = "unset";
                textCanvas.style.backgroundImage = "unset";
                break;
              case "image":
                setBackground(() => value);
                textCanvas.style.backgroundColor = "unset";
                textCanvas.style.backgroundImage = "url(" + src + ")";
                break;
              case "color":
                setBackground(() => value);
                textCanvas.style.backgroundColor =
                  backgroundColor +
                  Number(backgroundColorTransparancy).toString(16);
                textCanvas.style.backgroundImage = "unset";
              default:
                break;
            }
          }}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Sélectionnez un style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="none" className="text-lg">
                None
              </SelectItem>
              <SelectItem value="image" className="text-lg">
                Image
              </SelectItem>
              <SelectItem value="color" className="text-lg">
                Color
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "src"}
          className="w-full text-nowrap text-xl"
        >
          Source :
        </Label>
        <form enctype="multipart/form-data">
          <Input
            id={props.id + "src"}
            type="file"
            className="text-xl"
            onChange={readURL}
          />
        </form>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "textStokeColor"}
          className="w-fit text-nowrap text-xl"
        >
          Couleur du fond :
        </Label>
        <div className="grid grid-cols-2 items-center gap-x-2">
          <Input
            id={props.id + "backgroundColor"}
            type="color"
            className="overflow-hidden p-0 text-xl"
            defaultValue={backgroundColor}
            onChange={(e) => {
              setTextStokeColor(() => e.target.value);
              textCanvas.style.backgroundColor =
                e.target.value +
                Number(backgroundColorTransparancy).toString(16);
            }}
          />
          <Input
            id={props.id + "backgroundColorTransparancy"}
            type="number"
            className="text-xl"
            max={255}
            min={0}
            defaultValue={backgroundColorTransparancy}
            onChange={(e) => {
              setColorOpacity(() => e.target.value);
              textCanvas.style.backgroundColor =
                backgroundColor + Number(e.target.value).toString(16);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "xOffset"}
          className="w-fit text-nowrap text-xl"
        >
          Décallage X :
        </Label>
        <Input
          id={props.id + "xOffset"}
          type="number"
          className="text-xl"
          defaultValue={xOffset}
          onChange={(e) => {
            setXOffset(() => e.target.value);
            textCanvas.style.backgroundPositionX = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "yOffset"}
          className="w-fit text-nowrap text-xl"
        >
          Décallage Y :
        </Label>
        <Input
          id={props.id + "yOffset"}
          type="number"
          className="text-xl"
          defaultValue={yOffset}
          onChange={(e) => {
            setYOffset(() => e.target.value);
            textCanvas.style.backgroundPositionY = e.target.value + "px";
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "backgroundRepeat"}
          className="w-fit text-nowrap text-xl"
        >
          Répétition :
        </Label>
        <Select
          id={props.id + "backgroundRepeat"}
          onValueChange={(value) => {
            setBackgroundRepeat(() => value);
            textCanvas.style.backgroundRepeat = value;
          }}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Sélectionnez un style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="no-repeat" className="text-lg">
                No repeat
              </SelectItem>
              <SelectItem value="repeat" className="text-lg">
                Repeat
              </SelectItem>
              <SelectItem value="space" className="text-lg">
                Space
              </SelectItem>
              <SelectItem value="round" className="text-lg">
                Round
              </SelectItem>
              <SelectItem value="repeat-x" className="text-lg">
                Repeat x
              </SelectItem>
              <SelectItem value="repeat-y" className="text-lg">
                Repeat y
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "backgroundSize"}
          className="w-fit text-nowrap text-xl"
        >
          Taille :
        </Label>
        <Select
          id={props.id + "backgroundSize"}
          onValueChange={(value) => {
            setBackgroundSize(() => value);
            textCanvas.style.backgroundSize = value;
          }}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Sélectionnez un style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="cover" className="text-lg">
                Cover
              </SelectItem>
              <SelectItem value="contain" className="text-lg">
                Contain
              </SelectItem>
              <SelectItem value="custom" className="text-lg">
                <Input type="number" />
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <span className="text-center text-2xl font-bold">Autres</span>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "opacity"}
          className="w-fit text-nowrap text-xl"
        >
          Opacité :
        </Label>
        <Input
          id={props.id + "opacity"}
          type="number"
          className="text-xl"
          max={100}
          min={0}
          defaultValue={opacity}
          onChange={(e) => {
            setOpacity(() => e.target.value);
            textCanvas.style.opacity = e.target.value / 100;
          }}
        />
      </div>
      <div className="grid grid-cols-2 items-center">
        <Label
          htmlFor={props.id + "rotation"}
          className="w-fit text-nowrap text-xl"
        >
          Rotation :
        </Label>
        <Input
          id={props.id + "rotation"}
          type="number"
          className="text-xl"
          defaultValue={rotation}
          onChange={(e) => {
            setRotation(() => e.target.value);
            textCanvas.style.transform = `rotate(${e.target.value}deg)`;
          }}
        />
      </div>
    </div>
  );
}
