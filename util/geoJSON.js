const fs = require("fs");
exports.createFeature = function (mbxGeometry) {
  return (collection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: mbxGeometry,
      },
    ],
  });
};

exports.writeJSON = function (path, json) {
  fs.writeFile(path, json, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};
