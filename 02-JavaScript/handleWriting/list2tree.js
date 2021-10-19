function list2tree(list) {
  const tree = list.filter((e) => e.pid === null);
  tree.children = getChildren(list, null);

  function getChildren(list, id) {
    const children = list.filter((e) => e.pid === id);

    children.forEach((e) => {
      e.children = getChildren(list, e.id);
    });
    return children;
  }

  return tree;
}

function tree2list(tree) {
	const list = [];
  const queues = [...tree];
  while (queues.length) {
    const node = queues.shift();
    if (Array.isArray(node.children)) {
      queues.push(...node.children);
    }
		list.push(node);
  }
	return list;
}

module.exports = {
  list2tree,
	tree2list
};
