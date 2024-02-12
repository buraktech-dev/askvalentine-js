const moveButton = document.getElementById("moveButton");
const yesButton = document.getElementById("yesButton");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

const bodyDimensions = document.body.getBoundingClientRect();
const moveButtonDimensions = moveButton.getBoundingClientRect();

const text = [
    "What?!",
    "What are you doing?!",
    "No! Press YES!",
    "Hello?! You are mine!",
    "AAAA PRESS YES!",
    "There is NO WAY you can get out of this.",
    "It's decided. You are mine.",
    "Nope.",
    "Give up already.",
    ">:(",
    "Good, go on. Click NO. I CHALLENGE YOU."
]

// When "YES"-Button is clicked -> Gif appears and "NO"-Button disappears
yesButton.addEventListener("click", () => {
    question.innerHTML = "YAAYY!! I LOVE YOU TOO!"; 
    moveButton.parentNode.removeChild(moveButton);

    gif.setAttribute("src", "https://media.giphy.com/media/Poc1UGfnHHZR9nDlLb/giphy.gif");
})

// When "NO"-Button is clicked -> "NO"-Button moves and text changes
moveButton.addEventListener('click', () => {
    // Adjust how far you want the button to be able to move
    const x = Math.floor(Math.random() * (1000)  + 1);
    const y = Math.floor(Math.random() * (500) + 1);

    let num = Math.floor(Math.random() * text.length);

    moveButton.style.left = x + "px";
    moveButton.style.top = y + "px";

    question.innerHTML = text[num];
    gif.setAttribute("src", "https://media.giphy.com/media/U99JooiWOrqhdl8ZFF/giphy.gif");
});

