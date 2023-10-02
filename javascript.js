const container = document.getElementById("container");

function makeGrid(rows, col){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', col);
    for(c = 0; c < (rows*col); c++){
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16,16);