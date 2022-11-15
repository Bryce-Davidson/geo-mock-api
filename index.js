require("dotenv").config();
const matchClient = require("@mapbox/mapbox-sdk/services/map-matching.js");
const { writeJSON } = require("./util/sample");
const { createFeature } = require("./util/geoJSON");

const match = matchClient({ accessToken: process.env.MAPBOX_API_TOKEN });

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
    const feature = createFeature(geo);
    const JSON = JSON.stringify(feature);
    writeJSON("matched.json", JSON);
  })
  .catch((e) => console.log(e));
