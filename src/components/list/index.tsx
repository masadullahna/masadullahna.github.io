import type { ListProps } from "./types";

const List = <T,>({
  items,
  renderItem,
  as: Component = "ul",
  className = "list-none p-0 m-0",
  emptyMessage = null,
}: ListProps<T>) => {
  if (!items || items.length === 0) {
    return emptyMessage ? <>{emptyMessage}</> : null;
  }

  return (
    <Component className={className}>
      {items.map((item, index) => renderItem(item, index))}
    </Component>
  );
};

export default List;
