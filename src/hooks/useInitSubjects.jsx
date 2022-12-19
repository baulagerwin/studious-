function useInitSubjects(subjects, qnas) {
  let subjectsWithCount = [];

  for (let subject of subjects) {
    let subjectCount = 0;

    for (let qna of qnas) if (subject._id === qna.subject._id) subjectCount++;

    subjectsWithCount.push({ ...subject, count: subjectCount });
  }

  let subjectsWithSwipeable = subjectsWithCount.map((subject) => {
    if (subject.name === "Unclassified")
      return { ...subject, swipeable: false };
    return { ...subject, swipeable: true };
  });

  return [
    { _id: 0, name: "All Subjects", count: qnas.length, swipeable: false },
    ...subjectsWithSwipeable,
  ];
}

export default useInitSubjects;
