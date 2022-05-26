// O(n + m) n length of first linked list, m length of second linked list
// O(1) space

function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
  let p1Prev = null;
  let p2 = headTwo;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev !== null) {
        p1Prev.next = p2;
      }
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }

  if (p1 === null) {
    p1Prev.next = p2;
  }

  return headOne.value < headTwo.value ? headOne : headTwo;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

const list1 = new LinkedList(2).addMany([6, 7, 8]);
const list2 = new LinkedList(1).addMany([3, 4, 5, 9, 10]);

const output = mergeLinkedLists(list1, list2);
console.log(output.getNodesInArray()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
