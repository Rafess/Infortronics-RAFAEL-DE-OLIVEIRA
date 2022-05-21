const sortButton = document.querySelector(".sort-number");
const div = document.querySelector(".div-display");
const paragraph = document.querySelector(".sorted-numbers");
const saveToFileBtn = document.querySelector(".save-file")
function sortNumbers() {
    paragraph.textContent = "";
    let input = document.querySelector("#numbers").value;
    let numbers = input.split(" ");
    let sortedNumbers = numbers.sort((a, b) => a - b);
    paragraph.append(sortedNumbers);
    disableBtn();
    return paragraph;
}

