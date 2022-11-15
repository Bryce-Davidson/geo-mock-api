const {
  randFloat,
  randUserName,
  randText,
  randCompanyName,
} = require("@ngneat/falso");
const fs = require("fs");

function randLat() {
  return randFloat({ min: 48.45372, max: 48.426731, fraction: 6 });
}
function randLon() {
  return randFloat({ min: -123.310109, max: -123.391863, fraction: 6 });
}

function randPointFeature() {
  const point = {
    type: "Feature",
    properties: {
      name: randCompanyName(),
      user: randUserName(),
      description: randText({ charCount: 250 }),
    },
    geometry: {
      coordinates: [randLon(), randLat()],
      type: "Point",
    },
  };
  return point;
}

function randPointsCollection() {
  let collection = {
    type: "FeatureCollection",
    features: [],
  };
  for (let index = 0; index < 10; index++) {
    collection.features.push(randPointFeature());
  }
  return collection;
}

function randWayPoints(count) {
  let waypoints = [];
  for (let index = 0; index < count; index++) {
    waypoints.push({ coordinates: [randLon(), randLat()] });
  }
  console.log(waypoints);
  return waypoints;
}

let randWaypoints = randWayPoints(2);
let points = JSON.stringify(randWaypoints, null, 2);
fs.writeFile("points.json", points, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});
