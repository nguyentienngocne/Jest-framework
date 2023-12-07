const student = {
  name: 'Tien Ngoc',
  age: 20,
};

const moreProps = {
  isHero: true,
  gender: 'male',
};

// v1: using Object.assign()

const cloneStudent = Object.assign({}, student, moreProps);
console.log(cloneStudent);

// v2: using spread operator (shorter, easier to read)
const cloneStudent2 = {
  ...student,
  ...moreProps,
};
console.log(cloneStudent2);

const teacher = {
  name: 'Easy Frontend',
  age: 30,

  mark: {
    math: 10,
    english: 7,
  },
};

const cloneTeacher = {
  ...teacher,
  mark: {
    ...teacher.mark,
  },
};
console.log(cloneTeacher);
