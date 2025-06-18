const btn = document.querySelector("button");
const dateInput = document.querySelector("input");
const myElement = document.querySelector(".error");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
console.log(btn, dateInput);
const errorStatment = "please select valid date!! ";

btn.addEventListener("click", function (e) {
  e.preventDefault();
  claculateAge();
});

function claculateAge() {
  const dateValue = dateInput.value;

  if (!dateValue) {
    myElement.innerHTML = ` ${errorStatment} `;
    year.innerHTML = "";
    month.innerHTML = "";
    day.innerHTML = "";
    return;
  }
  const currDate = new Date();
  //   console.log(currDate);
  let userDate = new Date(dateValue);
  //   console.log(userDate);
  if (userDate > currDate) {
    myElement.innerHTML = "select valid date ";
    year.innerHTML = "";
    month.innerHTML = "";
    day.innerHTML = "";
    return;
  }
  myElement.innerHTML = "";
  let getyear = currDate.getFullYear() - userDate.getFullYear();

  let getMonth = currDate.getMonth() - userDate.getMonth();
  let getDay = currDate.getDate() - userDate.getDate();

  if (getMonth < 0) {
    getyear--;
    getMonth += 12;
  }
  if (getDay < 0) {
    getMonth--;
    let lastMonth = new Date(
      currDate.getFullYear(),
      currDate.getMonth() - 1,
      0
    );
    getDay += lastMonth.getDate();
  }

  year.innerHTML = getyear;
  month.innerHTML = getMonth;
  day.innerHTML = getDay;
  clearInput();
}

function clearInput() {
  dateInput.value = "";
}
