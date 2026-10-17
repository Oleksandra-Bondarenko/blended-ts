const users = ["alice", "bob", "charlie"];

interface UserObject {
  id: number;
  name: string;
}

function toUserObjects(array: string[]): UserObject[] {
  return array.map((name, index) => ({
    id: index + 1,
    name,
  }));
}

toUserObjects(users); // [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
