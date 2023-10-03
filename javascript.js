const container = document.getElementById("container");
let gridblocks; let grid;

btnReset =  document.createElement("button");
btnReset.setAttribute("id", "reset");
btnReset.textContent = "Reset";
document.body.insertBefore(btnReset,container);
btnReset.addEventListener("click",resetGrid);

function makeGrid(rows, col){
    for(c = 0; c < (rows*col); c++){
        let div = document.createElement("div");
        div.innerText = c + 1;
        div.className = "gridblock";
        div.style.border = "0.5px dashed lightblue"
        div.setAttribute("id", `div${c}`);  
        container.appendChild(div);
    }; 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', col);
    document.getElementById("container").style.gridTemplateColumns = `repeat(${col},1fr)`;
    document.getElementById("container").style.gridTemplateRows= `repeat(${rows},1fr)`;

    let gridblocks = document.getElementsByClassName("gridblock");
    grid = Array.from(gridblocks);
    
};
makeGrid(16, 16);
grid.forEach(block => {
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "black";
    });
    
});


function resetGrid(){
    grid.forEach(element => {
        container.removeChild(element);
    });
    let rowCol = getsize();
    console.log(rowCol);
    makeGrid(rowCol[0],rowCol[1]);
    grid.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "black";
        });
        
    });
}

function getsize(){
    let col = prompt("how many columns? Max 100",16);
    let row = col;
    let result=[];

    col = parseInt(col);
    row = parseInt(row);
    result.push(col);
    result.push(row);
    return result;
    }
