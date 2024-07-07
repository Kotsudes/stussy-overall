"use client";
import { preview } from "@/config/types/preview";

export default function Home() {
  addEventListener("storage", () => {
    const storedRatio = localStorage.getItem("ratio") || "custom";
    document.documentElement.style.setProperty(
      "--preview-width",
      `${preview[storedRatio].width}px`
    );
    document.documentElement.style.setProperty(
      "--preview-height",
      `${preview[storedRatio].height}px`
    );
  });

  return (
    <article className="grid items-center justify-center pt-16 w-full">
      <div className="bg-primary w-preview h-preview"></div>
    </article>
  );
}
