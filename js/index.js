let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value.trim());
    clearInput(inputEl);
    focusOnInput(inputEl);
    renderLeads();
});

function clearInput(target) {
    target.value = "";
}

function focusOnInput(target) {
    target.focus();
}

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}

