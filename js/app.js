let Pashsha = document.getElementById("pashsha");
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
elon = document.getElementById("elon");
let timeInterval;
let prisel1 = document.getElementById("prisel");
document.addEventListener("mousemove", (e) => {
  prisel1.style = `
position:absolute;
left:${e.clientX}px;
top:${e.clientY}px;
`;
});
timeInterval = setInterval(() => {
  let left = Math.trunc(
    Math.random() * (document.documentElement.clientWidth - 300)
  );
  let top = Math.trunc(
    Math.random() * (document.documentElement.clientHeight - 300)
  );
  Pashsha.style = `
    transition:0.2s;
      position:absolute;
      top:${top}px;
      left:${left}px;`;
  console.log(timeInterval);
}, Number(document.getElementById("tezlik").value));

function pashshaTezligi() {
  if (timeInterval) {
    clearInterval(timeInterval);
    ochko = 0;
  }
  timeInterval = setInterval(() => {
    let left = Math.trunc(
      Math.random() * (document.documentElement.clientWidth - 100)
    );
    let top = Math.trunc(
      Math.random() * (document.documentElement.clientHeight - 100)
    );
    Pashsha.style = `
        transition:0.4s;
        position:absolute;
        top:${top}px;
        left:${left}px;`;
  }, Number(document.getElementById("tezlik").value));
}
let ochko = 0;
Pashsha.addEventListener("click", (e) => {
  console.log(e.clientX, e.screenX);
  ochko++;
  elon.textContent = `Sizda ${ochko} ball`;
  elon.style.display = "block";
  Pashsha.setAttribute("src", "../images/istockphoto-474465413-612x6122.png");
  Pashsha.classList.toggle("pashshaQonli");
  setTimeout(() => {
    elon.style.display = "none";
    Pashsha.setAttribute("src", "../images/istockphoto-474465413-612x612.png");
    Pashsha.classList.toggle("pashshaQonli");
  }, 1000);
});
