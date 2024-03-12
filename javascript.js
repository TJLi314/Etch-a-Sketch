const divs = [];
const custBtn = document.querySelector('.customize');
const clearBtn = document.querySelector('.clear');
const square = document.querySelector("#square");
const initialDim = 16;

createGrid(initialDim);

custBtn.addEventListener('click', function() {
    let cellsInput = prompt("Enter a number from 1-100", 16);

    if (cellsInput == null) {
        alert("Operation cancelled.");
    }
    else {
        cellsInput = parseInt(cellsInput);
        if(isNaN(cellsInput) || cellsInput < 1 || cellsInput > 100){
            alert("Invalid value, please try again.");
          } else {
            createGrid(cellsInput);
          }
    }
});

clearBtn.addEventListener('click', function() {
    divs.forEach((div) => div.style.backgroundColor = 'white');
});

function createGrid (cells) {
    divs.forEach((div) => square.removeChild(div));
    divs.length = 0;
    
    for (let i = 1; i <= cells * cells; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute("style", `width: ${960 / cells}px; height: ${960 / cells}px;`);
            divs.push(div);
    }
    
    divs.forEach((div) => {
        div.addEventListener('mouseenter', function() {
            let rgb1 = Math.round(Math.random() * 256);
            let rgb2 = Math.round(Math.random() * 256);
            let rgb3 = Math.round(Math.random() * 256);
            div.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        });
        square.appendChild(div);
    });
}
