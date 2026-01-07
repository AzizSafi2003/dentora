"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "@/lib/utils";

// -----------------------------
// Panel Group wrapper
// -----------------------------
function ResizablePanelGroup({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Group>) {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      {children}
    </Group>
  );
}

// -----------------------------
// Panel wrapper
// -----------------------------
function ResizablePanel({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentProps<typeof Panel>) {
  return (
    <Panel data-slot="resizable-panel" {...props}>
      {children}
    </Panel>
  );
}

// -----------------------------
// Handle wrapper using Separator
// -----------------------------
function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & { withHandle?: boolean }) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 " +
          "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full " +
          "data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 " +
          "data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
