let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");

let turnO = true;
const winPtrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.disabled = true;
            checkwinner();
        } else {
            box.innerText = "X";
            turnO = true;
            box.disabled = true;
            checkwinner();
        }
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disabledBoxes();
}

const checkwinner = () => {
    for (let ptrn of winPtrn) {
        let pos0val = boxes[ptrn[0]].innerText;
        let pos1val = boxes[ptrn[1]].innerText;
        let pos2val = boxes[ptrn[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                console.log("winner ", pos0val);
                showWinner(pos0val);
            }
        };
    };
}

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");

}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);