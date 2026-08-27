"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatStudent(student) {
  return `Student ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Status: ${student.status}`;
}
const student1 = {
  id: 1,
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};
console.log(formatStudent(student1));
// Single Student Response
const singleStudentResponse = {
  success: true,
  data: {
    id: 1,
    name: "Carlos Castro",
    email: "carlos@example.com",
    status: "active",
  },
};
// Multiple Students Response
const multipleStudentsResponse = {
  success: true,
  data: [
    {
      id: 1,
      name: "Carlos Castro",
      email: "carlos@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      email: "juan@example.com",
      status: "inactive",
    },
  ],
};
console.log(singleStudentResponse);
console.log(multipleStudentsResponse);
function isStudent(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const student = value;
  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}
const validStudent = {
  id: 1,
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};
const invalidIdStudent = {
  id: "1",
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};
const missingNameStudent = {
  id: 2,
  email: "student@example.com",
  status: "inactive",
};
console.log(isStudent(validStudent));
console.log(isStudent(invalidIdStudent));
console.log(isStudent(missingNameStudent));
//# sourceMappingURL=index.js.map
