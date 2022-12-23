import DDItem from "./DDItem";
import DDSwipableItem from "./DDSwipableItem";

function DDItems({
  isXOpen,
  onXOpen,
  xBy,
  onXBy,
  limitLength,
  items,
  swipeable,
}) {
  return (
    <ul
      className={`absolute left-0 top-full translate-y-1 w-full border rounded-md cursor-pointer bg-white z-10 shadow ${
        items.length > limitLength ? "h-60 overflow-y-auto" : "h-auto"
      } ${isXOpen ? "visible" : "invisible"}`}
    >
      {items.map((item) => (
        <li key={item._id}>
          {!swipeable ? (
            <DDItem xBy={xBy} onXBy={onXBy} onXOpen={onXOpen} item={item} />
          ) : (
            <DDSwipableItem
              xBy={xBy}
              onXBy={onXBy}
              onXOpen={onXOpen}
              item={item}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default DDItems;
