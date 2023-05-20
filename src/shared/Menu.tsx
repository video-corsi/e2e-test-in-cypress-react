export interface MenuProps {
  title?: string;
  items: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
}

export interface MenuItem {
  value: number | string;
  label: string;
}

const Menu = (props: MenuProps) => {
  const { title, items, onItemClick} = props;

  return (
    <div className="border inline-block  text-center">
      {title && <div className="font-bold p-3">{title}</div>}
      <span className="[&>*:not(:last-child)]:border-b inline-block">
        {
          items?.map((item, i) =>
            <div
              key={i}
              className="border-b-slate-700 p-3 hover:bg-slate-100"
              onClick={() => onItemClick(item)}
            >{item.label}</div>
          )
        }
      </span>
    </div>
)
};

export default Menu;

