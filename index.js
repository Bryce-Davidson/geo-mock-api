require("dotenv").config();
const matchClient = require("@mapbox/mapbox-sdk/services/map-matching.js");
const { writeJSON } = require("./util/sample");

const match = matchClient({ accessToken: process.env.MAPBOX_API_TOKEN });

function createFeature(geometry) {
  return (collection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: geometry,
      },
    ],
  });
}

match
  .getMatch({
    tidy: true,
    geometries: "geojson",
    overview: "full",
    points: [
      { coordinates: [-123.34728647391623, 48.42076692987061] },
      { coordinates: [-123.33258915427217, 48.42474150973405] },
    ],
  })
  .send()
  .then((res) => {
    const geo = res.body.matchings[0].geometry;
    writeJSON("matched.json", JSON.stringify(createFeature(geo)));
  })
  .catch((e) => console.log(e));
