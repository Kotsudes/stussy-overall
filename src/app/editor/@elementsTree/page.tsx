"use client";
import React from "react";
import { useAppContext } from "@/app/AppProviders";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { CanvasObject } from "@/config/types/canvasObjects";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { CustomRadio } from "@/components/customRadio";

export default function ElementsTree() {
  const {
    objects,
    setSelectedObject,
  }: {
    objects: CanvasObject[];
    setSelectedObject: React.Dispatch<React.SetStateAction<string>>;
  } = useAppContext();

  return (
    <div className="flex flex-col justify-items-center px-2 max-h-full overflow-y-auto gap-y-3">
      <span className="text-center text-2xl font-bold underline">Elements</span>
      <RadioGroup
        classNames={{ wrapper: "gap-0" }}
        onChange={(e) => {
          setSelectedObject(() => e.target.value);
        }}
      >
        {objects.map((item: CanvasObject) => {
          return (
            <CustomRadio
              key={"element-key-" + item.id}
              value={item.id}
              classNames={{
                labelWrapper: "w-full flex flex-row gap-x-4 items-center",
              }}
            >
              {item.name}
              {item.hidden ? <FaEyeSlash /> : <FaEye />}
            </CustomRadio>
          );
        })}
      </RadioGroup>
    </div>
  );
}
