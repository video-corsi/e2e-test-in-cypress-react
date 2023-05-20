import { PropsWithChildren, useEffect, useState } from "react";

interface ToggableProps {
  title: string;
  open?: boolean;
  icon?: string;
  onIconClick?: () => void;
}

export function Toggable(props: PropsWithChildren<ToggableProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { children, icon, open = true, onIconClick, title } = props;

  useEffect(() => {
    setIsOpen(!!open);
  }, [open]);

  function iconClickHandler(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    onIconClick();
  }

  return (
    <div className="bg-slate-200">
      <div
        className="flex justify-between items-center border-b border-b-white p-3"
        onClick={() => setIsOpen((o) => !o)}
      >
        <div className="text-xl ">{title}</div>
        {icon && <div onClick={iconClickHandler}>{icon}</div>}
      </div>

      {
        isOpen &&
          <div className="p-3">{children}</div>
      }

    </div>
  );
}
