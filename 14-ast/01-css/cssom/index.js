const fs = require("fs");
const path = require("path");
const CSSOM = require("cssom");

const { uncircularOwnProperties } = require("./utils.js");
const cssSource = fs.readFileSync(
  path.join(__dirname, "../../demo.css"),
  "utf-8"
);

const ret = CSSOM.parse(cssSource);
fs.writeFileSync(
  path.join(__dirname, "./cssom.json"),
  JSON.stringify(uncircularOwnProperties(ret), null, "\t")
);
