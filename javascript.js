const container = document.getElementById("container");

function makeGrid(rows, col){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', col);
    for(c = 0; c < (rows*col); c++){
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        cell.className = "grid-item";
        container.appendChild(cell);
        
    };
};



const gridItems = document.getElementsByClassName("grid-item");

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseenter', function() {
        gridItems[i].classList.add('hovered');
    });
}
makeGrid(16, 16);

