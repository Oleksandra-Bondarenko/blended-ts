interface User {
  name: string;
  age: number;
}

type ReturnFunc = User & { isAdmin: boolean };

// or:
// interface ReturnFunc extends User {
//   isAdmin: boolean;
// }

function createUser({ name, age }: User): ReturnFunc {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
