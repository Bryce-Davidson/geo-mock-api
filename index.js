fetch("https://mockend.com/Bryce-Davidson/geo-mock-api/posts", {})
  .then((response) => response.json())
  .then((json) => console.log(json));
