fetch("https://mockend.com/Bryce-Davidson/geo-mock-api/points", {})
  .then((response) => response.json())
  .then((json) => console.log(json));
