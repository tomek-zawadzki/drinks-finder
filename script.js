console.log("hello");

const input = document.querySelector(".input");
const drinks = document.querySelectorAll(".ul__drink");
const inputText = input.value;
console.log(drinks);

input.addEventListener("keyup", () => {
  for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i].textContent;
    console.log(typeof drink);
    console.log(input.value);
    if (input.value === drink) console.log("ok");
    else console.log('nie ok');
  }
});
