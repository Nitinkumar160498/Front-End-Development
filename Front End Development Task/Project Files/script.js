const words = ["Healthy", "Wealthy", "Marijuana"];
let wordIndex = 0;
const updateWordElement = document.getElementById("updateWord");

function updateWord() {
    updateWordElement.style.opacity = "0";
    setTimeout(() => {
        updateWordElement.textContent = words[wordIndex];
        updateWordElement.style.opacity = "1";
        wordIndex = (wordIndex + 1) % words.length;
    }, 1000);
}

setInterval(updateWord, 2000);

function toggleContentBox() {
    const contentBox = document.getElementById("contentBox");
    const navigateButton = document.getElementById("navigateButton");

    if (contentBox.classList.contains("show")) {
        contentBox.classList.remove("show");
        navigateButton.style.display = "block";
    } else {
        contentBox.classList.add("show");
        navigateButton.style.display = "none";
    }
}

