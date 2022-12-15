function SortQnasItem({ sortBy, onSort, onOpen, item }) {
  function handleOnMouseDown(e) {
    e.stopPropagation();
  }

  function handleOnMouseUp(e) {
    e.stopPropagation();

    onSort(item.name);
    onOpen(e, false);
  }

  return (
    <div className="flex overflow-hidden rounded-md w-full">
      <div
        className={`shrink-0 w-full flex items-center gap-1 px-4 py-3 hover:bg-secondTint select-none ${
          sortBy === item.name ? "bg-secondTint" : ""
        }`}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
      >
        <div>{item.name}</div>
      </div>
    </div>
  );
}

export default SortQnasItem;
