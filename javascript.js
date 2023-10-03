const container = document.getElementById("container");
let gridblocks; let grid; let currentcolor = "#00000";



let text = document.createElement('p');
text.textContent = "Etch-a-Sketch, TheOdinProject";

document.body.insertBefore(text,container);

btnReset =  document.createElement("button");
btnReset.setAttribute("id", "reset");
btnReset.textContent = "Reset";
btnReset.style.backgroundColor = "#333333";
btnReset.addEventListener("click",resetGrid);

btnRandom =  document.createElement("button");
btnRandom.setAttribute("id", "random");
btnRandom.style.backgroundColor = "#333333";
btnRandom.textContent = "Random";
btnRandom.addEventListener("click",randomGrid);

setColor =  document.createElement("input");
setColor.type = "color";
setColor.setAttribute("id", "color");
setColor.textContent = "color";
setColor.addEventListener("input", (e) => { 
    colorGrid(); // Call the colorGrid function whenever the color changes
});

const btnCont = document.createElement("div");
document.body.insertBefore(btnCont,container);
btnCont.setAttribute("id", "buttonContainer");
btnCont.appendChild(btnReset);  btnCont.appendChild(btnRandom); btnCont.appendChild(setColor);

function makeGrid(rows, col){
    for(c = 0; c < (rows*col); c++){
        let div = document.createElement("div");
        div.className = "gridblock";
        div.backgroundColor = '#FFFFFF';
        div.setAttribute("id", `div${c}`);  
        container.appendChild(div);
    }; 
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', col);
    document.getElementById("container").style.gridTemplateColumns = `repeat(${col},1fr)`;
    document.getElementById("container").style.gridTemplateRows= `repeat(${rows},1.25rem)`;

    let gridblocks = document.getElementsByClassName("gridblock");
    grid = Array.from(gridblocks);
    
};
makeGrid(16, 16);
grid.forEach(block => {
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "black";
        block.style.color = 'black';
    });
    
});

function resetGrid(){
    grid.forEach(element => {
        container.removeChild(element);
    });
    let rowCol = getsize();
    makeGrid(rowCol[0],rowCol[1]);
    grid.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "black";
        
        });
        
    });
}

function getsize(){
    let col = prompt("No. of Columns: (Max 100)",16);
    let row = col;
    let result=[];
    if (col == null|| row == null){
        result.push(16);
        result.push(16);
        return result;
    };
    col = parseInt(col);
    row = parseInt(row);
    if(col>100 || row > 100 || isNaN(col)|| isNaN(row)){
        alert("No. of columns or rows can't exceed 100.")
        return getsize();
    } else{
    result.push(col);
    result.push(row);
    return result;}
    }

function randomGrid(){
    grid.forEach(element => {
        container.removeChild(element);
    });
    let rowCol = getsize();
    makeGrid(rowCol[0],rowCol[1]);
    grid.forEach(block => {
        block.addEventListener("mouseover", () => {
            console.log(random_rgba);
            block.style.backgroundColor = random_rgba();
        
        });
        
    });
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function colorGrid(){
    grid.forEach(element => {
        container.removeChild(element);
    });
    let rowCol = getsize();
    makeGrid(rowCol[0],rowCol[1]);
    btnReset.style.backgroundColor = setColor.value;
    btnRandom.style.backgroundColor = setColor.value;
    grid.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = setColor.value;
        });
        
    });
}
