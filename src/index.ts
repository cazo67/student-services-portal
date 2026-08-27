interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

// function formatStudent(student: Student): string {
//     return `Student ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Status: ${student.status}`;
// }

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.email}) is currently ${student.status}.`;
}

const student1: Student = {
  id: 1,
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};

console.log(formatStudent(student1));

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Single Student Response
const singleStudentResponse: ApiResponse<Student> = {
  success: true,
  data: {
    id: 1,
    name: "Carlos Castro",
    email: "carlos@example.com",
    status: "active",
  },
};

// Multiple Students Response

const multipleStudentsResponse: ApiResponse<Student[]> = {
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

function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const student = value as Record<string, unknown>;

  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}

const validStudent: unknown = {
  id: 1,
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};

const invalidIdStudent: unknown = {
  id: "1",
  name: "Carlos Castro",
  email: "carlos@example.com",
  status: "active",
};

const missingNameStudent: unknown = {
  id: 2,
  email: "student@example.com",
  status: "inactive",
};

console.log(isStudent(validStudent));
console.log(isStudent(invalidIdStudent));
console.log(isStudent(missingNameStudent));
