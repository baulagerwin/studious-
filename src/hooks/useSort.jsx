import { useState } from "react";

function useSort(initialSort, list) {
  const [sort, setSort] = useState(initialSort);
  let sorters = [
    {
      _id: 1,
      name: "A - Z",
      fn: function (a, b) {
        const questionA = a.question.toUpperCase();
        const questionB = b.question.toUpperCase();

        if (questionA < questionB) return -1;
        if (questionA > questionB) return 1;

        return 0;
      },
    },
    {
      _id: 2,
      name: "Z - A",
      fn: function (a, b) {
        const questionA = a.question.toUpperCase();
        const questionB = b.question.toUpperCase();

        if (questionA > questionB) return -1;
        if (questionA < questionB) return 1;
        return 0;
      },
    },
    {
      _id: 3,
      name: "Time, oldest.",
      fn: function (a, b) {
        return a._id - b._id;
      },
    },
    {
      _id: 4,
      name: "Time, newest.",
      fn: function (a, b) {
        return b._id - a._id;
      },
    },
  ];

  const sorted = sortQnas(list);

  function sortQnas(qnas) {
    const sortBy = sorters.find((sorter) => sorter.name === sort);
    return qnas.sort(sortBy.fn);
  }

  return [sort, setSort, sorters, sorted];
}

export default useSort;
