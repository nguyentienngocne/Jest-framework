const student = {
  name: 'Tien Ngoc',
  age: 20,
  isHero: true,
  'avg mark': 9,
};

student.isMarriage = false;
student['myheight'] = 170;

delete student.name;
console.log(student);

function changePrimitive(name, age) {
  name = 'Easy Frontend';
  age = 17;
}

let name = 'easy';
let age = 20;
