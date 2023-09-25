fetch("http://150.220.144.108:1337/score").then((res) => {
  res.json().then((json) => {
    document.getElementById("table").innerHTML += json.map((item, i) => {
      return `<tr><td>${item.name}</td><td>${item.score}</td><td>${i+1}</td></tr>`;
    });
  });
});
