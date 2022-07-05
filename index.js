// 1. Create a table 100x100. Compare performance in adding	listener to	each cell click	and	
// event delegation.
// 2. Apply	drag&drop	functionality	to	each	cell.

function tableCreate(row, col, label){
    let body = document.body;
    let tbl  = document.createElement('table');
    tbl.classList.add(`${label}`)
    tbl.style.border = '1px solid black';
    tbl.style.paddingBottom = '10px';

    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.setAttribute('draggable', true);
                td.setAttribute('id', 'cell');
                td.addEventListener('dragstart', dragStart);
                td.appendChild(document.createTextNode(`${i},${j}` ));
                td.style.border = '1px solid black';
            }     
    }
    body.appendChild(tbl);
}

tableCreate(100,100, 'eventDelegation');

const table = document.querySelector('.eventDelegation');
table.addEventListener('click', () => {
    console.log('eventDelegation');
});

tableCreate(100,100, 'listenersInEachCell');

const cells = document.querySelectorAll('.listenersInEachCell');
cells.forEach(cell => cell.addEventListener('click',() => {console.log('listenersInEachCell', cell)}));

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
 }

const tables = document.querySelectorAll('table');

tables.forEach(table => {
    table.addEventListener('dragenter', dragEnter)
    table.addEventListener('dragover', dragOver);
    table.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    e.target.style.display = 'initial';
}
