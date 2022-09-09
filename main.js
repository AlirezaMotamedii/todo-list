
let ul = document.querySelector("ul");
let button = document.querySelector("button");
let input = document.querySelector("input");


// Function


function AddFunc() {
    if (input.value) {
        let value = input.value;
        let li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);
        input.value = "";
        let btn = document.createElement("button");
        btn.textContent = "Done";
        li.appendChild(btn);
        btn.classList.add("bttn")
        function OverRightFunc() {
            li.classList.add("overright")
        }
        btn.onclick = OverRightFunc;
    }
}


// Event

button.onclick = AddFunc;
