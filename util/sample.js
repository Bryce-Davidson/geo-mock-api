const fs = require("fs");

const matchings = [
  [
    [-123.34728647391623, 48.42076692987061],
    [-123.33258915427217, 48.42474150973405],
  ],
];

exports.writeJSON = function (path, json) {
  fs.writeFile(path, json, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};
