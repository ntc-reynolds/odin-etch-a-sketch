let pageContainer = document.querySelector(".page-container");
let sizeButton = document.querySelector("#set-grid-size");
let clearGridButton = document.querySelector("#clear");
let sketchContainer = document.querySelector(".sketch-container");

let size = 20;
drawGrid(size);

clearGridButton.addEventListener("click",()=>{
    document.querySelectorAll("div.block").forEach((element)=>{
        element.style.backgroundColor = "white";
        element.style.opacity = 0;
    });
});

sizeButton.addEventListener("click", ()=>{
    let userSize;
    do{
        userSize = Number(prompt("Enter a number between 8 and 100: "));
        if (typeof(userSize)=="number"&&userSize<=100&&userSize>=8){
            removeGrid();
            drawGrid(userSize);
            break;
        }else{
            continue;
        };
    }while(true); 
});
function drawGrid(gridSize) {
    for (let i=0; i<gridSize; i++){
        let rowflex = document.createElement("div");
        rowflex.classList.add("rowflex");
        for (let j=0; j<gridSize;j++){
            let block = document.createElement("div");
            let blockOpacity = 0;
            let blockColour = "white"
            block.classList.add("block");
            block.style.backgroundColor = "white";
            block.addEventListener("mouseover", function(){
                if (block.style.backgroundColor == "white"){
                    randomColor = Math.floor(Math.random()*16777215).toString(16);
                    block.style.backgroundColor = "#" + randomColor;
                    block.style.opacity = 0.1;
                }else if(blockOpacity<1.0){
                    blockOpacity = Math.min(blockOpacity+0.1, 1.0);
                    block.style.opacity = blockOpacity;
                }
            });
            rowflex.appendChild(block);
        }
        sketchContainer.appendChild(rowflex);
    }
}
function removeGrid(){
    while(sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
}