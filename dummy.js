import { randFloat } from "@ngneat/falso";
import fs from "fs";

function lat() {
  return randFloat({ min: 48.45372, max: 48.426731, fraction: 6 });
}
function lon() {
  return randFloat({ min: -123.310109, max: -123.391863, fraction: 6 });
}

const bbox = () => {
  const string = `${coord()},${coord()}`;
  return string;
};

function pointFeature() {
  const point = {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [lon(), lat()],
      type: "Point",
    },
  };
  return point;
}

function randomPointsCollection() {
  let collection = {
    type: "FeatureCollection",
    features: [],
  };
  for (let index = 0; index < 10; index++) {
    collection.features.push(pointFeature());
  }
  return collection;
}

let randFeat = randomPointsCollection();
let points = JSON.stringify(randFeat, null, 2);
fs.writeFile("points.json", points, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
