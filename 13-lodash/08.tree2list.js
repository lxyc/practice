function tree2list(tree) {
  const list = [];
  const queue = [...tree];

  while (queue.length) {
    const node = queue.shift();
    const children = node.children;

    if (children.length) {
      queue.push(...children);
    }

    list.push(node);
  }
  return list;
}

const tree = [
  {
    id: "p1",
    title: "广东",
    pid: null,
    children: [
      {
        id: "p1-1",
        pid: "p1",
        title: "广州",
        children: [],
      },
    ],
  },
  {
    id: "p2",
    title: "四川",
    pid: null,
    children: [
      {
        id: "p2-1",
        pid: "p2",
        title: "成都",
        children: [
          {
            id: "p2-1-1",
            pid: "p2-1",
            title: "高新区",
            children: [
              {
                id: "p2-1-1-2",
                pid: "p2-1-1",
                title: "高新区3343",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "p2-2",
        pid: "p2",
        title: "德阳",
        children: [],
      },
      {
        id: "p2-3",
        pid: "p2",
        title: "绵阳",
        children: [],
      },
    ],
  },
];

console.log(tree2list(tree));
