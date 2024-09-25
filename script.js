let height = 16;
let width = 16;

let container = document.querySelector(".container");
let counter = 1;
for (let i=0; i<height; i++){
    let rowflex = document.createElement("div");
    rowflex.classList.add("rowflex");
    for (let j=0; j<width;j++){
        let block = document.createElement("div");
        block.classList.add("block");
        block.textContent = `${counter}`;
        block.addEventListener("mouseover", ()=>{
            block.style.backgroundColor = "cyan";
        });
        block.addEventListener("mouseout", ()=>{
            block.style.backgroundColor = "white";
        });
        rowflex.appendChild(block);
        counter++;
    }
    container.appendChild(rowflex);
}