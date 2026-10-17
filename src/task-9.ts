interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4, 5],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

console.log(numberContainer);

const stringContainer: Container<string> = {
  items: ["abc", "123", "jhrvsr"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

console.log(stringContainer);

function getLastElement<T>(array: T[]): T {
  return array[array.length - 1];
}

getLastElement<string>(stringContainer.items);
