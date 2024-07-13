const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.querySelector('.label').addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = currentBox.querySelector(".content");
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const firstBtn = document.querySelector('#boxOne .label');
    firstBtn.dispatchEvent(new Event('click'));
});