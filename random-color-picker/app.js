const colors = ["green", "red", "blue", "yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  const randomNumber = getRandomNumer();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumer(){
  return Math.floor(Math.random() * colors.length);
};
