const packaging = [
  {
    weight: "100&nbsp;г",
    number: "01306",
    newprice: "326,40&nbsp;₽",
    oldprice: "349,20&nbsp;₽",
  },
  {
    weight: "500&nbsp;г",
    number: "01307",
    newprice: "1&nbsp;432&nbsp;₽",
    oldprice: "1&nbsp;646&nbsp;₽",
  },
  {
    weight: "1000&nbsp;г",
    number: "01308",
    newprice: "2&nbsp;064&nbsp;₽",
    oldprice: "2&nbsp;592&nbsp;₽",
  },
  {
    weight: "5000&nbsp;г",
    number: "01309",
    newprice: "6&nbsp;320&nbsp;₽",
    oldprice: "8&nbsp;710 &nbsp;₽",
  },
];

packaging.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = item.weight;
  li.dataset.index = index;
  document.querySelector(".packaging").append(li);
});

const packagingLi = document.querySelectorAll(".packaging li");
setActive(packagingLi[0]);

packagingLi.forEach((element) => {
  element.addEventListener("click", showInfo);
});

const productNumber = document.querySelector(".data .productnumber");
const newPrice = document.querySelector(".data .newprice");
const oldPrice = document.querySelector(".data .oldprice");

function showInfo(event) {
  const activeEl = event.currentTarget;
  setActive(activeEl);
  const index = activeEl.dataset.index;
  const item = packaging[index];
  productNumber.innerHTML = "артикул: " + item.number;
  newPrice.innerHTML = item.newprice;
  oldPrice.innerHTML = item.oldprice;
}

function setActive(element) {
  packagingLi.forEach((li) => {
    li.classList.remove("active");
  });
  element.classList.add("active");
}
