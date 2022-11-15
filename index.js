require("dotenv").config();
const matchClient = require("@mapbox/mapbox-sdk/services/map-matching.js");
const { createWaypoints } = require("./util/mapBoxTools");
const { createFeature, writeJSON } = require("./util/geoJSON");
const { routes } = require("./routes.js");
const match = matchClient({ accessToken: process.env.MAPBOX_API_TOKEN });

match
  .getMatch({
    tidy: true,
    geometries: "geojson",
    overview: "full",
    points: createWaypoints(routes.downtownWalk),
  })
  .send()
  .then((res) => {
    console.log("Res");
    const geo = res.body.matchings[0].geometry;
    const feature = createFeature(geo);
    const data = JSON.stringify(feature);
    writeJSON("matched.json", data);
  })
  .catch((e) => console.log(e));
