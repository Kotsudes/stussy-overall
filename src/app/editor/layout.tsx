"use client";
import React from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

export default function Layout({
  children,
  view,
  properties,
  elementsTree,
}: {
  children: React.ReactNode;
  view: React.ReactNode;
  properties: React.ReactNode;
  elementsTree: React.ReactNode;
}) {
  let defaultLayout = [75, 25];
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <main className="w-full h-screen flex flex-col">
      {children}
      <PanelGroup
        autoSaveId="persistence"
        direction="horizontal"
        onLayout={onLayout}
      >
        <Panel defaultSize={defaultLayout[0]}>{view}</Panel>
        <PanelResizeHandle className="bg-primary-foreground w-[0.5px]" />
        <Panel defaultSize={defaultLayout[1]}>
          <PanelGroup direction="vertical">
            <Panel defaultSize={defaultLayout[0]}>{properties}</Panel>
            <PanelResizeHandle className="bg-primary-foreground h-[0.5px]" />
            <Panel defaultSize={defaultLayout[1]}>{elementsTree}</Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </main>
  );
}
