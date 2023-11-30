//FUNZIONE CHE GENERA NUMERO CASUALE CHE NON SI RIPETE E LO INSERISCE IN ARRAY
function randomUniqueNum(array_bombs){
    let check = false;
    let randomNum;

    while(!check){
        randomNum = Math.floor(Math.random() * 100 +1);

        if(!array_bombs.includes(randomNum)){
            check = true;
        }
    }

    return randomNum;
}

//FUNZIONE CHE CREA ARRAY CONTENENTE LA POSIZIONE DELLE BOMBE
function createBomb(bombs){
    let arr_bombs = [];

    for(i=0; i<bombs; i++);
        arr_bombs.push(randomUniqueNum(arr_bombs));

    return arr_bombs;
}

//FUNZIONE CHE CREA CELLE
function createCell(num){//num = i+1
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;
    return element;
}

//FUNZIONE CHE RICHIAMA ELEMENTO DAL DOM E APPENDE CELLE PER CREARE CELLE
function viewGrid(){

    const grid = document.getElementById('grid');
    
    const num_bombs = 16;
    
    grid.innerHTML = '';
    for(let i=0; i<100; i++){
        let square = createCell(i+1);

        grid.appendChild(square);
    }

    const numberOfBombs = createBomb(num_bombs);
    console.log(numberOfBombs);
}


let button = document.getElementById('start');
button.addEventListener('click', function(){
    
    viewGrid();
});
