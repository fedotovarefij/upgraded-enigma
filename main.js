// Массив объектов для сортировки
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 21 },
];

// Функция сортировки массива объектов по заданному полю
function sortArrayByField(array, field) {
  return array.sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
}

// Сортировка массива объектов по полю "age"
const sortedStudents = sortArrayByField(students, "age");

// Вывод отсортированного массива
console.log(sortedStudents);
