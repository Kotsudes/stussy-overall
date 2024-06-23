"use client";
import { useRouter } from "next/navigation";
import { Button, Divider, Spacer } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-row">
      <aside className="flex flex-col content-stretch flex-nowrap max-h-screen min-w-64">
        <Spacer y={3} />
        <span className="mx-3 text-2xl font-bold">Quickstart</span>
        <div className="mx-3 flex flex-col gap-y-1 mt-2">
          <Button color="primary" variant="bordered">
            <span className="text-wrap text-lg">Continuer</span>
          </Button>
          <Button color="primary" variant="bordered">
            <span className="text-wrap text-lg">Ouvrir</span>
          </Button>
          <Button color="primary" variant="bordered">
            <span className="text-wrap text-lg">Nouveau projet</span>
          </Button>
        </div>

        <Divider className="w-2/3 self-center my-5" />
        <span className="mx-3 text-2xl font-bold">Créer</span>
        <div className="mx-3 flex flex-col gap-y-1 mt-2">
          <Button
            color="primary"
            variant="bordered"
            onClick={() => router.push("/new?type=poster")}
          >
            <span className="text-wrap text-lg">Nouveau poster</span>
          </Button>

          <Button
            color="primary"
            variant="bordered"
            onClick={() => router.push("/new?type=tweet")}
          >
            <span className="text-wrap text-lg">Nouveau tweet</span>
          </Button>
        </div>

        <Divider className="w-2/3 self-center my-5" />
        <span className="mx-3 text-2xl font-bold">Récents</span>
        <div className="mx-3 flex flex-col gap-y-1 mt-2 overflow-y-auto">
          <Button
            color="primary"
            variant="bordered"
            onClick={() => router.push("/editor")}
          >
            <span className="text-wrap text-lg">Test</span>
          </Button>
        </div>
        <Spacer y={3} />
      </aside>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 border-l-1 border-l-divider">
        a
      </main>
    </div>
  );
}
