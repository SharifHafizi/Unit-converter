let input = document.getElementById("box");

let paragraf1 = document.getElementById("p-1");
let paragraf2 = document.getElementById("p-2");
let paragraf3 = document.getElementById("p-3");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  paragraf1.textContent = `${input.value} meters = ${(
    input.value * 3.281
  ).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(
    3
  )} meters `;
  paragraf2.textContent = `${input.value} liters = ${(
    input.value * 0.264
  ).toFixed(3)} gallons | ${input.value} gallons = ${(
    input.value / 0.264
  ).toFixed(3)} liters `;
  paragraf3.textContent = `${input.value} kilos = ${(
    input.value * 2.204
  ).toFixed(3)} pounds | ${input.value} pounds = ${(
    input.value / 2.204
  ).toFixed(3)} kilos `;
});

function myFunction() {
  let body = document.body;
  body.classList.toggle("darkmood");
  let darkMoodBtn = document.getElementById("btn-dark");
  darkMoodBtn.classList.toggle("darkmoodBtn");
  darkMoodBtn.innerText = "Light Mood";
  let main = document.getElementById("main");
  main.style.backgroundColor = "#1F2937";
  let main1 = document.getElementById("main-1");
  main1.style.background = " #273549";
  let main2 = document.getElementById("main-2");
  main2.style.background = " #273549";
  let main3 = document.getElementById("main-3");
  main3.style.background = " #273549";
  paragraf1.style.color = "white";
  paragraf2.style.color = "white";
  paragraf3.style.color = "white";
  let h2text1 = document.getElementById("h2Text1");
  h2text1.style.color = "#CCC1FF";
  let h2text2 = document.getElementById("h2Text2");
  h2text2.style.color = "#CCC1FF";
  let h2text3 = document.getElementById("h2Text3");
  h2text3.style.color = "#CCC1FF";
}
