import { useState } from "react";
import { Accordion } from "./Accordion.js";

export type AccordionGroupItem<T> = {
  id: string;
  title: string;
  data: T;
};

export type AccordionGroupProps<T> = {
  items: AccordionGroupItem<T>[];
  contentComponent: (data: T) => React.ReactNode;
  className?: string;
  classNameAccordion?: string;
};

export function AccordionGroup<T>({
  items,
  contentComponent,
  className,
  classNameAccordion
}: Readonly<AccordionGroupProps<T>>) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={className}>
      {items.map(({ id, title, data }) => (
        <Accordion
          key={id}
          title={title}
          isOpen={openId === id}
          onToggle={() => setOpenId(openId === id ? null : id)}
          className={classNameAccordion}
        >
          {contentComponent(data)}
        </Accordion>
      ))}
    </div>
  );
}