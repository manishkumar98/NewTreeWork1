export default function Tree() {
  let tree = {
    0: {
      counter: 0,
      nodeId: 0,
      childIds: [],
      parentId: Math.floor(Math.random() * 10000)
    }
  };

  return tree;
}
