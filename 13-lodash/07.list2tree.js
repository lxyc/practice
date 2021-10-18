function list2tree(list) {
  list.forEach((child) => {
    const pid = child.pid;
    if (pid) {
      list.forEach((parent) => {
        if (parent.id === pid) {
          parent.children = parent.children || [];
          parent.children.push(child);
        }
      });
    }
  });
  return list.filter((e) => !e.pid);
}

function list2tree2(list) {
  const tree = list.filter((e) => {
    if (!e.pid) e.pid = null;
    return !e.pid;
  });

  tree.children = getChildren(null, list);

  function getChildren(id, list) {
    const children = [];
    for (const item of list) {
      if (item.pid === id) {
        children.push(item);
      }
    }
    for (const item of children) {
      item.children = getChildren(item.id, list);
    }
    return children;
  }

  return tree;
}

const listData = [
  {
    id: "p1",
    title: "广东",
  },
  {
    id: "p1-1",
    pid: "p1",
    title: "广州",
  },
  {
    id: "p2",
    title: "四川",
  },
  {
    id: "p2-1",
    pid: "p2",
    title: "成都",
  },
  {
    id: "p2-2",
    pid: "p2",
    title: "德阳",
  },
  {
    id: "p2-3",
    pid: "p2",
    title: "绵阳",
  },
  {
    id: "p2-1-1",
    pid: "p2-1",
    title: "高新区",
  },
  {
    id: "p2-1-1-2",
    pid: "p2-1-1",
    title: "高新区3343",
  },
];

console.log(JSON.stringify(list2tree2(listData)));
