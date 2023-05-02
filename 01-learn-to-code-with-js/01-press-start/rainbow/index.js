const button = document.getElementById("button");

const colors = [
  "red",
  "blue",
  "orange",
  "rebeccapurple",
  "yellow",
  "green",
  "violet",
];

const change = () => {
  document.body.style.background = colors[(Math.floor(Math.random() * 7))];
};

button.addEventListener('click', change)
