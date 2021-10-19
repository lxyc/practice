const { list2tree, tree2list } = require("../list2tree.js");

const listData = [
  {
    id: "p1",
    pid: null,
    title: "广东",
  },
  {
    id: "p1-1",
    pid: "p1",
    title: "广州",
  },
  {
    id: "p2",
    pid: null,
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

test("list to tree work", () => {
  const tree = list2tree(listData);
  const list = tree2list(tree);
  // console.log(JSON.stringify(tree));
  // console.log(JSON.stringify(list));

  // expect(list).toEqual(listData);
});
