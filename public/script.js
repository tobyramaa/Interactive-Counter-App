const counterDisplay = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");
const title = document.getElementById("title");

let count = 0;

function updateCounter(changeType = null) {
    counterDisplay.textContent = count;

    if (count === 0) {
        subtractBtn.disabled = true;
        subtractBtn.classList.add("bg-gray-400", "cursor-not-allowed");
        subtractBtn.classList.remove("bg-blue-500", "hover:ring-pink-400");

    }
    else {
        subtractBtn.disabled = false;
        subtractBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
        subtractBtn.classList.add("bg-blue-500", "hover:ring-pink-400");
    }

    counterDisplay.classList.remove("text-green-500", "text-red-500", "text-blue-500");
    void counterDisplay.offsetWidth; 

    if (changeType === "add") {
        counterDisplay.classList.add("text-green-500");
        setTimeout(() => {
            counterDisplay.classList.remove("text-green-500");
        }, 500);
    }
    else if (changeType === "subtract") {
        counterDisplay.classList.add("text-red-500");
        setTimeout(() => {
            counterDisplay.classList.remove("text-red-500");
        }, 500);
    }
    else{
        counterDisplay.classList.add("text-blue-500");
    }
}

// Add button click

addBtn.addEventListener("click", () => {
    count++;
    updateCounter("add");

});

// Subtract button click
subtractBtn.addEventListener("click", () =>{
    if (count > 0) {
        count--;
        updateCounter("subtract");
    }
});

// Reset button click
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter("reset");
});

// Animate title on page load
window.addEventListener("load", () => {
    title.classList.add("animate-pulse");
    setTimeout(() => {
        title.classList.remove("animate-pulse");
    }, 5000);
});
