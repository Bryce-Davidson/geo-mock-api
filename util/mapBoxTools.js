exports.createWaypoints = function (sample) {
  return sample.map((coord) => {
    let lon = coord[0];
    let lat = coord[1];
    return {
      coordinates: [lon, lat],
    };
  });
};

// console.log(createWaypoints(samples[0]));
