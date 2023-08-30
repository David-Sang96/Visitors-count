const amountOfCurrentVisitors = document.querySelector("#count-entered");
const submitButton = document.getElementById("submit");
const saveButton = document.querySelector("#save");
const saveContent = document.querySelector(".save-content");
const visitorAmount = document.getElementById("visitors");
const resetButton = document.getElementById("reset");

let sum = 0;
let count = 0;

submitButton.addEventListener("click", () => {
  sum += Number(visitorAmount.value);
  amountOfCurrentVisitors.innerHTML = sum;
  visitorAmount.value = "";
});
saveButton.addEventListener("click", () => {
    count += sum;
  if (count === 0) {
    return;
  } else {
    saveContent.style.color = "#9C904E";
    saveContent.innerHTML = `Previous entries : ${count} people`;
    amountOfCurrentVisitors.innerHTML = 0;
    sum= 0;
  }
});
resetButton.addEventListener("click",()=>{
  sum = 0;
  count = 0;
  saveContent.innerHTML = "Previous entries :";
  saveContent.style.color = "#000";
})