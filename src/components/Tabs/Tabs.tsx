"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export type Tab = {
  key: string;
  label: string;
  content: React.ReactNode;
};

export interface TabsProps {
  tabs: Tab[];
  defaultTabKey?: string;
}

export function Tabs({
  tabs,
  defaultTabKey,
}: Readonly<TabsProps>) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTabKey || tabs[0]?.key
  );

  useEffect(() => {
    const tabExists = tabs.some((tab) => tab.key === activeTab);
    if (!tabExists && tabs.length > 0) {
      setActiveTab(tabs[0].key);
    }
  }, [tabs, activeTab]);

  const activeContent = tabs.find((tab) => tab.key === activeTab)?.content;

  return (
    <div className="overflow-x-auto p-4 sm:p-6">
      <div className="border border-[var(--color-border)] rounded-t-xl bg-[var(--color-surface)]">
        <nav className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white h-[50px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={twMerge(
                  `inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-md`,
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow"
                    : "bg-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="rounded-b-xl border border-t-0 border-[var(--color-border)] p-6 pt-4 bg-[var(--color-surface)] text-[var(--color-text)]">
        {activeContent}
      </div>
    </div>
  );
}
