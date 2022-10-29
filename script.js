console.log("hello");

const input = document.querySelector(".input");
const drinks = document.querySelectorAll(".ul__drink");
const inputText = input.value;
console.log(drinks);

const finder = function () {
  drinks.forEach((el) => {
    const task = el.textContent;

    if (task.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
  //   for (let i = 0; i < drinks.length; i++) {
  //     const drink = drinks[i].textContent;
  //     // console.log(drink);
  //     console.log(input.value);
  //     if (input.value.toLowerCase() == drink.toLowerCase()) {
  //       console.log("✅✅✅✅✅ ok");
  //     } else {
  //       console.log("🔴🔴🔴🔴🔴 nie ok");
  //       drink;
  //     }
  //   }
};

input.addEventListener("keyup", finder);
