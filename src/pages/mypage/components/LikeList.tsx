interface Props {
  items: [];
}

function ItemList({ items }: Props) {
  return (
    <div className="flex">
      {items.map((item, idx) => (
        <div className="flex">
          {item}
          {idx}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
