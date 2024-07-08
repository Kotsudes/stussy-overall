"use client";
import React from "react";
import {
  Button,
  Input,
  Select,
  SelectedItems,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { ratios, Ratio } from "@/config/types/ratio";
import { templates, Template } from "@/config/types/template";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Poster = {
  template: Template;
  title: String;
  description: String;
  ratio: Ratio;
  width: Number;
  height: Number;
};

export default function Poster() {
  const router = useRouter();
  const { register, handleSubmit, watch, getValues, setValue } =
    useForm<Poster>();
  const onSubmit: SubmitHandler<Poster> = (data) => {
    console.log(data);
    router.push("/editor");
  };

  const ratio = watch("ratio");

  return (
    <aside className="pl-16 pr-12 py-12 w-[600px]">
      <form
        className="flex flex-col items-center justify-between gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Select
          items={templates}
          isRequired
          label="Template"
          labelPlacement="outside"
          placeholder="Selectionnez un template"
          description="Choisissez un template pour votre poster"
          defaultSelectedKeys={["custom"]}
          classNames={{
            trigger: "min-h-14 h-36",
            label: "text-lg top-5",
          }}
          renderValue={(items: SelectedItems<Template>) => {
            return items.map((item) => (
              <div key={item.key} className="flex gap-2 items-center">
                <div className="relative flex-shrink-0 bg-primary grid items-center justify-center size-32">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-32 max-w-32  overflow-hidden`}
                  >
                    <span className="text-black font-bold">
                      {item.data?.format}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-small">{item.data?.label}</span>
                  <span className="text-tiny text-default-400 text-wrap">
                    {item.data?.description}
                  </span>
                </div>
              </div>
            ));
          }}
          {...register("template")}
        >
          {(template: Template) => {
            return (
              <SelectItem key={template.value} textValue={template.value}>
                <div className="flex gap-2 items-center">
                  <div className="flex-shrink-0 size-10 bg-primary rounded-full grid items-center justify-center">
                    <span className="text-black font-bold">
                      {template.format}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-small">{template.label}</span>
                    <span className="text-tiny text-default-400 text-wrap">
                      {template.description}
                    </span>
                  </div>
                </div>
              </SelectItem>
            );
          }}
        </Select>
        <Input
          isClearable
          isRequired
          type="text"
          label="Titre"
          labelPlacement="outside"
          variant="bordered"
          placeholder="Entrez le titre de votre poster"
          description="Un bon poster c'est avant tout un bon titre !"
          onClear={() => console.log("input cleared")}
          classNames={{ input: "max-w-xs", label: "text-lg" }}
          {...register("title")}
        />

        <Textarea
          type="text"
          label="Description"
          labelPlacement="outside"
          variant="bordered"
          placeholder="Entrez la description de votre poster"
          description="Au cas où vous oubliez ce que vous avez fait"
          classNames={{ input: "max-w-xs", label: "text-lg" }}
          {...register("description")}
        />

        <Select
          items={ratios}
          isRequired
          label="Ratio"
          labelPlacement="outside"
          placeholder="Selectionnez un ratio"
          description="Le ratio largeur/hauteur de votre poster"
          defaultSelectedKeys={["custom"]}
          classNames={{
            trigger: "min-h-14",
            label: "text-lg",
          }}
          renderValue={(items: SelectedItems<Ratio>) => {
            return items.map((item) => (
              <div key={item.key} className="flex gap-2 items-center">
                <div className="flex-shrink-0 size-10 bg-primary rounded-full grid items-center justify-center">
                  <span className="text-black font-bold">
                    {item.data?.format}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-small">{item.data?.label}</span>
                  <span className="text-tiny text-default-400 text-wrap">
                    {item.data?.description}
                  </span>
                </div>
              </div>
            ));
          }}
          {...register("ratio", {
            onChange: (e) => {
              if (String(ratio) !== "custom") {
                setValue(
                  "height",
                  Math.round(
                    (Number(getValues("width")) *
                      Number(String(e.target.value).split(":")[1])) /
                      Number(String(e.target.value).split(":")[0])
                  )
                );
              }
              localStorage.setItem("ratio", e.target.value);
              dispatchEvent(new Event("storage"));
            },
          })}
        >
          {(ratio: Ratio) => {
            return (
              <SelectItem key={ratio.value} textValue={ratio.value}>
                <div className="flex gap-2 items-center">
                  <div className="flex-shrink-0 size-10 bg-primary rounded-full grid items-center justify-center">
                    <span className="text-black font-bold">{ratio.format}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-small">{ratio.label}</span>
                    <span className="text-tiny text-default-400 text-wrap">
                      {ratio.description}
                    </span>
                  </div>
                </div>
              </SelectItem>
            );
          }}
        </Select>
        <div className="flex flex-row gap-x-4">
          <Input
            isRequired
            type="number"
            inputMode="numeric"
            label="Largeur"
            labelPlacement="outside"
            variant="bordered"
            value={String(watch("width"))}
            placeholder="Entrez la largeur"
            classNames={{ input: "max-w-xs", label: "text-lg" }}
            {...register("width", {
              min: 1,
              valueAsNumber: true,
              onChange: (e) => {
                if (String(ratio) !== "custom") {
                  setValue(
                    "height",
                    Math.round(
                      (e.target.value * Number(String(ratio).split(":")[1])) /
                        Number(String(ratio).split(":")[0])
                    )
                  );
                }
              },
            })}
          />
          <Input
            isRequired
            isReadOnly={String(ratio) != "custom"}
            type="number"
            inputMode="numeric"
            label="Hauteur"
            labelPlacement="outside"
            variant="bordered"
            value={String(watch("height"))}
            placeholder="Entrez la hauteur"
            classNames={{ input: "max-w-xs pr-0", label: "text-lg" }}
            {...register("height", { min: 1, valueAsNumber: true })}
          />
        </div>
        <Button type="submit">Créer</Button>
      </form>
    </aside>
  );
}
