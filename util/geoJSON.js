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
