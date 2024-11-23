let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let turnO = true;//playerX,playerO

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg= document.querySelector("#msg");
//storing the patterns from which the user can win inside a 2D array
const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            //jab o ka turn hoga to X off rahega jaise O ka turn ho gaya fir O off ho jayega aise alternate hote rahega.
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        //jab ek box me ek value chala gaya hai to fir use change nahi karna hai as per tic tac toe rules. to aisa karne ke liye jo box me use ho gaya(uska turn chala gaya) to fir use disbale kardo.
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disbaled = false;
        box.innerText = "";
}
}
const showWinner = (winner) =>{
    msg.innerHTML = `<i>congratulations, winner is ${winner}</i>`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]); 

        //ye sirf winnig pattern ka index ko print karega

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

        //yaha boxes wala array me jao aur 0th index me jao fir boxes wala array me jao aur fir 1st index me jao fir last me boxes wala array me jao aur fir 2nd index me jao.
        //innerText print karega ke boxes me kya value hai

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        //jjetne ke liye winning pattern ka ek bhi position khali nai hona chaiye 
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER is player " + pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

