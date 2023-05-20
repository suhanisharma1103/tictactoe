console.log("lets play tic tac toe")
let chance="X";
let gameover=false;
const change=()=>{
    return chance==="X"?"O": "X";
}
const win=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
    [0,1,2],
    
    [6,7,8],
    [0,3,6],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"Congratulations!u won"
            gameover=true;
        }
    }

    )}




let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelection('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=chance;
            chance=changeturn();
            win();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="turn"+chance;

            }
            
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    chance="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText="turn for"+chance;

 

})
