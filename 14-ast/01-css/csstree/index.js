const fs = require("fs");
const path = require("path");
const csstree = require("css-tree");

const cssSource = fs.readFileSync(
  path.join(__dirname, "../../demo.css"),
  "utf-8"
);

const ast = csstree.parse(cssSource);

csstree.walk(ast, function(node) {
	console.log(node.type);
})

fs.writeFileSync(
  path.join(__dirname, "./csstree.json"),
  JSON.stringify(ast, null, "\t")
);

