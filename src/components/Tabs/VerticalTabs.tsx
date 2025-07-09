"use client";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Tooltip } from "tw-elements";

export type TabItem = {
  id: string;
  icon: ReactNode;
  content: ReactNode;
};

export type ActionsItem = {
  id: string;
  icon: ReactNode;
  text: string;
  action: () => void;
};

export interface VerticalTabsProps {
  tabs: TabItem[];
  actions?: ActionsItem[];
  defaultTab?: string;
  className?: string;
}

export function VerticalTabs({
  tabs,
  defaultTab,
  actions,
  className,
}: Readonly<VerticalTabsProps>) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  const selectedTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-row h-full">
      <div
        className={twMerge(
          "w-12 flex flex-col justify-between py-4 z-50 bg-[var(--color-surface)] border-r border-[var(--color-border)]",
          className
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={twMerge(
                "p-2 rounded transition-colors cursor-pointer text-[var(--color-text)] hover:bg-[var(--color-hover)]",
                activeTab === tab.id && "bg-[var(--color-hover)]"
              )}
              aria-label={`Tab ${tab.id}`}
            >
              {tab.icon}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-3 mb-[50px]">
          {actions?.map((action) => (
            <span
              key={action.id}
              onClick={action.action}
              className="cursor-pointer hover:bg-[var(--color-hover)] p-2 rounded transition-colors text-[var(--color-text)]"
            >
              <Tooltip text={action.text} coordLeft={70}>
                {action.icon}
              </Tooltip>
            </span>
          ))}
        </div>
      </div>
      <div className="relative w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-lg z-40 overflow-y-auto text-[var(--color-text)]">
        {selectedTab?.content}
      </div>
    </div>
  );
}
