const myWholeBusinessCard = document.querySelector("#business-card");
const myNameElement = document.querySelector("h1");

console.dir(myNameElement);

myWholeBusinessCard.addEventListener("click", function () {
    myWholeBusinessCard.classList.add("red");
    const brandNewH2 = document.createElement("h2");
    brandNewH2.innerText = "It's red now!";
    myWholeBusinessCard.appendChild(brandNewH2);
    setTimeout(() => {
        myWholeBusinessCard.remove();
        setTimeout(() => {
            document.body.appendChild(myWholeBusinessCard)
        }, 2000)
    }, 3000);
})

// setTimeout(() => {
   
// }, 3000);

setInterval(() => {
    const colors = ["red", "purple", "green", "blue"];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)]
    myNameElement.style.color = chosenColor
  }, 200);