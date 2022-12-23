import DDButton from "./DDButton";
import DDItems from "./DDItems";

function DropDownMenu({
  initialXBy,
  isXOpen,
  onXOpen,
  xBy,
  onXBy,
  limitLength,
  items,
  swipeable,
}) {
  return (
    <div
      className="relative h-full w-full"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <DDButton
        initialXBy={initialXBy}
        isXOpen={isXOpen}
        onXOpen={onXOpen}
        xBy={xBy}
      />
      <DDItems
        isXOpen={isXOpen}
        onXOpen={onXOpen}
        xBy={xBy}
        onXBy={onXBy}
        limitLength={limitLength}
        items={items}
        swipeable={swipeable}
      />
    </div>
  );
}

export default DropDownMenu;
