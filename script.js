console.log("Welcome");
let turn="X";

let turnmusic=new Audio("clickit.wav");
let victory=new Audio("victory.wav");
let error=new Audio("error.mp3");
let iswin=false;

//change turn X-0 & 0-X 
const turnchange=()=>{
    return turn==="X" ? "0" :"X";
}


//is win function

win=()=>{
    let celltext=document.getElementsByClassName("celltext")
    let poss=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    poss.forEach(e=>{
        if((celltext[e[0]].innerText===celltext[e[1]].innerText) && (celltext[e[1]].innerText===celltext[e[2]].innerText) && (celltext[e[0]].innerText!=="")){
            if(iswin===false){
                victory.play();
            }
            if(iswin===false){
                document.getElementsByClassName("turntext")[0].innerHTML=celltext[e[0]].innerText+" Won!!";
            }
            iswin=true;
            document.getElementsByTagName("img")[0].style.width=("140px");
            document.getElementsByTagName("img")[0].style.height=("140px");
        }
    })

}

//work

let cells=document.getElementsByClassName("cell");
Array.from(cells).forEach(element=>{
    let celltext=element.querySelector('.celltext');
    element.addEventListener("click",()=>{
        if(celltext.innerText===""){
            celltext.innerText=turn;
            turnmusic.play();
            turn=turnchange();
            win();
            if(iswin===false){
                document.getElementsByClassName("turntext")[0].innerHTML=turn+"'s Turn now!!";
            }
            
        }
        

    })
})

//reset button
let reset=document.getElementsByClassName("reset")[0];
reset.addEventListener('click',()=>{
    let celltext=document.querySelectorAll('.celltext');
    Array.from(celltext).forEach(element => {
        element.innerText="";
    });
    turn="X";
    iswin=false;
    document.getElementsByTagName("img")[0].style.width=("0px");
    document.getElementsByTagName("img")[0].style.height=("0px");
    document.getElementsByClassName("turntext")[0].innerHTML=turn+"'s Turn now!!";
})
