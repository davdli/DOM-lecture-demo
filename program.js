const businessCardElement = document.querySelector("#business-card");

const phoneNumber = document.querySelector("phone-number");

const makeMyCardPurple = () => {
    businessCardElement.style.background = "purple";
}

const makeMyCardWhite = () => {
    businessCardElement.style.background = "white";
}

businessCardElement.addEventListener(
    "click",
    function(event) {
        console.log(event);
        if (businessCardElement.style.background === "purple") {
            makeMyCardWhite();
        } else {
            makeMyCardPurple();
        }
    }
)

phoneNumber.addEventListener("click", function(event) {
    event.stopPropoagation();
    console.log("Phone was clicked!");
})

const buttonSection = document.querySelector("#button-section");

buttonSection.addEventListener("click", function (event) {

    console.log(this);

    const exactButtonThatWasClicked = event.target;

    const action = exactButtonThatWasClicked.id;

    if (action === "purple") {
        makeMyCardPurple();
    } else if (action === "white") {
        makeMyCardWhite();
    } else if (action === "spin") {
        // todo
    } else {
        throw new Error("UNKNOWN ACTION")
    }
})

setTimeout(() => {
    const newButton = document.createElement("button");
    newButton.innerText = "MAKE MY CARD WHITE";
    newButton.id = "white";
    buttonSection.appendChild(newButton);
}, 5000)
