const container = document.getElementById("container");


function makeGrid(rows, col){

    for(c = 0; c < (rows*col); c++){
        let div = document.createElement("div");
        div.innerText = c + 1;
        div.className = "gridblock";
        div.style.border = "1px solid black"
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



grid.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        item.style.backgroundColor = "black";
    })   
});
