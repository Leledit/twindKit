
import { Tooltip } from "../Tooltip.js";
import { Trash, Pencil, Link, Info, CheckCheck } from "lucide-react";
import { JSX, ReactNode } from "react";

type typeAction = "edit" | "delete" | "link" | "info" | "check";

export interface TableActionProps {
  type: typeAction;
  action: () => void;
  textTooltip: string;
}

export function TableAction({
  type,
  action,
  textTooltip,
}: Readonly<TableActionProps>): ReactNode {
  const classComponent =
    "w-[18px] h-[18px] cursor-pointer text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)] mx-1";

  const iconMap: Record<typeAction, JSX.Element> = {
    edit: (
      <Tooltip text={textTooltip} key="tableActionEdit">
        <Pencil className={classComponent} onClick={action} />
      </Tooltip>
    ),
    delete: (
      <Tooltip text={textTooltip} key="tableActionDelete">
        <Trash className={classComponent} onClick={action} />
      </Tooltip>
    ),
    link: (
      <Tooltip text={textTooltip} key="tableActionLink">
        <Link className={classComponent} onClick={action} />
      </Tooltip>
    ),
    info: (
      <Tooltip text={textTooltip} key="tableActionInfo">
        <Info className={classComponent} onClick={action} />
      </Tooltip>
    ),
    check: (
      <Tooltip text={textTooltip} key="tableActionCheck">
        <CheckCheck className={classComponent} onClick={action} />
      </Tooltip>
    ),
  };

  return iconMap[type];
}
