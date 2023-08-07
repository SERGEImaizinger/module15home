/*Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.*/

const btn = document.querySelector(".btn");
const icon1 = btn.querySelector(".icon1");
const icon2 = btn.querySelector(".icon2");
btn.addEventListener("click", () => {
  icon1.classList.toggle("hidden");
  icon2.classList.toggle("hidden");
});
