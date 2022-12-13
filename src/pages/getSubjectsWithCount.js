function getSubjectsWithCount(subjects, qnas) {
  let subjectsWithCount = [];

  for (let subject of subjects) {
    let subjectCount = 0;

    for (let qna of qnas) if (subject._id === qna.subject._id) subjectCount++;

    subjectsWithCount.push({ ...subject, count: subjectCount });
  }

  return [
    { _id: 0, name: "All Subjects", count: qnas.length },
    ...subjectsWithCount,
  ];
}

export default getSubjectsWithCount;
