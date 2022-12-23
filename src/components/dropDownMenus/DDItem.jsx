function DDItem({ xBy, onXBy, onXOpen, item }) {
  return (
    <div className="flex overflow-hidden rounded-md w-full">
      <div
        className={`shrink-0 w-full flex items-center gap-1 px-4 py-3 hover:bg-secondTint select-none ${
          xBy === item.name ? "bg-secondTint" : ""
        }`}
        onClick={() => {
          onXBy(item.name);
          onXOpen(false);
        }}
      >
        <div>{item.name}</div>
      </div>
    </div>
  );
}

export default DDItem;
